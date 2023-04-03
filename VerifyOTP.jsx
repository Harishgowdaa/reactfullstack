import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function VerifyOTP() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[custid,setCustid]=useState('')
    const[otp,setOtp]=useState('')
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    // email.current.value=""
    // password.current.value=""
    const OTP={custid,otp}
    console.log(OTP)
    
    fetch("http://localhost:8080/management/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(OTP)

  }).then(()=>{
    console.log("OTP Verified")
  })  
}

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Verify Your OTP</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Customer Id" variant="outlined" fullWidth 
      value={custid}
      onChange={(e)=>setCustid(e.target.value)} />
      <TextField id="outlined-basic" label="OTP" variant="outlined" fullWidth
      value={otp}
      onChange={(e)=>setOtp(e.target.value)} />
      <Button variant="contained" color="primary">Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Verify</Button>
    </form>
    </Paper>

 </Container>
  );
}

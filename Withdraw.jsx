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

export default function Withdraw() {
  let navigate=useNavigate()
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[acno,setAcno]=useState('')
    const[amount,setAmount]=useState('')
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    // email.current.value=""
    // password.current.value=""
    const withdraw={acno,amount}
    console.log(withdraw)
    
    fetch("http://localhost:8080/customer/account/withdraw/1002121111/2000",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(withdraw)

  }).then(()=>{
    console.log("Withdraw Success")
  })  
}

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Withdraw</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Account Number" variant="outlined" fullWidth 
      value={acno}
      onChange={(e)=>setAcno(e.target.value)} />
      <TextField id="outlined-basic" label="Amount" variant="outlined" fullWidth
      value={amount}
      onChange={(e)=>setAmount(e.target.value)} />
      <Button variant="contained" color="primary">Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Withdraw</Button>
    </form>
    </Paper>

 </Container>
  );
}

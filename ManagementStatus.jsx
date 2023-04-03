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

export default function ManagementStatus() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[acno,setAccno]=useState('')
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    // email.current.value=""
    // password.current.value=""
    const status={acno}
    console.log(status)
    
    fetch("http://localhost:8080/management/accountchange/1002121112",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(status)

  }).then(()=>{
    console.log("Management Status Changed")
  })  
}

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Management Account Status</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Account Number" variant="outlined" fullWidth 
      value={acno}
      onChange={(e)=>setAccno(e.target.value)} />
      
<br />
      <Button variant="contained" color="primary" >Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Change Status</Button>
    </form>
    </Paper>

 </Container>
  );
}

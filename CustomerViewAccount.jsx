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

export default function CustomerViewAccount() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[cust_id,setCust_id]=useState('')
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    // email.current.value=""
    // password.current.value=""
    const view={cust_id}
    console.log(view)
    
    fetch("http://localhost:8080/customer/accounts/121401101",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(view)

  }).then(()=>{
    console.log("Viewed success")
  })  
}

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Customer View Accounts</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Customer ID" variant="outlined" fullWidth 
      value={cust_id}
      onChange={(e)=>setCust_id(e.target.value)} />
      
      <Button variant="contained" color="primary">cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> View Accounts</Button>

    </form>
    </Paper>

 </Container>
  );
}

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
  
const CustomerSignup = () => {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[mobile,setMobile]=useState('')
    const[dob,setDob]=useState('')
     const classes = useStyles();

     const handleClick=(e)=>{
        e.preventDefault()
        // email.current.value=""
        // password.current.value=""
        const customer={name,email,password,mobile,dob}
        console.log(customer)
        
        fetch("http://localhost:8080/customer/add",{ 
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(customer)
    
      }).then(()=>{
        console.log("Customer added")
      })  
    }
    
  return (
    <>
     <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Customer Signup Page</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)} />

      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth 
      value={email}
      onChange={(e)=>setEmail(e.target.value)} />

      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)} />
      
      <TextField id="outlined-basic" label="Mobile" variant="outlined" fullWidth
      value={mobile}
      onChange={(e)=>setMobile(e.target.value)} />

      <TextField id="outlined-basic" label="DOB" variant="outlined" fullWidth
      value={dob}
      onChange={(e)=>setDob(e.target.value)} />

      <Button variant="contained" color="primary"> Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Submit</Button>
    </form>
    </Paper>

 </Container>
    
    </>
  )
}
export default CustomerSignup
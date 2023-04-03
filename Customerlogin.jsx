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

const Customerlogin = () => {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[id,setId]=useState('')
    const[password,setPassword]=useState('')
     const classes = useStyles();

     const handleClick=(e)=>{
        e.preventDefault()
        // email.current.value=""
        // password.current.value=""
        const custLogin={id,password}
        console.log(custLogin)
        
        fetch("http://localhost:8080/customer/login",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(custLogin)
    
      }).then(()=>{
        console.log("Login Customer Success")
      })  
    }
  return (
    <>
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Customer Login</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="ID" variant="outlined" fullWidth 
      value={id}
      onChange={(e)=>setId(e.target.value)} />
      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)} />
      <Button variant="contained" type='reset' color="primary"> Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> Submit</Button>
    </form>
    </Paper>

 </Container>
    </>
  )
}

export default Customerlogin
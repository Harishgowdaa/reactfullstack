import React from 'react';
import { Container ,Paper,Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"

export default function ManagementFetchAccounts() {
  let navigate=useNavigate()

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}

  const handleClick=(e)=>{
    e.preventDefault()
   
}

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Fetch All Accounts</u></h1>

      <Button variant="contained" color="primary" > Cancel</Button>
      <Button variant="contained" color="secondary" onClick={handleClick}> View Accounts</Button>
    </Paper>

 </Container>
  );
}

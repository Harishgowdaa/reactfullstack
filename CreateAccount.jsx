import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
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

export default function CreateAccount() {
  let navigate=useNavigate()
    const classes = useStyles();

    
  return (
    <>    
        <Container>
        <Paper elevation={3} >
            <h1 style={{color:"blue"}}><u>Create Account</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
      
    <FormControl className={classes.root} noValidate autoComplete="off">
      <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="savings"
        name="radio-buttons-group"
      >
        <FormControlLabel value="savings" control={<Radio />} label="savings" />
        <FormControlLabel value="current" control={<Radio />} label="current" />
      <Button variant="contained" type='reset' color="primary"> Cancel</Button>
      <br />
      <Button variant="contained" color="secondary"> Submit</Button>
      </RadioGroup>
    </FormControl>
    </form>
    </Paper>

 </Container>
    
    </>

  );
}

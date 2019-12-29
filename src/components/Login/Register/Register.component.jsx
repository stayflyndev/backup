import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '20px',
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    },
  },
}));

export default function Register() {
  const classes = useStyles();

  return (
    <div className="login-title">
      Please Sign Up Or Sign in To Place an Order
  
    <form className={classes.root} noValidate autoComplete="off">

      
     
      <TextField required id="standard-required" label="Name" />
      <TextField required id="standard-required" label="Email" />
      <TextField required id="standard-required" label="Age" />



    </form>
    </div>
  );
}
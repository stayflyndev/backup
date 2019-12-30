import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Register from '../Login/Register/Register.component'
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(5),
    },
    title: {
      flexGrow: 2,
    },
    appBar:{
        backgroundColor: '#b53f7d'
    }
  }));

const NavBar = ({currentUser}) => {
    const classes = useStyles();

    return (
    
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            
            <Typography variant="h6" className={classes.title}>
          Where Food is ...
            </Typography>
           
            {/* <Button component={Link} to='/login' color="inherit">Login</Button> */}
          
           { //if current user is signed in, show sign out, else  
             currentUser ?
             <Button onClick={ ()=> auth.signOut()} >Sign Out</Button>          
             :
             <Button component={Link} to='/login'>Sign In</Button>             
           }
          </Toolbar>
        </AppBar>
      </div>
    );
}


// 
// #b53f7d
export default NavBar;

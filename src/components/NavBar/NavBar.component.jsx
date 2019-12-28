import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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

const NavBar = () => {
    const classes = useStyles();

    return (
    
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            
            <Typography variant="h6" className={classes.title}>
          Where Food is ...
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}


// 
// #b53f7d
export default NavBar;

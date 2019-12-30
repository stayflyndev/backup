import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import  {SignInWithGoogle} from '../../../firebase/firebase.utils'


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    testing: purple
  },
});

const useStyles = {
    root: {
        backgroundColor: 'red',
    },
};

class Signin extends Component {
    constructor(props) {
        super(props);

            this.state={
                email: '',
                password: ''
            }
         
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''}) //input fields back to an empty string
    }

    handleChange = (e) => {
        const { value, name } = e.target
        // console.log(value + name)
        this.setState({ [name]: value })
    }

    render() {

        const { classes } = this.props

        return (
            <ThemeProvider theme={theme}>
            <div className="form">
                <span className="formSpan"> Sign into your account</span>
                <div>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <Input name="email" label='email' type="email" value={this.state.email} placeholder="email" color="primary" inputProps={{ 'aria-label': 'description' }}  onChange={this.handleChange} />
                    <Input name="password" label='password' type="password"  value={this.state.password} placeholder="password"  color="secondary" inputProps={{ 'aria-label': 'description' }} onChange={this.handleChange} />
                   
                    <Button color="primary" type="submit" value="submit form" >Sign In </Button>
                    <Button color="primary" onClick={SignInWithGoogle} >SIGN IN WITH GOOGLE </Button>

                 
                </form>
                
                </div>

            </div>
            </ThemeProvider>
        );
    }
}



export default withStyles(useStyles)(Signin);
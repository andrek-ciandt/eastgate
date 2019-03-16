import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton'
import Paper from '@material-ui/core/Paper'
import { SIGNUP_PATH } from 'constants/paths'
import LoginForm from '../LoginForm'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function LoginPage({ emailLogin, facebookLogin, onSubmitFail, classes }) {
    return ( <
        div className = { classes.root } >
        <
        div className = { classes.providers } >
        <
        div >
        <
        Paper className = { classes.root }
        elevation = { 1 } >
        <
        Typography variant = "h5"
        component = "h3" >
        This is a sheet of paper. <
        /Typography> <
        Typography component = "p" >
        Paper can be used to build surface or other elements
        for your application. <
        /Typography> < /
        Paper > <
        /div> <
        FacebookLoginButton onClick = { facebookLogin }
        />  < /
        div > <
        div className = { classes.signup } > < /
        div > <
        /div>
    )
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired, // from enhancer (withStyles)
    emailLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
    onSubmitFail: PropTypes.func.isRequired, // from enhancer (withHandlers)
    googleLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
    facebookLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
}

export default withStyles(styles)(LoginPage)
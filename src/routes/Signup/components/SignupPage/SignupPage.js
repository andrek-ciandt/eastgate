import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton'
import Paper from '@material-ui/core/Paper'
import { LOGIN_PATH } from 'constants/paths'
import SignupForm from '../SignupForm'

function SignupPage({ emailSignup, facebookLogin, onSubmitFail, classes }) {
    return ( <
        div className = { classes.root } >
        <
        Paper className = { classes.panel } >
        <
        SignupForm onSubmit = { emailSignup }
        onSubmitFail = { onSubmitFail }
        /> < /
        Paper > <
        div className = { classes.orLabel } > or < /div> <
        div className = { classes.providers } >
        <
        FacebookLoginButton onClick = { facebookLogin }
        /> < /
        div > <
        div className = { classes.login } >
        <
        span className = { classes.loginLabel } > Already have an account ? < /span> <
        Link className = { classes.loginLink }
        to = { LOGIN_PATH } >
        Login <
        /Link> < /
        div > <
        /div>
    )
}

SignupPage.propTypes = {
    classes: PropTypes.object.isRequired, // from enhancer (withStyles)
    emailSignup: PropTypes.func.isRequired, // from enhancer (withHandlers)
    googleLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
    onSubmitFail: PropTypes.func.isRequired // from enhancer (reduxForm)
}

export default SignupPage
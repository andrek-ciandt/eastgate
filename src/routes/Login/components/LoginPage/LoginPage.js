import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton'
import Paper from '@material-ui/core/Paper'
import { SIGNUP_PATH } from 'constants/paths'
import LoginForm from '../LoginForm'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: "400",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function LoginPage({ emailLogin, facebookLogin, onSubmitFail, classes }) {
    return (
      <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
             Sign in
          </Typography>
          <FacebookLoginButton onClick = { facebookLogin }></FacebookLoginButton>
        </Paper>
    </main>
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
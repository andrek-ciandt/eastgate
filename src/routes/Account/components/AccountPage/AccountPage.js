import React from 'react'
import PropTypes from 'prop-types'
import defaultUserImageUrl from 'static/User.png'
import AccountForm from '../AccountForm'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AccountPage({ avatarUrl, updateAccount, profile, classes }) {
  return (
    <div className={classes.root}>
      <Paper className={classes.pane}>
        <div className={classes.settings}>
          <Grid container spacing={24}>     
            <Grid item xs={12} sm={6}>
              <img
                className={classes.avatarCurrent}
                src={avatarUrl || defaultUserImageUrl}
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.meta}>
                <AccountForm
                  onSubmit={updateAccount}
                  account={profile}
                  initialValues={profile}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  )
}

AccountPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  updateAccount: PropTypes.func.isRequired, // from enhancer (withHandlers)
  avatarUrl: PropTypes.string,
  profile: PropTypes.object
}

export default withStyles(styles)(AccountPage);

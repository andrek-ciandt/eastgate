import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button'
import { TextField } from 'redux-form-material-ui'
import ProviderDataForm from '../ProviderDataForm'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import DatePicker from 'material-ui/DatePicker';
import ChipInput from 'material-ui-chip-input'

let DateTimeFormat;
DateTimeFormat = global.Intl.DateTimeFormat;

const minDate = new Date();
const maxDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 110);
minDate.setHours(0, 0, 0, 0);
maxDate.setFullYear(maxDate.getFullYear() - 18);
maxDate.setHours(0, 0, 0, 0);


function AccountForm({
  account,
  handleSubmit,
  submitting,
  pristine,
  classes,
  selectedDate,
  handleDateChange
}) {
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h4>My Account</h4>
      <div className={classes.fields}>
        <Field
          fullWidth
          name="displayName"
          component={TextField}
          label="Display Name"
        />
        <Field name="email" label="Email" component={TextField} fullWidth />
        <MuiThemeProvider>     
          <DatePicker
            hintText="Birth date"
            firstDayOfWeek={0}
            openToYearSelection={true}
            minDate={minDate}
            maxDate={maxDate}
            formatDate={new DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format}
          /> 
        </MuiThemeProvider>

  
        <ChipInput
          fullWidth
          label="Interests"
          defaultValue={['foo', 'bar']}
          onChange={(chips) => handleDateChange}
        />
       
      </div>

      {!!account && !!account.providerData && (
        <div>
          <h4>Linked Accounts</h4>
          <ProviderDataForm providerData={account.providerData} />
        </div>
      )}
      <Button color="primary" type="submit" disabled={pristine || submitting}>
        {submitting ? 'Saving' : 'Save'}
      </Button>
    </form>
  )
}

AccountForm.propTypes = {
  account: PropTypes.object,
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired // from enhancer (reduxForm)
}

export default AccountForm

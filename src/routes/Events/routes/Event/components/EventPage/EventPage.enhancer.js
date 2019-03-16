import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { setPropTypes, setDisplayName, withProps } from 'recompose'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import styles from './EventPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedEventPage'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add props.match
  withRouter,
  // Set proptypes of props used in HOCs
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        eventId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  withProps(({ match: { params: { eventId } } }) => ({
    eventId
  })),
  // Create listeners based on current users UID
  firestoreConnect(({ eventId }) => [
    // Listener for events the current user created
    {
      collection: 'events',
      doc: eventId
    }
  ]),
  // Map events from state to props
  connect(({ firestore: { data } }, { eventId }) => ({
    event: get(data, `events.${eventId}`)
  })),
  // Show loading spinner while event is loading
  spinnerWhileLoading(['event']),
  // Add styles as props.classes
  withStyles(styles)
)

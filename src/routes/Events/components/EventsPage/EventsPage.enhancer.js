import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers, withStateHandlers, setDisplayName } from 'recompose'
import { withRouter } from 'react-router-dom'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import { LIST_PATH } from 'constants/paths'
import styles from './EventsPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedEventsPage'),
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Map auth uid from state to props
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Create listeners based on current users UID
  firestoreConnect(({ uid }) => [
    // Listener for events the current user created
    {
      collection: 'events',
      where: ['createdBy', '==', uid]
    }
  ]),
  // Map events from state to props
  connect(({ firestore: { ordered } }) => ({
    events: ordered.events
  })),
  // Show loading spinner while events and collabEvents are loading
  spinnerWhileLoading(['events']),
  // Add props.router
  withRouter,
  // Add props.showError and props.showSuccess
  withNotifications,
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ initialDialogOpen = false }) => ({
      newDialogOpen: initialDialogOpen
    }),
    // Add state handlers as props
    {
      toggleDialog: ({ newDialogOpen }) => () => ({
        newDialogOpen: !newDialogOpen
      })
    }
  ),
  // Add handlers as props
  withHandlers({
    addEvent: props => newInstance => {
      const { firestore, uid, showError, showSuccess, toggleDialog } = props
      if (!uid) {
        return showError('You must be logged in to create a event')
      }
      return firestore
        .add(
          { collection: 'events' },
          {
            ...newInstance,
            createdBy: uid,
            createdAt: firestore.FieldValue.serverTimestamp()
          }
        )
        .then(() => {
          toggleDialog()
          showSuccess('Event added successfully')
        })
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not add event')
          return Promise.reject(err)
        })
    },
    deleteEvent: props => eventId => {
      const { firestore, showError, showSuccess } = props
      return firestore
        .delete({ collection: 'events', doc: eventId })
        .then(() => showSuccess('Event deleted successfully'))
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not delete event')
          return Promise.reject(err)
        })
    },
    joinEvent: props => eventId => {
      const { firestore, showError, showSuccess } = props
      return firestore
        .delete({ collection: 'events', doc: eventId })
        .then(() => showSuccess('Event deleted successfully'))
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not delete event')
          return Promise.reject(err)
        })
    },
    goToEvent: ({ history }) => eventId => {
      history.push(`${LIST_PATH}/${eventId}`)
    }
  }),
  // Add styles as props.classes
  withStyles(styles)
)

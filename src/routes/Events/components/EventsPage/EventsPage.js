import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase/lib/helpers'
import { Route, Switch } from 'react-router-dom'
import EventRoute from 'routes/Events/routes/Event'
import EventTile from '../EventTile'
import NewEventTile from '../NewEventTile'
import NewEventDialog from '../NewEventDialog'
import { renderChildren } from 'utils/router'

function EventsPage({
  events,
  collabEvents,
  auth,
  newDialogOpen,
  toggleDialog,
  deleteEvent,
  addEvent,
  classes,
  match,
  goToEvent
}) {
  return (
    <Switch>
      {/* Child routes */}
      {renderChildren([EventRoute], match, { auth })}
      {/* Main Route */}
      <Route
        exact
        path={match.path}
        render={() => (
          <div className={classes.root}>
            <NewEventDialog
              onSubmit={addEvent}
              open={newDialogOpen}
              onRequestClose={toggleDialog}
            />
            <div className={classes.tiles}>
              {!isEmpty(events) &&
                events.map((event, ind) => (
                  <EventTile
                    key={`Event-${event.id}-${ind}`}
                    event={event}
                    onSelect={() => goToEvent(event.id)}
                    onDelete={() => deleteEvent(event.id)}
                    showDelete={false}
                  />
                ))}
                <NewEventTile onClick={toggleDialog} />
            </div>
          </div>
        )}
      />
    </Switch>
  )
}

EventsPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
  events: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
  newDialogOpen: PropTypes.bool, // from enhancer (withStateHandlers)
  toggleDialog: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  deleteEvent: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  collabEvents: PropTypes.object, // from enhancer (withHandlers - firebase)
  addEvent: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  goToEvent: PropTypes.func.isRequired // from enhancer (withHandlers - router)
}

export default EventsPage

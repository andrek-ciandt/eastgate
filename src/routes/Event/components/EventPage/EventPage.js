import React from 'react'
import PropTypes from 'prop-types'

function EventPage({ event, classes }) {
  return (
    <div className={classes.container}>
      <span>EventPage Component</span>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </div>
  )
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  event: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default EventPage

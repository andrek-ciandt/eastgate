import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

function EventPage({ event, eventId, classes }) {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} component="h2">
            {event.name || 'Event'}
          </Typography>
          <Typography className={classes.subtitle}>{eventId}</Typography>
          <div style={{ marginTop: '10rem' }}>
            <pre>{JSON.stringify(event, null, 2)}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  event: PropTypes.object.isRequired, // from enhancer (connect)
  eventId: PropTypes.string.isRequired // from enhancer (withProps)
}

export default EventPage

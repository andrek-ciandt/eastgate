import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'

function EventTile({ event, onSelect, onDelete, showDelete, classes }) {
  return (
    <Paper className={classes.root}>
      <div className={classes.top}>
        <span className={classes.name} onClick={onSelect}>
          {event.name || 'No Name'}
        </span>
        <p>
          {event.place || 'No Place'}
        </p>
        <p>
          {event.startTime.toDate().toDateString() || 'No Time'}
        </p>
        <p>
          {event.endTime.toDate().toDateString() || 'No Time'}
        </p>
        <p>
          {event.description || 'No Description'}
        </p>
        {showDelete && onDelete ? (
          <Tooltip title="delete">
            <IconButton onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : null}
      </div>
    </Paper>
  )
}

EventTile.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  name: PropTypes.string,
  place: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  showDelete: PropTypes.bool
}

EventTile.defaultProps = {
  showDelete: true
}

export default EventTile

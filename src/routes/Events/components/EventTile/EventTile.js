import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'

function EventTile({ event, onSelect, onDelete, onJoin, showDelete, classes }) {
  return (
    <Paper className={classes.root}>
      <div className={classes.top}>
        <span className={classes.name} onClick={onSelect}>
          {event.name || 'No Name'}
        </span>
        <Tooltip title="join">
          <IconButton onClick={onJoin}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <span>
          {event.numberOfUsersGoing || '0'}{' are going'}
        </span>
        <p>
          {event.place || 'No Place'}
        </p>
        <span>
          {event.startTime.toDate().toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute:'2-digit'
          })}{'~'}{event.endTime.toDate().toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute:'2-digit'
          })}
        </span>
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
  onJoin: PropTypes.func,
  showDelete: PropTypes.bool
}

EventTile.defaultProps = {
  showDelete: true
}

export default EventTile

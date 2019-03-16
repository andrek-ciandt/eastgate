import React from 'react'
import PropTypes from 'prop-types'
import ContentAddCircle from '@material-ui/icons/AddCircle'
import Paper from '@material-ui/core/Paper'

const iconSize = '6rem'
const iconStyle = { width: iconSize, height: iconSize }

function NewEventTile({ onClick, classes }) {
  return (
    <Paper className={classes.root} onClick={onClick}>
      <ContentAddCircle style={iconStyle} />
    </Paper>
  )
}

NewEventTile.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  onClick: PropTypes.func.isRequired
}

export default NewEventTile

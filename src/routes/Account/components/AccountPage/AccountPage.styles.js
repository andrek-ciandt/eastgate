export default theme => ({
  root: {
    ...theme.flexRowCenter,
    width: '100%',
    height: '100%',
    paddingTop: '1.5rem'
  },
  pane: {
    ...theme.flexColumnCenter,
    justifyContent: 'space-around',
    flexBasis: '90%',
    padding: theme.spacing.unit
  },
  settings: {
    ...theme.flexRowCenter
  },
  avatarCurrent: {
    width: '100%',
    maxWidth: '350px',
    marginTop: '0px',
    height: 'auto',
    cursor: 'pointer'
  },
  meta: {
    ...theme.flexColumnCenter,
    flexBasis: '90%',
    marginBottom: '3rem',
    marginTop: '2rem'
  }
})

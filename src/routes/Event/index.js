import { Loadable } from 'utils/components'
import { EVENT_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Event' */ './components/EventPage')
  })
}

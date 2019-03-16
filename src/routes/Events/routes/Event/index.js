import { Loadable } from 'utils/components'

export default {
  path: ':eventId',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Event' */ './components/EventPage')
  })
}

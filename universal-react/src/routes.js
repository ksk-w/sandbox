import * as Components from './components'

export const routes = {
  path: '',
  component: Components.App,
  childRoutes: [
    {path: '/', component: Components.Index},
    {path: '/about', component: Components.About}
  ]
}

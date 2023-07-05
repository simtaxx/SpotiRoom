import { Application } from 'express'
import routes from '../routes'

export default (app: Application) => {

  app.use('/musicProviderAuth', routes.musicProviderAuth)
  app.use('/musicProviderRefreshAuth', routes.musicProviderRefreshAuth)
  app.use('/musicProviderUserInfo', routes.musicProviderUserInfo)

  app.use('/albums', routes.albums)

  return app
}

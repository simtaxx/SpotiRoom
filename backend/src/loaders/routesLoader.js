import routes from '../routes'

export default (app) => {

  app.use('/musicProviderAuth', routes.musicProviderAuth)
  app.use('/musicProviderRefreshAuth', routes.musicProviderRefreshAuth)

  return app
}

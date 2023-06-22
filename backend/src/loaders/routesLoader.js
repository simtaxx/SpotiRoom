import routes from '../routes'

export default (app) => {

  app.use('/musicProviderAuth', routes.musicProviderAuth)

  return app
}

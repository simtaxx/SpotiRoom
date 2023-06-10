import routes from '../routes'

export default (app) => {

  app.use('/auth', routes.auth)
  app.use('/user', routes.user)

  return app
}

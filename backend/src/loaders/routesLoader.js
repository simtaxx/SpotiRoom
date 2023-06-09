import routes from '../routes'

export default (app) => {

  app.use('/user', routes.user)

  return app
}

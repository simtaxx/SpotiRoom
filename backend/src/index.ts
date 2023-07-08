import loaders from './loaders'
import express from 'express'

const app = express()
const start = async () => {
  await loaders(app)

  const port = process.env.PORT
  app.listen(port)
}

start()

export default app

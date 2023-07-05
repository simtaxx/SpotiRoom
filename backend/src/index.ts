import loaders from './loaders'
import express from 'express'

const start = async () => {
  const app = express()

  await loaders(app)

  const port = process.env.PORT

  app.listen(port, () => {
    console.log(`listening here http://localhost:${port}`)
  }).on('error', (err) => {
    console.log(err)
  })
}

start()

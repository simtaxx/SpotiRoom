import loaders from './loaders'
import express from 'express'

const start = async () => {
  const app = express()

  await loaders(app)

  const port = process.env.PORT || 3000
  app.listen(port, err => {
    if (err) {
      console.error(err)
      return err
    }

    console.log(`listening here http://localhost:${port}`)
  })
}

start()

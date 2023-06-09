import express from 'express'
import cors from 'cors'

export default (app) => {

  app.use(cors())
  app.use(express.urlencoded({extended: true}));
  app.use(express.json())

  return app
}

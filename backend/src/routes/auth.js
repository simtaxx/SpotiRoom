import { Router } from 'express'
import { Authentication } from '../domain/services/authentication'

const authRoutes = Router()

authRoutes.get('/', async (req, res) => {
  const authentication = new Authentication()
  const musicProvideAuthentication = await authentication.fetchMusicProviderAuthentication()

  res.send(musicProvideAuthentication)
})

export default authRoutes

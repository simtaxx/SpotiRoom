import { Router } from 'express'
import { SpotifyAuthentication } from '../adapters/externalServices/spotify/authentication'

const musicProviderAuth = Router()
const spotifyAuthentication = new SpotifyAuthentication()

musicProviderAuth.get('/', async (_req, res) => {
  try {
    const redirectionURL = await spotifyAuthentication.generateAuthenticationURL()

    res.send({ redirectionURL })
  } catch (error: any) {
    const { status, message } = error.response.data.error
    res.status(status).send(message)
  }
})

musicProviderAuth.post('/', async (req, res) => {
  try {
    const { code } = req.body
    const authentication = await spotifyAuthentication.generateAccessToken(code)

    res.send(authentication)
  } catch (error: any) {
    const { status, message } = error.response.data.error;
    res.status(status).send(message)
  }
})

export default musicProviderAuth

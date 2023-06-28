import { Router } from 'express'
import { SpotifyAuthentication } from '../adapters/externalServices/spotify/authentication'

const musicProviderAuth = Router()

musicProviderAuth.get('/', async (req, res) => {
  try {
    const spotifyAuthentication = new SpotifyAuthentication()
    const { redirectionURL } = await spotifyAuthentication.generateAuthenticationURL()

    res.send({ redirectionURL })
  } catch (error) {
    res.send(error)
  }
})

musicProviderAuth.post('/', async (req, res) => {
  try {
    const { code } = req.body
    const spotifyAuthentication = new SpotifyAuthentication()
    const authentication = await spotifyAuthentication.generateAccessToken(code)

    res.send(authentication)
  } catch (error) {
    res.send(error)
  }
})

export default musicProviderAuth

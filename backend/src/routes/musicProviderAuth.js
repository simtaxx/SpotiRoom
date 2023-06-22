import { Router } from 'express'
import { spotifyApi } from '../config/http'
import { SpotifyAuthentication } from '../adapters/externalServices/spotify/authentication'

const musicProviderAuth = Router()

musicProviderAuth.get('/', async (req, res) => {
  try {
    const spotifyAuthentication = new SpotifyAuthentication()
    const { redirectionURL, codeVerifier } = await spotifyAuthentication.generateAuthenticationURL()

    res.send({ redirectionURL, codeVerifier })
  } catch (error) {
    res.send(error)
  }
})

musicProviderAuth.post('/', async (req, res) => {
  try {
    const { code, codeVerifier } = req.body
    const spotifyAuthentication = new SpotifyAuthentication()
    const accessToken = await spotifyAuthentication.generateAccessToken(code, codeVerifier)

    res.send(accessToken)
  } catch (error) {
    res.send(error)
  }
})

export default musicProviderAuth

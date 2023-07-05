import { Router } from 'express'
import { SpotifyAuthentication } from '../adapters/externalServices/spotify/authentication'

const musicProviderRefreshAuth = Router()

musicProviderRefreshAuth.post('/', async (req, res) => {
  try {
    const { refreshToken } = req.body
    const spotifyAuthentication = new SpotifyAuthentication()
    const refreshAuthentication = await spotifyAuthentication.generateRefreshedAccessToken(refreshToken)

    res.send(refreshAuthentication)
  } catch (error) {
    const { status, message } = error.response.data.error
    res.status(status).send(message)
  }
})

export default musicProviderRefreshAuth

import { Router } from 'express'
import { SpotifyAuthentication } from '../adapters/externalServices/spotify/authentication'

const musicProviderRefreshAuth = Router()
const spotifyAuthentication = new SpotifyAuthentication()

musicProviderRefreshAuth.post('/', async (req, res) => {
  try {
    const { refreshToken } = req.body
    const refreshAuthentication = await spotifyAuthentication.generateRefreshedAccessToken(refreshToken)

    res.send(refreshAuthentication)
  } catch (error: any) {
    const { status, message } = error.response.data.error
    res.status(status).send(message)
  }
})

export default musicProviderRefreshAuth

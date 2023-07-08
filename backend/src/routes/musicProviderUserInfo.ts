import { Router } from 'express'
import { SpotifyAuthentication } from '../adapters/externalServices/spotify/authentication'

const musicProviderUserInfo = Router()
const spotifyAuthentication = new SpotifyAuthentication()

musicProviderUserInfo.post('/', async (req, res) => {
  try {
    const { accessToken } = req.body
    const user = await spotifyAuthentication.fetchUser(accessToken)

    res.send(user)
  } catch (error: any) {
    const { status, message } = error.response.data.error
    res.status(status).send(message)
  }
})

export default musicProviderUserInfo

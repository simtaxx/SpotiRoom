import { spotifyAccessToken } from '../../config/http'

export class SpotifyAuthentication {
  fetchAccessToken = async () => {
    try {
      const { data } = await spotifyAccessToken.post('/token', {
        grant_type: 'client_credentials',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
      })

      return data
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

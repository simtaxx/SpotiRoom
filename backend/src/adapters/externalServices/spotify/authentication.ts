import { spotifyAccessToken, spotifyApi } from '../../../config/http'
import generateRandomString from '../../../domain/utils/generateRandomString'
import IMusicProviderAuthentication from '../contracts/IMusicProviderAuthentication'

export class SpotifyAuthentication extends IMusicProviderAuthentication {
  fetchAppAccessToken = async () => {
    try {
      const { data } = await spotifyAccessToken.post('/token', {
        grant_type: 'client_credentials',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
      })

      return data
    } catch (error) {
      return error
    }
  }

  generateAuthenticationURL = async () => {
    try {
      const state = generateRandomString(16)
      const scope = 'user-read-private user-read-email playlist-modify-public user-library-read'
      const args = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope,
        redirect_uri: process.env.REDIRECT_URI,
        state
      });

      return { redirectionURL: `https://accounts.spotify.com/authorize?${args}` }
    } catch (error) {
      throw error
    }
  }

  generateAccessToken = async (code) => {
    try {
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.REDIRECT_URI,
      });
      const headers = {
        Authorization: `Basic ${(new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64'))}`
      }
      const { data } = await spotifyAccessToken.post('/token', body, { headers })

      return data
    } catch (error) {
      throw error
    }
  }

  generateRefreshedAccessToken = async (refreshToken) => {
    try {
      const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      });
      const headers = {
        Authorization: `Basic ${(new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64'))}`
      }
      const { data } = await spotifyAccessToken.post('/token', body, { headers })

      return data
    } catch (error) {
      throw error
    }
  }

  fetchUser = async (accessToken) => {
    try {
      const { data } = await spotifyApi(accessToken).get('/me')
      const { id, display_name, images, product, type } = data

      return {
        id,
        name: display_name,
        picture: images[0].url,
        product,
        type
      }
    } catch (error) {
      throw error
    }
  }
}

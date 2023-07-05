import { spotifyAccessToken, spotifyApi } from '../../../config/http'
import generateRandomString from '../../../domain/utils/generateRandomString'
import IMusicProviderAuthentication from '../contracts/IMusicProviderAuthentication'

interface IAuthenticationURLParams {
  client_id?: string
  redirect_uri?: string
  scope: string
  response_type: string
  state: string
}
interface IAccessTokenURLParams {
  grant_type: string
  code: string
  redirect_uri?: string
}

export class SpotifyAuthentication implements IMusicProviderAuthentication {
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
      const authenticationURLSearchParams: IAuthenticationURLParams = {
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope,
        redirect_uri: process.env.REDIRECT_URI,
        state
      }
      const args = new URLSearchParams(authenticationURLSearchParams as any)

      return `https://accounts.spotify.com/authorize?${args}`
    } catch (error) {
      throw error
    }
  }

  generateAccessToken = async (code: string) => {
    try {
      const accessTokenURLParams: IAccessTokenURLParams = {
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.REDIRECT_URI,
      }
      const body = new URLSearchParams(accessTokenURLParams as any)
      const buffer = new (Buffer as any).from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`, 'base64')
      const headers = {
        Authorization: `Basic ${buffer}`
      }
      const { data } = await spotifyAccessToken.post('/token', body, { headers })

      return data
    } catch (error) {
      throw error
    }
  }

  generateRefreshedAccessToken = async (refreshToken: string) => {
    try {
      const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      })
      const buffer = new (Buffer as any).from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`, 'base64')
      const headers = {
        Authorization: `Basic ${buffer}`
      }
      const { data } = await spotifyAccessToken.post('/token', body, { headers })

      return data
    } catch (error) {
      throw error
    }
  }

  fetchUser = async (accessToken: string) => {
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

import { spotifyAccessToken } from '../../../config/http'
import base64encode from '../../../domain/utils/base64encode'
import generateRandomString from '../../../domain/utils/generateRandomString'
import IMusicProviderAuthentication from '../interfaces/IMusicProviderAuthentication'
import crypto from 'crypto'

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

  generateCodeChallenge = async (codeVerifier) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(codeVerifier)
    const digest = crypto
      .createHash('sha256')
      .update(data)
      .digest('base64')

    return base64encode(digest)
  }

  generateAuthenticationURL = async () => {
    try {
      const codeVerifier = generateRandomString(128);
      const codeChallenge = await this.generateCodeChallenge(codeVerifier)
      const args = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: 'user-read-private user-read-email',
        redirect_uri: process.env.REDIRECT_URI,
        state: generateRandomString(16),
        code_challenge_method: 'S256',
        code_challenge: codeChallenge
      });

      return { redirectionURL: `https://accounts.spotify.com/authorize?${args}`, codeVerifier }
    } catch (error) {
      console.error(error)
    }
  }

  generateAccessToken = async (code, codeVerifier) => {
    try {
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.REDIRECT_URI,
        client_id: process.env.CLIENT_ID,
        code_verifier: codeVerifier
      });
      const { data } = await spotifyAccessToken.post('/token', body)

      return data
    } catch (error) {
      console.error(error)
    }
  }
}

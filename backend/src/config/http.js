import axios from 'axios'
import { SpotifyAuthentication } from '../adapters/externalServices/spotify/authentication'

export const spotifyAccessToken = axios.create({
  baseURL: 'https://accounts.spotify.com/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export const spotifyApi = (token) => axios.create({
    baseURL: 'https://api.spotify.com/v1',
    timeout: 1000,
    headers: {
      Authorization: `Bearer ${token}`
    }
})

export const getAccessToken = async () => {
  const authentication = new SpotifyAuthentication
  const { access_token } = await authentication.fetchAccessToken()

  return access_token
}

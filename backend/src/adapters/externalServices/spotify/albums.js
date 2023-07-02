import { spotifyApi } from '../../../config/http'
import IAlbums from '../interfaces/IAlbums'

export class Albums extends IAlbums {
  fetchAlbums = async (accessToken) => {
    try {
      const { data } = await spotifyApi(accessToken).get('/me/albums')

      return data
    } catch (error) {
      return error
    }
  }
}

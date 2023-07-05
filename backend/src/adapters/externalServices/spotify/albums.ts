import { spotifyApi } from '../../../config/http'
import IAlbums from '../contracts/IAlbums'

export class Albums extends IAlbums {
  fetchAlbums = async (accessToken: string) => {
    try {
      const { data } = await spotifyApi(accessToken).get('/me/albums')

      return data
    } catch (error) {
      throw error
    }
  }
}

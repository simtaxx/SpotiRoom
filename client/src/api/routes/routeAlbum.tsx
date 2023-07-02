import { http } from '../utils/http'

export const getAlbums = async (accessToken: string): Promise<any> => {
  try {
    const headers = {
      Authorization: accessToken.substring(7)
    }
    const { data } = await http.get('/albums', { headers })

    return data
  } catch (error: any) {
    return error
  }
}

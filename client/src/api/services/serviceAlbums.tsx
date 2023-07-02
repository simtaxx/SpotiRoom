import { getAlbums } from '../routes/routeAlbum'
import { fetchRefreshAccessToken } from './serviceAuthentication'

export const fetchAlbums = async () => {
    let accessToken = localStorage.getItem('authAccessToken')
    if (!accessToken) {
        fetchRefreshAccessToken()
        accessToken = localStorage.getItem('authAccessToken')
    }
    const albums = await getAlbums(accessToken || '')

    return albums
}

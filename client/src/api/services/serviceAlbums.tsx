import { getAlbums } from '../routes/routeAlbum'

export const fetchAlbums = async () => {
    const accessToken = localStorage.getItem('authAccessToken') || ''
    const albums = await getAlbums(accessToken)

    return albums
}

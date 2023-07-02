import { Router } from 'express'
import { Albums } from '../adapters/externalServices/spotify/albums'

const albums = Router()

albums.get('/', async (req, res) => {
  try {
    const { authorization } = req.headers
    const albumsInstance = new Albums()
    const { items } = await albumsInstance.fetchAlbums(authorization)

    res.send(items)
  } catch (error) {
    res.send(error)
  }
})

export default albums

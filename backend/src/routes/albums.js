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
    const { status, message } = error.response.data.error
    res.status(status).send(message)
  }
})

export default albums

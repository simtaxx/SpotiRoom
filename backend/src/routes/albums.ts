import { Router } from 'express'
import { Albums } from '../adapters/externalServices/spotify/albums'

const albums = Router()
const albumsInstance = new Albums()

albums.get('/', async (req, res) => {
  try {
    const { authorization } = req.headers
    if (!authorization) return res.status(401).send('Authorization is required')

    const { items } = await albumsInstance.fetchAlbums(authorization)

    res.send(items)
  } catch (error: any) {
    const { status, message } = error.response.data.error
    res.status(status).send(message)
  }
})

export default albums

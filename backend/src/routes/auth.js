import { Router } from 'express'
import { getAccessToken, spotifyApi } from '../config/http'

const authRoutes = Router()

authRoutes.get('/', async (req, res) => {
  try {
    const accessToken = await getAccessToken()
    const { data } = await spotifyApi(accessToken).get('/albums/2LOyzVRA6BJgfgGxQj21O1?si=tPXAErPgRcC25aNl51JB-Q')

    res.send({ data })
  } catch (error) {
    res.send(error)
  }
})

export default authRoutes

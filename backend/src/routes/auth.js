import { Router } from 'express'
import { spotifyApi } from '../config/http'

const authRoutes = Router()

authRoutes.get('/', async (req, res) => {
  try {
    const { data } = await spotifyApi(process.env.ACCESS_TOKEN).get('/albums/2LOyzVRA6BJgfgGxQj21O1?si=tPXAErPgRcC25aNl51JB-Q')

    res.send({ data })
  } catch (error) {
    res.send(error)
  }
})

export default authRoutes

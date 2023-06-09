import { Router } from 'express'
import eventEmitter from '../subscribers/userListeners'

const userRoutes = Router()

userRoutes.get('/', (req, res) => {
  res.send({ name: 'Haris' })
})

export default userRoutes

import { Router } from 'express'

const userRoutes = Router()

userRoutes.get('/', (req, res) => {
  res.send({ name: 'Haris' })
})

export default userRoutes

import { Router } from 'express'
import tasks from './tasks'
import users from './users'

const routes = Router()
routes.get('/', (_, res) => {
  res.sendStatus(200)
})
routes.use('/tasks', tasks)
routes.use('/users', users)

export default routes

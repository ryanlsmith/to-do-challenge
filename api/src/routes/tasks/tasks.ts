import { Router } from 'express'
import Task from '../../models/task'
import handleError from '../../utils/handleError'
import task from './task'

const tasks = Router()

tasks
  .route('/')
  .get(async (_, res) => {
    try {
      const tasks = await Task.findAll()
      res.json(tasks)
    } catch (error) {
      handleError(res, error)
    }
  })
  .post(async (req, res) => {
    try {
      const task = await Task.create(req.body)
      res.json(task)
    } catch (error) {
      handleError(res, error)
    }
  })

tasks.use('/', task)

export default tasks

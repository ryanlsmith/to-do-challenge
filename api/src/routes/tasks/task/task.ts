import { Router } from 'express'
import Task from '../../../models/task'
import handleError from '../../../utils/handleError'

const task = Router()

task
  .route('/:id')
  .get(async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id)
      if (task) res.json(task)
      else res.sendStatus(404)
    } catch (error) {
      handleError(res, error)
    }
  })
  .patch(async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id)
      if (task) {
        await task.update(req.body)
        res.json(task)
      } else {
        res.sendStatus(404)
      }
    } catch (error) {
      handleError(res, error)
    }
  })
  .delete(async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id)
      if (task) {
        await task.destroy()
        res.sendStatus(204)
      } else {
        res.sendStatus(404)
      }
    } catch (error) {
      handleError(res, error)
    }
  })

export default task

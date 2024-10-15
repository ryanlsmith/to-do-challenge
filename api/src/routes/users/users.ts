import { Router } from 'express'
import User from '../../models/user'
import handleError from '../../utils/handleError'

const users = Router()

users
  .route('/')
  .get(async (req, res) => {
    try {
      const name = `${req.query?.name}`
      if (name) {
        const user = await User.findOne({ where: { name } })
        if (user) res.json(user)
        else res.sendStatus(404)
      } else {
        const users = await User.findAll()
        res.json(users)
      }
    } catch (error) {
      handleError(res, error)
    }
  })
  .post(async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.json(user)
    } catch (error) {
      handleError(res, error)
    }
  })

users
  .route('/:id')
  .get(async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id)
      if (user) res.json(user)
      else res.sendStatus(404)
    } catch (error) {
      handleError(res, error)
    }
  })
  .patch(async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id)
      if (user) {
        await user.update(req.body)
        res.json(user)
      } else {
        res.sendStatus(404)
      }
    } catch (error) {
      handleError(res, error)
    }
  })
  .delete(async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id)
      if (user) {
        await user.destroy()
        res.sendStatus(204)
      } else {
        res.sendStatus(404)
      }
    } catch (error) {
      handleError(res, error)
    }
  })

export default users

import type { Response } from 'express'

export default function handleError(res: Response, error: Error) {
  console.error(error)
  res.status(500).json(error)
}

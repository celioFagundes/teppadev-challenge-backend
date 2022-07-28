import { NextFunction, Request, Response } from 'express'
import MediaSchema from '../../models/media_model'

export const MediaInputValidation = (request: Request, response: Response, next: NextFunction) => {
  const { error } = MediaSchema.validate(request.body)

  if (error) {
    const { details } = error
    const message = details.map(i => i.message).join(',')
    return response.status(422).json({ error: message })
  }
  next()
}

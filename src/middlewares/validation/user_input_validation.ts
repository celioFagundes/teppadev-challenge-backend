import { NextFunction, Request, Response } from 'express'
import UserSchema from '../../models/user_model'

export const UserInputValidation = (request: Request, response: Response, next: NextFunction) => {
  const { error } = UserSchema.validate(request.body)

  if (error) {
    const { details } = error
    const message = details.map(i => i.message).join(',')
    return response.status(422).json({ error: message })
  }
  next()
}

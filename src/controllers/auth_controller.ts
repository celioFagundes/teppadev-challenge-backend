import { Request, Response } from 'express'
import { admin } from '../database'

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await admin.auth().createUser({
    email,
    password,
  })

  return res.send(user)
}

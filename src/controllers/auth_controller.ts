import { Request, Response } from 'express'

import { admin } from '../database'

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    admin
      .auth()
      .createUser({
        email,
        password,
      })
      .then(data => res.status(200).send({ success: true, message: 'Account registered!' }))
      .catch(error => {
        if (error.code === 'auth/email-already-exists') {
          return res
            .status(200)
            .send({ success: false, message: 'Email is already used by another account' })
        }
      })
  } catch (error) {
    return res.send({ success: false, message: 'Error, failed to create user' })
  }
}

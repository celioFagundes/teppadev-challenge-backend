import { Request, Response } from 'express'

import { admin } from '../database'

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const user = await admin
      .auth()
      .createUser({
        email,
        password,
      })
      .catch(error => {
        if (error.code === 'auth/email-already-exists') {
          return res.send({ error: 'Email ja está sendo usado em outra conta' })
        }
      })
    res.send(user)
  } catch (error) {
    res.send({ error: 'Error ao criar usuário' })
  }
}

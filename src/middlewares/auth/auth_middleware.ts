import { NextFunction, Request, Response } from 'express'
import { admin } from '../../database'

export const checkIfAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authtoken) {
    return res.status(403).send('Erro: Usuario não autorizado')
  }
  const isValid = await admin.auth().verifyIdToken(req.headers.authtoken[0])
  if (isValid) {
    return next()
  } else {
    return res.status(403).send('Erro: Usuario não autorizado')
  }
}

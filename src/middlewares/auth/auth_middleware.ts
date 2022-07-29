import { NextFunction, Request, Response } from 'express'
import { admin } from '../../database'

export const checkIfAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  let authToken = req.headers.authtoken
  if (!authToken) {
    return res.status(401).send('Erro: Usuario não autorizado')
  }
  if(Array.isArray(authToken)){
    authToken = authToken[0]
  }
  const isValid = await admin.auth().verifyIdToken(authToken)
  if (isValid) {
    return next()
  } else {
    return res.status(401).send('Erro: Usuario não autorizado')
  }
}

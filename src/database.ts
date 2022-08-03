import * as admin from 'firebase-admin'
import dotenv from 'dotenv'
import { fromBase64 } from './base64'

dotenv.config()

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    clientEmail: process.env.CLIENT_EMAIL,
    privateKey: fromBase64(process.env.PRIVATE_KEY),
  }),
  databaseURL: 'https://teppadev-challenge.firebaseio.com',
})

const db = admin.firestore()
export { admin, db }

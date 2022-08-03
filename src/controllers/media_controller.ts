import { Request, Response } from 'express'
import { db } from '../database'

export const findAllMedias = async (req: Request, res: Response) => {
  const colletionRef = db.collection('medias')
  const data = await colletionRef.get()
  const medias = data.docs.map(doc => {
    const media = { id: doc.id, ...doc.data() }
    return media
  })
  try {
    res.status(200).send(medias)
  } catch (e) {
    res.send(e)
  }
}
export const findMediaById = async (req: Request, res: Response) => {
  const { id } = req.params
  const colletionRef = db.collection('medias')
  const docRef = colletionRef.doc(id)
  const data = await docRef.get()

  if (!data.exists) {
    return res.status(404).send('Document not found')
  }
  const media = { id: data.id, ...data.data() }
  res.status(200).send(media)
}

export const createMedia = async (req: Request, res: Response) => {
  const data = req.body
  const colletionRef = db.collection('medias')
  try {
    const newDoc = await colletionRef.add(data)
    res.status(200).send(newDoc.id)
  } catch (e) {
    res.send(e)
  }
}
export const updateMedia = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = req.body
  const colletionRef = db.collection('medias')
  const docRef = colletionRef.doc(id)
  try {
    await docRef.update(data)
    res.status(200).send('Document updated')
  } catch (e) {
    res.status(404).send('Document not found')
  }
}
export const removeMedia = async (req: Request, res: Response) => {
  const { id } = req.params
  const colletionRef = db.collection('medias')
  const docRef = colletionRef.doc(id)
  const data = await docRef.get()

  if (!data.exists) {
    return res.status(404).send('Document not found')
  }
  await docRef.delete()
  res.status(200).send('Document deleted')
}

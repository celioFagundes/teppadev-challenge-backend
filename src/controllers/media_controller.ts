import { Request, Response } from 'express'
import db from '../database'
import { collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

export const findAllMedias = async (req: Request, res: Response) => {
  const colletionRef = collection(db, 'medias')
  const data = await getDocs(colletionRef)
  const medias = data.docs.map(doc => {
    const media = { id: doc.id, ...doc.data() }
    return media
  })
  try {
    res.send(medias)
  } catch (e) {
    res.send(e)
  }
}
export const findMediaById = async (req: Request, res: Response) => {
  const { id } = req.params
  const colletionRef = collection(db, 'medias')
  const docRef = doc(colletionRef, id)
  const data = await getDoc(docRef)

  if (!data.exists()) {
    return res.status(404).send('Documentao não encontrado')
  }
  const media = { id: data.id, ...data.data() }
  res.send(media)
}

export const createMedia = async (req: Request, res: Response) => {
  const data = req.body
  const colletionRef = collection(db, 'medias')
  try {
    const newDoc = await addDoc(colletionRef, data)
    res.send(newDoc.id)
  } catch (e) {
    res.send(e)
  }
}
export const updateMedia = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = req.body
  const colletionRef = collection(db, 'medias')
  const docRef = doc(colletionRef, id)
  try {
    await updateDoc(docRef, data)
    res.send('Documento atualizado')
  } catch (e) {
    res.status(404).send('Documento não encontrado')
  }
}
export const removeMedia = async (req: Request, res: Response) => {
  const { id } = req.params
  const colletionRef = collection(db, 'medias')
  const docRef = doc(colletionRef, id)
  const data = await getDoc(docRef)
  
  if (!data.exists()) {
    return res.status(404).send('Documento não encontrado')
  }
  await deleteDoc(docRef)
  res.send('Documento excluído')
}

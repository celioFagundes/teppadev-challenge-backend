import { Request, Response } from 'express'

export const findAllMedias = async (req: Request, res: Response) => {
  try {
    res.send({ success: true, results: [] })
  } catch (e) {
    res.send({ success: false, errors: e })
  }
}
export const findMediaById = async (req: Request, res: Response) => {}
export const findMediaByName = async (req: Request, res: Response) => {}

export const createMedia = async (req: Request, res: Response) => {
  try {
  } catch (e) {}
}
export const updateMedia = async (req: Request, res: Response) => {
  res.send({ success: true, Media: updateMedia })
}
export const removeMedia = async (req: Request, res: Response) => {
  try {
    res.send({
      success: true,
    })
  } catch (e) {
    res.send({ success: false, errors: e })
  }
}

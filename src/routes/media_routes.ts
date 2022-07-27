import { Router } from 'express'
import {
  findAllMedias,
  createMedia,
  updateMedia,
  removeMedia,
  findMediaById,
  findMediaByName,
} from '../controllers/media_controller'

const router = Router()

router.get('/', findAllMedias)
router.post('/', createMedia)
router.get('/:id', findMediaById)
router.put('/:id', updateMedia)
router.delete('/:id', removeMedia)
router.get('/name/:name', findMediaByName)

export default router

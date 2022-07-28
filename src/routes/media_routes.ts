import { Router } from 'express'
import {
  findAllMedias,
  createMedia,
  updateMedia,
  removeMedia,
  findMediaById,
} from '../controllers/media_controller'
import { validationMiddleware } from '../middlewares/validation_middleware'

const router = Router()

router.get('/', findAllMedias)
router.post('/', validationMiddleware, createMedia)
router.get('/:id', findMediaById)
router.put('/:id', validationMiddleware, updateMedia)
router.delete('/:id', removeMedia)

export default router

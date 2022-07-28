import { Router } from 'express'
import {
  findAllMedias,
  createMedia,
  updateMedia,
  removeMedia,
  findMediaById,
} from '../controllers/media_controller'
import { checkIfAuthenticated } from '../middlewares/auth/auth_middleware'
import { MediaInputValidation } from '../middlewares/validation/media_input_validation'

const router = Router()

router.get('/', checkIfAuthenticated, findAllMedias)
router.post('/', MediaInputValidation, createMedia)
router.get('/:id', findMediaById)
router.put('/:id', [MediaInputValidation], updateMedia)
router.delete('/:id', removeMedia)

export default router

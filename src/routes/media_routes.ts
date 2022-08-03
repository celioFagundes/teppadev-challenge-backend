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
router.post('/', [checkIfAuthenticated, MediaInputValidation], createMedia)
router.get('/:id', checkIfAuthenticated, findMediaById)
router.put('/:id', [checkIfAuthenticated, MediaInputValidation], updateMedia)
router.delete('/:id', checkIfAuthenticated, removeMedia)

export default router

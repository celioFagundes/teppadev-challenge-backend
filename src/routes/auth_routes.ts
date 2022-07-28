import { Router } from 'express'
import { createUser } from '../controllers/auth_controller'
import { UserInputValidation } from '../middlewares/validation/user_input_validation'

const router = Router()

router.post('/signin', UserInputValidation, createUser)

export default router

import Joi from 'joi'

const UserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'Invalid email',
    'string.empty': 'Email is required',
    'string.email': 'Invalid email',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.base': 'Invalid password',
    'string.empty': 'Password must have at least 8 caracters',
    'string.min': 'Password must have at least 8 caracters',
    'any.required': 'Password is required',
  }),
})

export default UserSchema

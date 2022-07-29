import Joi from 'joi'

const UserSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'Email inválido',
      'string.empty': 'Email é obrigatório',
      'string.email': 'Email inválido',
      'any.required': 'Email é obrigatório',
    }),
  password: Joi.string().min(8).required().messages({
    'string.base': 'Senha inválida',
    'string.empty': 'Senha deve ter no mínimo de 8 caracteres',
    'string.min': 'Senha deve ter no mínimo de 8 caracteres',
    'any.required': 'Senha é obrigatória',
  }),
})

export default UserSchema

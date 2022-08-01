import Joi from 'joi'

const MediaSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  media_type: Joi.string().required().valid('Movies', 'Games', 'Series'),
  genre: Joi.string(),
  additional: Joi.array().items(
    Joi.object({
      name: Joi.string(),
      value: Joi.string(),
    })
  ),
  status: Joi.string(),
})

export default MediaSchema

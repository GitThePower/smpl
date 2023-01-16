const Joi = require("joi");

const schema = Joi.object({
  description: Joi.string(),
  ingredients: Joi.array().items(
    Joi.object({
      foodId: Joi.string().required(),
      quantity: Joi.number().required()
    })
  ).min(1)
}).min(1).unknown(false);

const schemaExample = {
  description: 'Apple',
  ingredients: [
    {
      foodId: '12345678-dead-beef-cafe-babe09876543',
      quantity: 1
    }
  ]
};

module.exports = {
  schema,
  schemaExample
};

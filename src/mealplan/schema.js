const Joi = require("joi");

const schema = Joi.object({
  description: Joi.string(),
  selection: Joi.array().items(
    Joi.object({
      mealId: Joi.string().required(),
      weeklyFrequency: Joi.number().required()
    })
  )
}).min(1).unknown(false);

const schemaExample = {
  description: 'Some plan',
  selection: [
    {
      mealId: 'abcdeffe-1234-4321-7890-1029384756ab',
      weeklyFrequency: 2
    },
    {
      mealId: '12873465-0987-ab12-cd34-5678abcd1e2f',
      weeklyFrequency: 2
    },
    {
      mealId: '19567348-acdf-8ac2-f930-d59fea1c5b6d',
      weeklyFrequency: 3
    }
  ]
};

module.exports = {
  schema,
  schemaExample
};

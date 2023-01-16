const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string(),
  password: Joi.string(),
  mealPlan: Joi.string()
}).min(1).unknown(false);

const schemaExample = {
  username: 'someUser',
  password: 'somePassword',
  mealPlan: 'somePlan'
};

module.exports = {
  schema,
  schemaExample
};

const Joi = require("joi");

const schema = Joi.object({
  description: Joi.string(),
  convertable: Joi.boolean()
}).min(1).unknown(false);

const schemaExample = {
  description: 'Updated item',
  convertable: true
};

module.exports = {
  schema,
  schemaExample
};

const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string(),
  password: Joi.string(),
  mealPlan: Joi.string(),
  makingBreakfast: Joi.boolean(),
  makingPreWorkout: Joi.boolean(),
  makingPostWorkout: Joi.boolean(),
  makingLunch: Joi.boolean(),
  makingSnack: Joi.boolean(),
  makingDinner: Joi.boolean(),
}).min(1).unknown(false);

module.exports = {
  schema
};

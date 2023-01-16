import * as cookingMeasurements from './CookingMeasurements';
import * as foodItems from './FoodItems';

export class Meal {
  description: string;
  ingredients: {
    food: foodItems.FoodItem;
    quantity: cookingMeasurements.CookingMeasurement;
  }[];

  constructor(description: string, ingredients: { food: foodItems.FoodItem, quantity: cookingMeasurements.CookingMeasurement }[]) {
    this.description = description;
    this.ingredients = ingredients;
  }

  equals = (otherMeal: Meal): boolean => this.description === otherMeal.description;
}

export const FRENCH_TOAST = new Meal(
  'Cinnamon French Toast w/ 1/2 Cup Strawberries',
  [
    {
      food: foodItems.MILK_COCONUT_UNSWEETENED,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.TOFU_FIRM,
      quantity: cookingMeasurements.THREE_QUARTERS_CUP
    },
    {
      food: foodItems.VANILLA_EXTRACT,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.CINNAMON_GROUND,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.FLAXSEED_GROUND,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.BREAD_WHOLE_WHEAT,
      quantity: cookingMeasurements.FOUR_MEASURES
    }
  ]
);

export const EZEKIEL_BREAD = new Meal(
  '2 slices Ezekiel bread, 2 tablespoons nut butter, and 1 tablespoon hemp seeds',
  [
    {
      food: foodItems.BREAD_EZEKIEL,
      quantity: cookingMeasurements.TWO_MEASURES
    },
    {
      food: foodItems.NUT_BUTTER,
      quantity: cookingMeasurements.TWO_TABLESPOONS
    },
    {
      food: foodItems.SEEDS_HULLED_HEMP,
      quantity: cookingMeasurements.ONE_TABLESPOON
    }
  ]
);

export const TOFU_SCRAMBLE = new Meal(
  'Tofu Scramble',
  [
    {
      food: foodItems.ONION_YELLOW,
      quantity: cookingMeasurements.HALF_MEASURE
    },
    {
      food: foodItems.BELL_PEPPERS_RED,
      quantity: cookingMeasurements.HALF_MEASURE
    },
    {
      food: foodItems.TOFU_FIRM,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.MILK_PLANT_BASED_UNSWEETENED,
      quantity: cookingMeasurements.HALF_CUP
    },
    {
      food: foodItems.TUMERIC,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.PEPPER_BLACK,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    }
  ]
);

export const SMOOTHIE_BEAT = new Meal(
  'Beet Blast Smoothie',
  [
    {
      food: foodItems.MILK_PLANT_BASED_UNSWEETENED,
      quantity: cookingMeasurements.ONE_AND_A_HALF_CUPS
    },
    {
      food: foodItems.APPLES_GRANNY_SMITH,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.FROZEN_BEATS,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.FROZEN_BEATS,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.FROZEN_CHERRIES,
      quantity: cookingMeasurements.HALF_CUP
    },
    {
      food: foodItems.GINGER,
      quantity: cookingMeasurements.QUARTER_MEASURE
    }
  ]
);

export const SMOOTHIE_GREEN = new Meal(
  'Green Power Smoothie',
  [
    {
      food: foodItems.SPINACH,
      quantity: cookingMeasurements.THREE_CUPS
    },
    {
      food: foodItems.FROZEN_PINEAPPLE,
      quantity: cookingMeasurements.ONE_AND_A_HALF_CUPS
    },
    {
      food: foodItems.MILK_PLANT_BASED_UNSWEETENED,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.KALE,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.APPLES_GRANNY_SMITH,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.AVOCADOS,
      quantity: cookingMeasurements.HALF_MEASURE
    },
    {
      food: foodItems.SPIRULINA,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.SEEDS_HULLED_HEMP,
      quantity: cookingMeasurements.ONE_TABLESPOON
    }
  ]
);

export const OATS = new Meal(
  '1/2 cup dry steel cut oats w/ 1 banana and 1 cup cherries',
  [
    {
      food: foodItems.OATS_STEEL_CUT,
      quantity: cookingMeasurements.QUARTER_CUP
    },
    {
      food: foodItems.BANANAS,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CHERRIES,
      quantity: cookingMeasurements.ONE_CUP
    }
  ]
);

export const PROTEIN_SMOOTHIE_TROPICAL = new Meal(
  'Tropical Bliss Smoothie w/ additional 30g protein powder',
  [
    {
      food: foodItems.FROZEN_PINEAPPLE,
      quantity: cookingMeasurements.TWO_CUPS
    },
    {
      food: foodItems.BANANAS,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.MILK_COCONUT_UNSWEETENED,
      quantity: cookingMeasurements.ONE_AND_A_QUARTER_CUPS
    },
    {
      food: foodItems.FROZEN_COCONUT_GRATES,
      quantity: cookingMeasurements.QUARTER_CUP
    },
    {
      food: foodItems.FLAXSEED_GROUND,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.SEEDS_HULLED_HEMP,
      quantity: cookingMeasurements.ONE_TEASPOON
    },
    {
      food: foodItems.PROTEIN_POWDER_PEA,
      quantity: cookingMeasurements.ONE_MEASURE
    }
  ]
);

export const PROTEIN_SMOOTHIE_GREEN = new Meal(
  'Green Power Smoothie w/ additional 30g protein powder',
  [
    {
      food: foodItems.SPINACH,
      quantity: cookingMeasurements.THREE_CUPS
    },
    {
      food: foodItems.FROZEN_PINEAPPLE,
      quantity: cookingMeasurements.ONE_AND_A_HALF_CUPS
    },
    {
      food: foodItems.MILK_PLANT_BASED_UNSWEETENED,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.KALE,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.APPLES_GRANNY_SMITH,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.AVOCADOS,
      quantity: cookingMeasurements.HALF_MEASURE
    },
    {
      food: foodItems.SPIRULINA,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.SEEDS_HULLED_HEMP,
      quantity: cookingMeasurements.ONE_TABLESPOON
    },
    {
      food: foodItems.PROTEIN_POWDER_PEA,
      quantity: cookingMeasurements.ONE_MEASURE
    }
  ]
);

export const PROTEIN_SMOOTHIE_BEAT = new Meal(
  'Beet Blast Smoothie w/ additional 30g protein powder',
  [
    {
      food: foodItems.MILK_PLANT_BASED_UNSWEETENED,
      quantity: cookingMeasurements.ONE_AND_A_HALF_CUPS
    },
    {
      food: foodItems.APPLES_GRANNY_SMITH,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.FROZEN_BEATS,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.FROZEN_BEATS,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.FROZEN_CHERRIES,
      quantity: cookingMeasurements.HALF_CUP
    },
    {
      food: foodItems.GINGER,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.PROTEIN_POWDER_PEA,
      quantity: cookingMeasurements.ONE_MEASURE
    }
  ]
);

export const SALAD_POWER = new Meal(
  'Alkaline Protein Power Salad',
  [
    {
      food: foodItems.KALE,
      quantity: cookingMeasurements.FOUR_CUPS
    },
    {
      food: foodItems.JUICE_LEMON,
      quantity: cookingMeasurements.TWO_TABLESPOONS
    },
    {
      food: foodItems.SALT_PINK_HIMALAYAN,
      quantity: cookingMeasurements.EIGHTH_TEASPOON
    },
    {
      food: foodItems.RICE_WILD,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.QUINOA,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.TOMATOES,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.AVOCADOS,
      quantity: cookingMeasurements.ONE_MEASURE
    }
  ]
);

export const PASTA_RICOTTA = new Meal(
  'Ricotta Red Sauce Pasta',
  [
    {
      food: foodItems.TOFU_FIRM,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CASHEWS_RAW,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.SPINACH,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.MUSHROOMS,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.GARLIC,
      quantity: cookingMeasurements.FOUR_MEASURES
    },
    {
      food: foodItems.NUTRITIONAL_YEAST,
      quantity: cookingMeasurements.ONE_AND_A_HALF_TABLESPOONS
    },
    {
      food: foodItems.JUICE_LEMON,
      quantity: cookingMeasurements.ONE_TABLESPOON
    },
    {
      food: foodItems.OREGANO_DRIED,
      quantity: cookingMeasurements.ONE_TEASPOON
    },
    {
      food: foodItems.BASIL_DRIED,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.SALT_PINK_HIMALAYAN,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.PEPPER_BLACK,
      quantity: cookingMeasurements.EIGHTH_TEASPOON
    },
    {
      food: foodItems.PASTA_CHICKPEA_BASED,
      quantity: cookingMeasurements.TEN_OUNCES
    },
    {
      food: foodItems.PASTA_SAUCE_RED_VEGAN,
      quantity: cookingMeasurements.ONE_AND_A_HALF_CUPS
    }
  ]
);

export const CHILI_FIVE_BEAN = new Meal(
  '5-Bean Chili',
  [
    {
      food: foodItems.CANNED_DICED_TOMATOES,
      quantity: cookingMeasurements.TWO_MEASURES
    },
    {
      food: foodItems.CANNED_BEANS_RED_KIDNEY,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CANNED_BEANS_WHITE_KIDNEY,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CANNED_CHICKPEAS,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CANNED_BEANS_BLACK,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CANNED_BEANS_PINTO,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.MUSHROOMS,
      quantity: cookingMeasurements.TWO_AND_A_HALF_CUPS
    },
    {
      food: foodItems.BELL_PEPPERS_RED,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.ONION_YELLOW,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.FROZEN_CORN,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.CHILLI_POWDER,
      quantity: cookingMeasurements.ONE_AND_A_HALF_TABLESPOONS
    },
    {
      food: foodItems.CUMIN_GROUND,
      quantity: cookingMeasurements.ONE_TEASPOON
    },
    {
      food: foodItems.PEPPER_BLACK,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.SALT_PINK_HIMALAYAN,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.CAYENNE_PEPPER,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.GARLIC_POWDER,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    }
  ]
);

export const WRAP_CLUB = new Meal(
  'Club Wrap',
  [
    {
      food: foodItems.TOFU_FIRM,
      quantity: cookingMeasurements.QUARTER_MEASURE
    },
    {
      food: foodItems.TEMPEH_BACON_FLAVORED,
      quantity: cookingMeasurements.THREE_MEASURES
    },
    {
      food: foodItems.TORTILLAS_WHOLE_WHEAT,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.MAYONNAISE,
      quantity: cookingMeasurements.ONE_TABLESPOON
    },
    {
      food: foodItems.AVOCADOS,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.LUTTUCE_ROMAINE,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.TOMATOES,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.ONION_RED,
      quantity: cookingMeasurements.QUARTER_MEASURE
    },
    {
      food: foodItems.PEPPER_BLACK,
      quantity: cookingMeasurements.EIGHTH_TEASPOON
    }
  ]
);

export const EDAMAME_WITH_YEAST = new Meal(
  '1 cup steamed shelled edamame w/ 1 tablespoon B12 fortified nutritional yeast',
  [
    {
      food: foodItems.FROZEN_EDEMAME_SHELLED,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.NUTRITIONAL_YEAST,
      quantity: cookingMeasurements.ONE_TABLESPOON
    }
  ]
);

export const CHOCOLATE_CHIP_BITES = new Meal(
  '2 No-Bake Choclate Chip Bites',
  [
    {
      food: foodItems.OATS_ROLLED,
      quantity: cookingMeasurements.QUARTER_CUP
    },
    {
      food: foodItems.CASHEWS_RAW,
      quantity: cookingMeasurements.HALF_CUP
    },
    {
      food: foodItems.FLOUR_WHOLE_WHEAT,
      quantity: cookingMeasurements.THREE_TABLESPOONS
    },
    {
      food: foodItems.FLAXSEED_GROUND,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.SALT_PINK_HIMALAYAN,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.MAPLE_SYRUP,
      quantity: cookingMeasurements.TWO_TABLESPOONS
    },
    {
      food: foodItems.VANILLA_EXTRACT,
      quantity: cookingMeasurements.ONE_TEASPOON
    },
    {
      food: foodItems.CHOCOLATE_CHIPS_DARK_VEGAN,
      quantity: cookingMeasurements.TWO_TABLESPOONS
    }
  ]
);

export const PASTA_RICOTTA_AND_BROCCOLI = new Meal(
  'Ricotta Red Sauce Pasta & 2 cups steamed broccoli',
  [
    {
      food: foodItems.TOFU_FIRM,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CASHEWS_RAW,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.SPINACH,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.MUSHROOMS,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.GARLIC,
      quantity: cookingMeasurements.FOUR_MEASURES
    },
    {
      food: foodItems.NUTRITIONAL_YEAST,
      quantity: cookingMeasurements.ONE_AND_A_HALF_TABLESPOONS
    },
    {
      food: foodItems.JUICE_LEMON,
      quantity: cookingMeasurements.ONE_TABLESPOON
    },
    {
      food: foodItems.OREGANO_DRIED,
      quantity: cookingMeasurements.ONE_TEASPOON
    },
    {
      food: foodItems.BASIL_DRIED,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.SALT_PINK_HIMALAYAN,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.PEPPER_BLACK,
      quantity: cookingMeasurements.EIGHTH_TEASPOON
    },
    {
      food: foodItems.PASTA_CHICKPEA_BASED,
      quantity: cookingMeasurements.TEN_OUNCES
    },
    {
      food: foodItems.PASTA_SAUCE_RED_VEGAN,
      quantity: cookingMeasurements.ONE_AND_A_HALF_CUPS
    },
    {
      food: foodItems.FROZEN_BROCCOLI,
      quantity: cookingMeasurements.TWO_CUPS
    }
  ]
);

export const CHILI_FIVE_BEAN_AND_SALAD = new Meal(
  '5-Bean Chili w/ side salad (spinach, tomato, cucumber, green onion, balsamic vinegar)',
  [
    {
      food: foodItems.CANNED_DICED_TOMATOES,
      quantity: cookingMeasurements.TWO_MEASURES
    },
    {
      food: foodItems.CANNED_BEANS_RED_KIDNEY,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CANNED_BEANS_WHITE_KIDNEY,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CANNED_CHICKPEAS,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CANNED_BEANS_BLACK,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.CANNED_BEANS_PINTO,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.MUSHROOMS,
      quantity: cookingMeasurements.TWO_AND_A_HALF_CUPS
    },
    {
      food: foodItems.BELL_PEPPERS_RED,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.ONION_YELLOW,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.FROZEN_CORN,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.CHILLI_POWDER,
      quantity: cookingMeasurements.ONE_AND_A_HALF_TABLESPOONS
    },
    {
      food: foodItems.CUMIN_GROUND,
      quantity: cookingMeasurements.ONE_TEASPOON
    },
    {
      food: foodItems.PEPPER_BLACK,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.SALT_PINK_HIMALAYAN,
      quantity: cookingMeasurements.HALF_TEASPOON
    },
    {
      food: foodItems.CAYENNE_PEPPER,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.GARLIC_POWDER,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.SPINACH,
      quantity: cookingMeasurements.HALF_CUP
    },
    {
      food: foodItems.TOMATOES,
      quantity: cookingMeasurements.HALF_MEASURE
    },
    {
      food: foodItems.CUCUMBERS,
      quantity: cookingMeasurements.HALF_MEASURE
    },
    {
      food: foodItems.SCALLIONS,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.VINEGAR_BALSAMIC,
      quantity: cookingMeasurements.TWO_TABLESPOONS
    }
  ]
);

export const CHICKEN_SEITAN = new Meal(
  'Air-Fried Chicken-Style Seitan w/ baked potato & 1 cup steamed green peas',
  [
    {
      food: foodItems.VITAL_WHEAT_GLUTEN,
      quantity: cookingMeasurements.ONE_CUP
    },
    {
      food: foodItems.FLOUR_WHOLE_WHEAT,
      quantity: cookingMeasurements.TWO_TABLESPOONS
    },
    {
      food: foodItems.POULTRY_SEASONING_VEGAN,
      quantity: cookingMeasurements.TWO_TABLESPOONS
    },
    {
      food: foodItems.NUTRITIONAL_YEAST,
      quantity: cookingMeasurements.ONE_TABLESPOON
    },
    {
      food: foodItems.ONION_POWDER,
      quantity: cookingMeasurements.ONE_TEASPOON
    },
    {
      food: foodItems.GARLIC_POWDER,
      quantity: cookingMeasurements.ONE_TEASPOON
    },
    {
      food: foodItems.SALT_PINK_HIMALAYAN,
      quantity: cookingMeasurements.QUARTER_TEASPOON
    },
    {
      food: foodItems.PEPPER_BLACK,
      quantity: cookingMeasurements.EIGHTH_TEASPOON
    },
    {
      food: foodItems.AQUAFABA,
      quantity: cookingMeasurements.ONE_TABLESPOON
    },
    {
      food: foodItems.WATER,
      quantity: cookingMeasurements.SIX_AND_THREE_QUARTERS_CUPS
    },
    {
      food: foodItems.CHICK_N_BOUILLON_VEGAN,
      quantity: cookingMeasurements.ONE_MEASURE
    }
  ]
);

export const WRAP_CLUB_AND_SALAD = new Meal(
  'Club Wrap w/ side salad (spinach, tomato, cucumber, green onion, balsamic vinegar)',
  [
    {
      food: foodItems.TOFU_FIRM,
      quantity: cookingMeasurements.QUARTER_MEASURE
    },
    {
      food: foodItems.TEMPEH_BACON_FLAVORED,
      quantity: cookingMeasurements.THREE_MEASURES
    },
    {
      food: foodItems.TORTILLAS_WHOLE_WHEAT,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.MAYONNAISE,
      quantity: cookingMeasurements.ONE_TABLESPOON
    },
    {
      food: foodItems.AVOCADOS,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.LUTTUCE_ROMAINE,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.TOMATOES,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.ONION_RED,
      quantity: cookingMeasurements.QUARTER_MEASURE
    },
    {
      food: foodItems.PEPPER_BLACK,
      quantity: cookingMeasurements.EIGHTH_TEASPOON
    },
    {
      food: foodItems.SPINACH,
      quantity: cookingMeasurements.HALF_CUP
    },
    {
      food: foodItems.TOMATOES,
      quantity: cookingMeasurements.HALF_MEASURE
    },
    {
      food: foodItems.CUCUMBERS,
      quantity: cookingMeasurements.HALF_MEASURE
    },
    {
      food: foodItems.SCALLIONS,
      quantity: cookingMeasurements.ONE_MEASURE
    },
    {
      food: foodItems.VINEGAR_BALSAMIC,
      quantity: cookingMeasurements.TWO_TABLESPOONS
    }
  ]
);

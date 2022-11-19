import * as foodItems from './FoodItems';

export class Meal {
  description: string;
  ingredients: {
    food: foodItems.FoodItem;
    quantity: string;
  }[];

  constructor(description: string, ingredients: { food: foodItems.FoodItem, quantity: string }[]) {
    this.description = description;
    this.ingredients = ingredients;
  }

  equals = (otherMeal: Meal): boolean => this.description === otherMeal.description;
}

export const FRENCH_TOAST = new Meal(
  'Cinnamon French Toast w/ 1/2 Cup Strawberries',
  []
);

export const EZEKIEL_BREAD = new Meal(
  '2 slices Ezekiel bread, 2 tablespoons nut butter, and 1 tablespoon hemp seeds',
  []
);

export const TOFU_SCRAMBLE = new Meal(
  'Tofu Scramble',
  []
);

export const SMOOTHIE_BEAT = new Meal(
  'Beet Blast Smoothie',
  []
);

export const SMOOTHIE_GREEN = new Meal(
  'Green Power Smoothie',
  []
);

export const OATS = new Meal(
  '1/2 cup dry steel cut oats w/ 1 banana and 1 cup cherries',
  []
);

export const PROTEIN_SMOOTHIE_TROPICAL = new Meal(
  'Tropical Bliss Smoothie w/ additional 30g protein powder',
  []
);

export const PROTEIN_SMOOTHIE_GREEN = new Meal(
  'Green Power Smoothie w/ additional 30g protein powder',
  []
);

export const PROTEIN_SMOOTHIE_BEAT = new Meal(
  'Beet Blast Smoothie w/ additional 30g protein powder',
  []
);

export const SALAD_POWER = new Meal(
  'Alkaline Protein Power Salad',
  []
);

export const PASTA_RICOTTA = new Meal(
  'Ricotta Red Sauce Pasta',
  []
);

export const CHILI_FIVE_BEAN = new Meal(
  '5-Bean Chili',
  []
);

export const WRAP_CLUB = new Meal(
  'Club Wrap',
  []
);

export const EDAMAME_WITH_YEAST = new Meal(
  '1 cup steamed shelled edamame w/ 1 tablespoon B12 fortified nutritional yeast',
  []
);

export const CHOCOLATE_CHIP_BITES = new Meal(
  '2 No-Bake Choclate Chip Bites',
  []
);

export const PASTA_RICOTTA_AND_BROCCOLI = new Meal(
  'Ricotta Red Sauce Pasta & 2 cups steamed broccoli',
  []
);

export const CHILI_FIVE_BEAN_AND_SALAD = new Meal(
  '5-Bean Chili w/ side salad (spinach, tomato, cucumber, green onion, balsamic vinegar',
  []
);

export const CHICKEN_SEITAN = new Meal(
  'Air-Fried Chicken-Style Seitan w/ baked potato & 1 cup steamed green peas',
  []
);

export const WRAP_CLUB_AND_SALAD = new Meal(
  'Club Wrap w/ side salad (spinach, tomato, cucumber, green onion, balsamic vinegar',
  []
);

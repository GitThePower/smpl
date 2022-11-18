import { FoodItem } from './FoodItems';

export interface Ingredient {
  food: FoodItem;
  quantity: string;
}

export interface Meal {
  description: string;
  weeklyFrequency: number;
  ingredients: Ingredient[];
}

export const BREAKFASTS: Record<string, Meal> = {
  FRENCH_TOAST: {
    description: 'Cinnamon French Toast w/ 1/2 Cup Strawberries',
    weeklyFrequency: 2,
    ingredients: []
  },
  EZEKIEL_BREAD: {
    description: '2 slices Ezekiel bread, 2 tablespoons nut butter, and 1 tablespoon hemp seeds',
    weeklyFrequency: 1,
    ingredients: []
  },
  TOFU_SCRAMBLE: {
    description: 'Tofu Scramble',
    weeklyFrequency: 4,
    ingredients: []
  }
};

export const PRE_WORKOUTS: Record<string, Meal> = {
  BEAT_SMOOTHIE: {
    description: 'Beet Blast Smoothie',
    weeklyFrequency: 2,
    ingredients: []
  },
  GREEN_SMOOTHIE: {
    description: 'Green Power Smoothie',
    weeklyFrequency: 3,
    ingredients: []
  },
  OATS: {
    description: '1/2 cup dry steel cut oats w/ 1 banana and 1 cup cherries',
    weeklyFrequency: 2,
    ingredients: []
  }
};

export const POST_WORKOUTS: Record<string, Meal> = {
  TROPICAL_SMOOTHIE: {
    description: 'Tropical Bliss Smoothie w/ additional 30g protein powder',
    weeklyFrequency: 5,
    ingredients: []
  },
  GREEN_SMOOTHIE: {
    description: 'Green Power Smoothie w/ additional 30g protein powder',
    weeklyFrequency: 1,
    ingredients: []
  },
  BEAT_SMOOTHIE: {
    description: 'Beet Blast Smoothie w/ additional 30g protein powder',
    weeklyFrequency: 1,
    ingredients: []
  }
};

export const LUNCHES: Record<string, Meal> = {
  SALAD: {
    description: 'Alkaline Protein Power Salad',
    weeklyFrequency: 2,
    ingredients: []
  },
  PASTA: {
    description: 'Ricotta Red Sauce Pasta',
    weeklyFrequency: 1,
    ingredients: []
  },
  CHILI: {
    description: '5-Bean Chili',
    weeklyFrequency: 3,
    ingredients: []
  },
  WRAP: {
    description: 'Club Wrap',
    weeklyFrequency: 1,
    ingredients: []
  }
};

export const SNACKS: Record<string, Meal> = {
  EDAMAME: {
    description: '1 cup steamed shelled edamame w/ 1 tablespoon B12 fortified nutritional yeast',
    weeklyFrequency: 3,
    ingredients: []
  },
  CHOCOLATE_CHIP_BITES: {
    description: '2 No-Bake Choclate Chip Bites',
    weeklyFrequency: 4,
    ingredients: []
  }
};

export const DINNERS: Record<string, Meal> = {
  PASTA: {
    description: 'Ricotta Red Sauce Pasta & 2 cups steamed broccoli',
    weeklyFrequency: 2,
    ingredients: []
  },
  CHILI: {
    description: '5-Bean Chili w/ side salad (spinach, tomato, cucumber, green onion, balsamic vinegar',
    weeklyFrequency: 2,
    ingredients: []
  },
  CHICKEN: {
    description: 'Air-Fried Chicken-Style Seitan w/ baked potato & 1 cup steamed green peas',
    weeklyFrequency: 2,
    ingredients: []
  },
  WRAP: {
    description: 'Club Wrap w/ side salad (spinach, tomato, cucumber, green onion, balsamic vinegar',
    weeklyFrequency: 1,
    ingredients: []
  }
};

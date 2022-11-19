import * as meals from "./Meals";

export class MealSelection {
  selection: {
    meal: meals.Meal;
    weeklyFrequency: number;
  }[];

  constructor(selection: { meal: meals.Meal, weeklyFrequency: number }[]) {
    this.selection = selection;
  }

  isValid = (): boolean => this.selection.reduce((prev, curr) => prev + curr.weeklyFrequency, 0) === 7;
}

export const BREAKFASTS = new MealSelection([
  {
    meal: meals.FRENCH_TOAST,
    weeklyFrequency: 2
  },
  {
    meal: meals.EZEKIEL_BREAD,
    weeklyFrequency: 1
  },
  {
    meal: meals.TOFU_SCRAMBLE,
    weeklyFrequency: 4
  }
]);

export const PRE_WORKOUTS = new MealSelection([
  {
    meal: meals.SMOOTHIE_BEAT,
    weeklyFrequency: 2
  },
  {
    meal: meals.SMOOTHIE_GREEN,
    weeklyFrequency: 3
  },
  {
    meal: meals.OATS,
    weeklyFrequency: 2
  }
]);

export const POST_WORKOUTS = new MealSelection([
  {
    meal: meals.PROTEIN_SMOOTHIE_TROPICAL,
    weeklyFrequency: 5
  },
  {
    meal: meals.PROTEIN_SMOOTHIE_GREEN,
    weeklyFrequency: 1
  },
  {
    meal: meals.PROTEIN_SMOOTHIE_BEAT,
    weeklyFrequency: 1
  }
]);

export const LUNCHES = new MealSelection([
  {
    meal: meals.SALAD_POWER,
    weeklyFrequency: 2
  },
  {
    meal: meals.PASTA_RICOTTA,
    weeklyFrequency: 1
  },
  {
    meal: meals.CHILI_FIVE_BEAN,
    weeklyFrequency: 3
  },
  {
    meal: meals.WRAP_CLUB,
    weeklyFrequency: 1
  }
]);

export const SNACKS = new MealSelection([
  {
    meal: meals.EDAMAME_WITH_YEAST,
    weeklyFrequency: 3
  },
  {
    meal: meals.CHOCOLATE_CHIP_BITES,
    weeklyFrequency: 4
  }
]);

export const DINNERS = new MealSelection([
  {
    meal: meals.PASTA_RICOTTA_AND_BROCCOLI,
    weeklyFrequency: 2
  },
  {
    meal: meals.CHILI_FIVE_BEAN_AND_SALAD,
    weeklyFrequency: 2
  },
  {
    meal: meals.CHICKEN_SEITAN,
    weeklyFrequency: 2
  },
  {
    meal: meals.WRAP_CLUB_AND_SALAD,
    weeklyFrequency: 1
  }
]);

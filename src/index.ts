import { Meal } from './constants/Meals';
import * as mealSelections from './constants/MealSelections';

const makingBreakfast = true;
const makingPreWorkout = true;
const makingPostWorkout = true;
const makingLunch = true;
const makingSnack = true;
const makingDinner = false;

const parseMealSelection = (mealSelection: mealSelections.MealSelection): Meal[] =>
  mealSelection.selection.reduce((prev, curr) => {
    for(let i = 0; i < curr.weeklyFrequency; i++) prev.push(curr.meal);
    return prev;
  }, [] as Meal[]);

const getWeeklyMeals = (): Meal[] => {
  const { BREAKFASTS, PRE_WORKOUTS, POST_WORKOUTS, LUNCHES, SNACKS, DINNERS } = mealSelections;
  const weeklyMeals = [] as Meal[];

  if (makingBreakfast) weeklyMeals.concat(parseMealSelection(BREAKFASTS));
  if (makingPreWorkout) weeklyMeals.concat(parseMealSelection(PRE_WORKOUTS));
  if (makingPostWorkout) weeklyMeals.concat(parseMealSelection(POST_WORKOUTS));
  if (makingLunch) weeklyMeals.concat(parseMealSelection(LUNCHES));
  if (makingSnack) weeklyMeals.concat(parseMealSelection(SNACKS));
  if (makingDinner) weeklyMeals.concat(parseMealSelection(DINNERS));

  return weeklyMeals;
};

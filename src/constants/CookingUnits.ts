export class CookingUnit {
  name: string;
  rank: number;

  constructor(name: string, rank: number) {
    this.name = name;
    this.rank = rank;
  }
}

export const TEASPOONS = new CookingUnit('teaspoons', 1);

export const TABLESPOONS = new CookingUnit('tablespoons', 2);

export const FLUID_OUNCES = new CookingUnit('oz', 3);

export const CUPS = new CookingUnit('cups', 4);

export const PINTS = new CookingUnit('pints', 5);

export const QUARTS = new CookingUnit('quarts', 6);

export const GALLONS = new CookingUnit('gallons', 7);

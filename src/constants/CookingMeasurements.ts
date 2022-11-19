import { CookingUnit } from "./CookingUnits";

export class CookingMeasurement {
  baseUnit: number;
  unit: string;

  constructor(quantity: number, unit: string) {
    this.unit = unit;
    this.baseUnit = quantity;
  }

  humanReadableMeasurement = (): string => {
    return `${this.baseUnit} ${this.unit}`;
  }

  add = (otherMeasurement: CookingMeasurement): CookingMeasurement =>
    new CookingMeasurement(this.baseUnit + otherMeasurement.baseUnit, this.unit);

  subtract = (otherMeasurement: CookingMeasurement): CookingMeasurement =>
    new CookingMeasurement(Math.max(this.baseUnit - otherMeasurement.baseUnit, 0), this.unit);
}

export class ConvertableCookingMeasurement extends CookingMeasurement {
  baseUnit: number;
  unit: CookingUnit;

  constructor(quantity: number, unit: CookingUnit) {
    super(quantity, unit);
    this.unit = unit;
    if (this.unit === CookingUnit.GALLONS) this.baseUnit = quantity * 768;
    else if (this.unit === CookingUnit.QUARTS) this.baseUnit = quantity * 192;
    else if (this.unit === CookingUnit.PINTS) this.baseUnit = quantity * 96;
    else if (this.unit === CookingUnit.CUPS) this.baseUnit = quantity * 48;
    else if (this.unit === CookingUnit.FLUID_OUNCES) this.baseUnit = quantity * 6;
    else if (this.unit === CookingUnit.TABLESPOONS) this.baseUnit = quantity * 3;
    else this.baseUnit = quantity;
  }

  humanReadableMeasurement = (): string => {
    if (this.unit === CookingUnit.GALLONS) return `${this.baseUnit / 768} ${this.unit}`;
    else if (this.unit === CookingUnit.QUARTS) return `${this.baseUnit / 192} ${this.unit}`;
    else if (this.unit === CookingUnit.PINTS) return `${this.baseUnit / 96} ${this.unit}`;
    else if (this.unit === CookingUnit.CUPS) return `${this.baseUnit / 48} ${this.unit}`;
    else if (this.unit === CookingUnit.FLUID_OUNCES) return `${this.baseUnit / 6} ${this.unit}`;
    else if (this.unit === CookingUnit.TABLESPOONS) return `${this.baseUnit / 3} ${this.unit}`;
    else return `${this.baseUnit} ${this.unit}`;
  }

  add = (otherMeasurement: CookingMeasurement): CookingMeasurement => {
    const baseUnit = this.baseUnit + otherMeasurement.baseUnit;
    const unit = this.adjustUnit(baseUnit);

    return new CookingMeasurement(baseUnit, unit);
  }

  subtract = (otherMeasurement: CookingMeasurement): CookingMeasurement => {
    const baseUnit = this.baseUnit - otherMeasurement.baseUnit;
    const unit = this.adjustUnit(baseUnit);

    return new CookingMeasurement(Math.max(baseUnit, 0), unit);
  }

  private adjustUnit = (baseUnit: number): CookingUnit => {
    if (baseUnit >= 768) return CookingUnit.GALLONS;
    else if (baseUnit >= 192) return CookingUnit.QUARTS;
    else if (baseUnit >= 96) return CookingUnit.PINTS;
    else if (baseUnit >= 48) return CookingUnit.CUPS;
    else if (baseUnit >= 6) return CookingUnit.FLUID_OUNCES;
    else if (baseUnit >= 3) return CookingUnit.TABLESPOONS;
    else return CookingUnit.TEASPOONS;
  }
}

export const QUARTER_MEASURE = new CookingMeasurement(0.25, 'measures');

export const HALF_MEASURE = new CookingMeasurement(0.5, 'measures');

export const ONE_MEASURE = new CookingMeasurement(1, 'measures');

export const TWO_MEASURES = new CookingMeasurement(2, 'measures');

export const THREE_MEASURES = new CookingMeasurement(3, 'measures');

export const FOUR_MEASURES = new CookingMeasurement(4, 'measures');

export const EIGHTH_TEASPOON = new ConvertableCookingMeasurement(0.125, CookingUnit.TEASPOONS);

export const QUARTER_TEASPOON = new ConvertableCookingMeasurement(0.25, CookingUnit.TEASPOONS);

export const HALF_TEASPOON = new ConvertableCookingMeasurement(0.5, CookingUnit.TEASPOONS);

export const ONE_TEASPOON = new ConvertableCookingMeasurement(1, CookingUnit.TEASPOONS);

export const ONE_TABLESPOON = new ConvertableCookingMeasurement(3, CookingUnit.TABLESPOONS);

export const ONE_AND_A_HALF_TABLESPOONS = new ConvertableCookingMeasurement(4.5, CookingUnit.TABLESPOONS);

export const TWO_TABLESPOONS = new ConvertableCookingMeasurement(6, CookingUnit.TABLESPOONS);

export const THREE_TABLESPOONS = new ConvertableCookingMeasurement(9, CookingUnit.TABLESPOONS);

export const TEN_OUNCES = new ConvertableCookingMeasurement(60, CookingUnit.FLUID_OUNCES);

export const QUARTER_CUP = new ConvertableCookingMeasurement(12, CookingUnit.CUPS);

export const HALF_CUP = new ConvertableCookingMeasurement(24, CookingUnit.CUPS);

export const THREE_QUARTERS_CUP = new ConvertableCookingMeasurement(36, CookingUnit.CUPS);

export const ONE_CUP = new ConvertableCookingMeasurement(48, CookingUnit.CUPS);

export const ONE_AND_A_QUARTER_CUPS = new ConvertableCookingMeasurement(60, CookingUnit.CUPS);

export const ONE_AND_A_HALF_CUPS = new ConvertableCookingMeasurement(72, CookingUnit.CUPS);

export const TWO_CUPS = new ConvertableCookingMeasurement(96, CookingUnit.CUPS);

export const TWO_AND_A_HALF_CUPS = new ConvertableCookingMeasurement(120, CookingUnit.CUPS);

export const THREE_CUPS = new ConvertableCookingMeasurement(144, CookingUnit.CUPS);

export const FOUR_CUPS = new ConvertableCookingMeasurement(192, CookingUnit.CUPS);

export const SIX_AND_THREE_QUARTERS_CUPS = new ConvertableCookingMeasurement(324, CookingUnit.CUPS);

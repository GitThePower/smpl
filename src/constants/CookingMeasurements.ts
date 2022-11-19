import * as cookingUnits from "./CookingUnits";

export class CookingMeasurement {
  baseUnit: number;
  unit: cookingUnits.CookingUnit;

  constructor(quantity: number, unit: cookingUnits.CookingUnit) {
    this.unit = unit;
    if (this.unit === cookingUnits.GALLONS) this.baseUnit = quantity * 768;
    else if (this.unit === cookingUnits.QUARTS) this.baseUnit = quantity * 192;
    else if (this.unit === cookingUnits.PINTS) this.baseUnit = quantity * 96;
    else if (this.unit === cookingUnits.CUPS) this.baseUnit = quantity * 48;
    else if (this.unit === cookingUnits.FLUID_OUNCES) this.baseUnit = quantity * 6;
    else if (this.unit === cookingUnits.TABLESPOONS) this.baseUnit = quantity * 3;
    else this.baseUnit = quantity;
  }

  humanReadableMeasurement = (): string => {
    if (this.unit === cookingUnits.GALLONS) return `${this.baseUnit / 768} ${this.unit}`;
    else if (this.unit === cookingUnits.QUARTS) return `${this.baseUnit / 192} ${this.unit}`;
    else if (this.unit === cookingUnits.PINTS) return `${this.baseUnit / 96} ${this.unit}`;
    else if (this.unit === cookingUnits.CUPS) return `${this.baseUnit / 48} ${this.unit}`;
    else if (this.unit === cookingUnits.FLUID_OUNCES) return `${this.baseUnit / 6} ${this.unit}`;
    else if (this.unit === cookingUnits.TABLESPOONS) return `${this.baseUnit / 3} ${this.unit}`;
    else return `${this.baseUnit} ${this.unit}`;
  }

  add = (otherMeasurement: CookingMeasurement): CookingMeasurement => {
    const baseUnit = this.baseUnit + otherMeasurement.baseUnit;
    const unit = this.adjustUnit(baseUnit);

    return new CookingMeasurement(baseUnit, unit);
  }

  private adjustUnit = (baseUnit: number): cookingUnits.CookingUnit => {
    if (baseUnit >= 768) return cookingUnits.GALLONS;
    else if (baseUnit >= 768) return cookingUnits.QUARTS;
    else if (baseUnit >= 768) return cookingUnits.PINTS;
    else if (baseUnit >= 768) return cookingUnits.CUPS;
    else if (baseUnit >= 768) return cookingUnits.FLUID_OUNCES;
    else if (baseUnit >= 768) return cookingUnits.TABLESPOONS;
    else return cookingUnits.TEASPOONS;
  }
}

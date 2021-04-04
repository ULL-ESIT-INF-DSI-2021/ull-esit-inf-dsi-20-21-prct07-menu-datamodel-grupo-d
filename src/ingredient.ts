/**
 * Class Ingredient
 * 
 */

export class Ingredient {
    constructor(private readonly name: string, 
                private readonly country: string,
                private readonly city: string,
                private readonly category: string,
                private readonly kcal: number,
                private readonly macro: [string, number][],
                private readonly price_kg: number) {}

    getName(): string {
      return this.name;
    }

    getCountry(): string {
      return this.country;
    }

    getCity(): string {
      return this.city;
    }

    getCategory(): string {
      return this.category;
    }

    getCalories(): number {
      return this.kcal;
    }

    getMacros(): [string, number][] {
      return this.macro;
    }

    getPrice(): number {
      return this.price_kg;
    }
}
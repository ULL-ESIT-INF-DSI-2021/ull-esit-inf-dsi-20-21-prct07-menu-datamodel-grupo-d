/**
 * Class Ingredient
 * @param name Name of the Ingredient
 * @param country Country of the Ingredient
 * @param city City of the Ingredient
 * @param category Category of the Ingredient
 * @param kcal Calories of the ingredient
 * @param macro Macros of the Ingredient
 * @param price_kg Price of the Ingredient
 * @method getName() Returns the name of the Ingredient
 * @method getCountry() Returns the country of the Ingredient
 * @method getCity() Returns the city of the Ingredient
 * @method getCategory() Returns the category of the Ingredient
 * @method getCalories() Returns the calories of the Ingredient
 * @method getMacros() Returns a vector of the macros of the Ingredient
 * @method getPrice() Returns the price of the Ingredient
 */

export class Ingredient {
<<<<<<< HEAD
  constructor(private readonly name: string, 
=======
  constructor(public readonly name: string, 
>>>>>>> ingredient
              private readonly country: string,
              private readonly city: string,
              private readonly category: string,
              private readonly kcal: number,
              private readonly macro: [string, number][],
              private readonly price_kg: number) {}

<<<<<<< HEAD
  getName(): string {
    return this.name;
  }
=======
>>>>>>> ingredient

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
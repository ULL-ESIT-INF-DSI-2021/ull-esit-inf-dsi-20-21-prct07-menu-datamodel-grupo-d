/**
 * Class Ingredient
 * @param name Name of the Ingredient
 * @param country Country of the Ingredient
 * @param city City of the Ingredient
 * @param category Category of the Ingredient
 * @param kcal Calories of the ingredient
 * @param macro Macros of the Ingredient
 * @param price_kg Price of the Ingredient
 */

export type FoodCategory = "Meat" | "Fish" | "Fruit" | "Vegetable" | 
                           "Dairy" | "Grain" | "Others" | "Legumes";

export type Macro = {
  group: "Prot" | "Carb" | "Fat" | "Fiber" ,
  grams: number; 
}

export class Ingredient {
  constructor(public readonly name: string, 
              public readonly country: string,
              public readonly city: string,
              public readonly category: FoodCategory,
              public readonly kcal: number,
              public readonly macro: Macro[],
              public readonly price_kg: number) {}
};

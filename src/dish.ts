/**
 * Class Dish
 * @param name Name of the dish
 * @param category Category of the dish
 * @param ingredeints Ingredients in the dish
 * @method getName() Returns name of the dish
 * @method getCategory() Returns category of the dish
 * @method showIngredients() Returns ingredients of the dish
 * @method getPrice() Returns price of the dish
 * @method getCalories() Returns calories of the dish
 * @method totalCalories() Calculates total calories of the dish
 * @method totalPrice() Calculates total price of the dish
 * @method dominantIngredientType() Calcualtes the most dominant type of ingredient of the dish 
 */


import {Ingredient, FoodCategory, Macro} from './ingredient'

export type DishCategory = "Starter" | "First" | "Main" | "Dessert";

export class Dish {
  constructor(readonly name: string,
              readonly category: DishCategory,
              private readonly ingredients: [Ingredient, number][]) {}

  totalDishCalories(): number {
    let sum: number = 0;
    this.ingredients.forEach(element => {
      sum += (element[0].kcal * (element[1]/100));
    })
    return sum = parseFloat((sum).toFixed(0))
  }

   totalDishPrice(): number{
    let sum: number = 0;
    this.ingredients.forEach(element => {
      sum += (element[0].price_kg * (element[1]/1000));
    })
    return sum = parseFloat((sum).toFixed(2))
  }

  showDishIngredients(): string {
    let result: string = "";
    this.ingredients.forEach(element => {
      result += element[0].name + " (" + element[1] + "g) ";
    })
    return result;
  }

  getDishMacro(): Macro[] {
    let sumProt:  Macro = {group: "Prot", grams: 0};
    let sumFat:  Macro = {group: "Fat", grams: 0};
    let sumCarb:   Macro = {group: "Carb" , grams: 0};
    let sumFiber: Macro = {group: "Fiber", grams: 0};
    this.ingredients.forEach(ingredient => {
      ingredient[0].macro.forEach(macro => {
        if (macro.group === "Prot") 
          sumProt.grams += parseFloat((macro.grams * ingredient[1]/100).toFixed(0));
        if (macro.group === "Fat") 
          sumFat.grams += parseFloat((macro.grams * ingredient[1]/100).toFixed(0));
        if (macro.group === "Carb") 
          sumCarb.grams += parseFloat((macro.grams * ingredient[1]/100).toFixed(0));
        if (macro.group === "Fiber") 
          sumFiber.grams += parseFloat((macro.grams * ingredient[1]/100).toFixed(0));
      });
    });
    let sumMacro: Macro[] = [sumProt, sumFat, sumCarb, sumFiber];
    return sumMacro;
  }
  
  dominantIngredientTypeOnDish(): string {
    let auxVector: FoodCategory[] = [];
    this.ingredients.forEach(element => {
      auxVector.push(element[0].category)
    })

    let index: number = 0;
    let count: number = 1;
    let item: string = "";

    for (let i = 0; i < auxVector.length; i++) {
      for (let j = i; j < auxVector.length; j++) {
        if (auxVector[i] === auxVector[j]) index++;
        if (count < index) {
          count = index;
          item = auxVector[i];
        }
      }
      index = 0;
    }
    if (count === 1) {
      let tmp: [Ingredient, number][] = this.ingredients;
      tmp.sort((a,b) => (a[1] < b[1]) ? 1 : ((b[1] < a[1]) ? -1 : 0))
      return tmp[0][0].category
    }
    else {
      return item;
    }
  }
}
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


import {Ingredient} from './ingredient'

export class Dish {
  private price: number = 0;
  private calories: number = 0;
  constructor(private readonly name: string,
    private readonly category: string,
    private readonly ingredients: [Ingredient, number][]) {
      this.totalCalories();
      this.totalPrice();
    }

  private totalCalories(): void {
    this.calories = 0;
    this.ingredients.forEach(element => {
      this.calories += (element[0].getCalories() * (element[1]/100));
    })
    this.calories = parseFloat((this.calories).toFixed(0))
  }

  private totalPrice(): void {
    this.price = 0;
    this.ingredients.forEach(element => {
      this.price += (element[0].getPrice() * (element[1]/1000));
    })
    this.price = parseFloat((this.price).toFixed(2))
  }
    
  getName(): string {
    return this.name;
  }
  
  getCategory(): string {
    return this.category;
  }

  getPrice(): number {
    return this.price;
  }

  getCalories(): number {
    return this.calories;
  }

  showIngredients(): string {
    let result: string = "";
    this.ingredients.forEach(element => {
      result += element[0].getName() + " (" + element[1] + "g) ";
    })
    return result;
  }
  
  dominantIngredientType(): string {
    let auxVector: string[] = [];
    this.ingredients.forEach(element => {
      auxVector.push(element[0].getCategory())
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
      let tmp : [Ingredient, number][] = this.ingredients;
      tmp.sort((a,b) => (a[1] < b[1]) ? 1 : ((b[1] < a[1]) ? -1 : 0))
      return tmp[0][0].getCategory()
    }
    else {
      return item;
    }
  }
}
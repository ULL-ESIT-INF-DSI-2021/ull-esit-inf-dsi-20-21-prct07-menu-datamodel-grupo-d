/**
 * Class Menu
 * @param dishes Array of dishes in the menu
 * @method categoryChecker() Checks if at least there are 3 different dish categories
 * @method addDish() Pushes a new dish into the menu
 * @method removeDish() Eliminates a dish from the menu by his name
 * @method totalMenuPrice() Calculates the total menu price
 * @method totalMenuCalories() Calculates the total menu calories
 * @method showMenuDishes() Returns the menu dish and its ingredients 
 */

import {Dish, DishCategory} from './dish';

export class Menu {
  constructor(private dishes: Dish[]) {
    if (!this.categoryChecker()) {
      console.error("No contiene los tipos de plato suficientes");
    }
  }

  categoryChecker(): boolean {
    let types: boolean[] = [false, false, false, false];
    let cont = 0
    this.dishes.forEach(dish => {
      if (dish.category === "Starter") types[0] = true;
      if (dish.category === "First")   types[1] = true;
      if (dish.category === "Main")    types[2] = true;
      if (dish.category === "Dessert") types[3] = true;
    })
    types.forEach(elem => {
      if (elem) cont++;
    })
    if (cont >= 3) return true;
    return false;
  }

  addDish(newDish: Dish): void {
    this.dishes.push(newDish);
  }

  removeDish(removeDish: Dish): void {
    this.dishes.forEach(dish => {
      if (removeDish.name === dish.name) {
        const index = this.dishes.indexOf(dish)
        if (index > -1) this.dishes.splice(index, 1);
      }
    });
  }

  totalMenuPrice(): number {
    let sum: number = 0;
    this.dishes.forEach(dish => {
      sum += dish.totalDishPrice();
    })
    return sum;
  }

  totalMenuCalories(): number {
    let sum: number = 0;
    this.dishes.forEach(dish => {
      sum += dish.totalDishCalories();
    })
    return sum;
  }

  showMenuDishes(): string[] {
    let dishIngredients: string[] = [];
    this.dishes.forEach(dish => {
      dishIngredients.push(dish.showDishIngredients());
    })
    return dishIngredients;
  }
}
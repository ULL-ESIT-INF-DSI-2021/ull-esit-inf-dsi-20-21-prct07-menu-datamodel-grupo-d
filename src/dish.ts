

import {Ingredient, FoodCategory, Macro} from './ingredient'

export type DishCategory = "Starter" | "First" | "Main" | "Dessert";

/**
 * # Class Dish
 * Esta clase se encarga de aunar los distintos ingredientes que componen un plato y de agregar
 * algunas propiedades al plato que serán de utilidad para la lógica de creación de menús.
 * 
 * Se asume como paso previo en la interfaz final que la creación de los platos permitirá
 * establecer una metodología de evaluación de aceptación de los menús. Cómo ejemplo de ello
 * se incluye la categoría del alimento, que será un dato descriptivo muy útil a la hora de 
 * confirmar la validez de un menú. 
 * 
 * La clase, además de contener los atributos esperados:
 * 
 * - Nombre del plato
 * - categoría del plato (mediante un tipo de dato personalizado, tal y como se ha hecho con anterioridad)
 * - lista de ingredientes que lo componen
 * 
 * también es capaz de evaluar las calorías totales del plato así como su precio en base a los ingredientes 
 * y otros datos de interés, para ello se definen los métodos: 
 * 
 * - totalDishCalories() - devuelve un valor numérico que representa las Kcal totales del plato 
 *    Uso:
 *    ```TS
 *    let mashedPotatoesCalories: number = mashedPotatoes.totalDishCalories()
 *    ``` 
 * 
 * - totalDishPrice() - devuelve un valor numérico que representa el coste del plato 
 *    Uso:
 *    ```TS
 *    let mashedPotatoesPrice: number = mashedPotatoes.totalDishPrice()
 *    ``` 
 * 
 * - showIngredients() - devuelve una cadena de caracteres que expone los ingredientes y su cantidad en gramos 
 *    Uso:
 *    ```TS
 *    console.log(mashedPotatoes.showIngredients()) // ">Potatoes (200g) Milk (100g) Butter (50g) Salt (25g) "
 *    ``` 
 * - getDishMacro() - devuelve una lista de macronuetrientes que contiene el plato 
 * 
 * - dominantIngredientTypeOnDish() - devuelve el tipo de ingrediente más presente en el plato
 * 
 *   
 * @param name Name of the dish
 * @param category Category of the dish
 * @param ingredeints Ingredients in the dish
 * @method showIngredients() Returns ingredients of the dish
 * @method totalDishCalories() Calculates total calories of the dish
 * @method totalDishPrice() Calculates total price of the dish
 * @method getDishMacro() Returns the total amount of proteins, carbs, fats and fiber in the dish
 * @method dominantIngredientType() Calcualtes the most dominant type of ingredient of the dish 
 */
export class Dish {
  constructor(readonly name: string,
              readonly category: DishCategory,
              public readonly ingredients: [Ingredient, number][]) {}

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
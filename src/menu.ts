
import {Dish, DishCategory} from './dish';
import {Macro} from './ingredient'

/**
 * # Class Menu
 * La clase Menu hace de interfaz para representar un conjunto de platos, ésta 
 * permite la adición, el borrado y la obtención de información útil a cerca de ellos
 * 
 * Tal y como se solicita se ha preparado la clase para que deba permitirse la creación
 * de uno de estos objetos únicamente cuando se incluya al menos tres de los tipos de 
 * platos clasificados en esta jerarquía de clases:
 *  - Starter - Plato dee tipo entrante
 *  - First - Primer plato
 *  - Main - Segundo plato
 *  - Dessert - Postre
 * Para ello se hace uso del método categoryChecker, el cual al final se encarga de llevar
 * a cabo una cuenta de cada tipo de plato incluido, este devuelve un valor booleano
 * que permitirá filtrar un menú válido de otro que se deba descartar.
 * 
 * Tal y como se espera de este tipo de clases de archivo de objetos se permite manipular el contenido del menú
 * de manera que se puede:
 * 
 * - añadir platos (con addDish())
 * - eliminar platos (con removeDish())
 * - revisar el contenido de platos (con showMenuDishes())
 * 
 * De manera análoga a la clase Dish esta clase permite el cálculo de los costes totales, las calorías totales
 * y los macronutrientes contenidos en todo el menú. Para ello se han diseñado los métodos:
 * 
 * - totalMenuPrice()
 * - totalMenuCaloriea()
 * - getMenuMacro()
 * 
 * respectivamente. También se añaden dos métodos para formatear información del menú a cadena de texto. Se plantea
 * el formato de información útil para la elección de los menús por parte del local y para el cliente. Los métodos son
 * los siguientes:
 * 
 * - showMenuDishes() - Muestra cada plato por su nombre llamando al  método "showIngredients()" de la clase Dish, 
 *   por lo que se añade a este valor la lista de ingredientes que lo componen.
 * 
 * - showGroupIngredients() - Muestra una lista de los grupos de alimentos contenidos en cada plato.
 * 
 * Tal y como se puede apreciar esta clase pretende ser autocontenida y operar exclusivamente dentro de ella y con los datos 
 * que se archiven en cada instancia de Menu, de manera que pueda servir de interfaz informativa para la futura aplicación de comanda
 * que usará cada restaurante para listar los menús elegidos por los clientes.
 * 
 * @param dishes Array of dishes in the menu
 * @method categoryChecker() Checks if at least there are 3 different dish categories
 * @method addDish() Pushes a new dish into the menu
 * @method removeDish() Eliminates a dish from the menu by his name
 * @method totalMenuPrice() Calculates the total menu price
 * @method totalMenuCalories() Calculates the total menu calories
 * @method showMenuDishes() Returns the menu dish and its ingredients
 * @method getMenuMacro() Returns the total amount of proteins, carbs, fats and fiber in the menu
 * @method showGroupIngredients() Returns the group of ingredients in order of appereance
 */

export class Menu {
  constructor(private name: string, private dishes: Dish[]) {
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
    return parseFloat(sum.toFixed(2));
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
      dishIngredients.push(dish.name + " -> " + dish.showDishIngredients());
    })
    return dishIngredients;
  }

  getMenuMacro(): Macro[] {
    let sumProt:  Macro = {group: "Prot", grams: 0};
    let sumFat:   Macro = {group: "Fat" , grams: 0};
    let sumCarb:  Macro = {group: "Carb", grams: 0};
    let sumFiber: Macro = {group: "Fiber", grams: 0};
    this.dishes.forEach(dish => {
      dish.getDishMacro().forEach(macro => {
        if (macro.group === "Prot") sumProt.grams += macro.grams;
        if (macro.group === "Fat") sumFat.grams += macro.grams;
        if (macro.group === "Carb") sumCarb.grams += macro.grams;
        if (macro.group === "Fiber") sumFiber.grams += macro.grams;
      });
    });
    let sumMacro: Macro[] = [sumProt, sumFat, sumCarb, sumFiber];
    return sumMacro;
  }

  showGroupIngredients(): string[] {
    let group: string[] = [];
    this.dishes.forEach(dish => {
      let dishName: string = dish.name + " -> ";
      dish.ingredients.forEach(ing => {
        dishName += ing[0].category + " ";
      })
      group.push(dishName);
    })
    return group;
  }

  get_name(): string{
    return this.name;
  }
}
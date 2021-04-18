

export type FoodCategory = "Meat" | "Fish" | "Fruit" | "Vegetable" | 
                           "Dairy" | "Grain" | "Others" | "Legumes";

export type Macro = {
  group: "Prot" | "Carb" | "Fat" | "Fiber" ,
  grams: number; 
}


/**
 * # Clase Ingredient
 *  Esta clase es la planteada para representa run ingrediente,
 *  no presenta mayor complejidad que la propia estructura de datos 
 *  desde la cual acceder a todas las propiedades inherentes a este
 *  tipo de objeto. Será usada por la clase que representa un plato 
 *  para operar con los datos que se pueden conocer desde ella. 
 * 
 *  Los datos extraidos por cada ingrediente incluyen:
 *  
 *  - El nombre del ingrediente
 *  - El país de procedencia
 *  - La ciudad de procedencia
 *  - La categoría del ingrediente
 *  - Las KCal que supone el ingrediente
 *  - Los macronutrientes que  lo componen
 *  - El precio por Kilogramo.
 * 
 *  Los datos son públicos y de sólo lectura, ya que se supone que tras la creación
 *  de un ingrediente no se espera que sea modificado con mucha recurrencia. Por ello 
 *  y por seguridad se impone el tener que volver a crearlo en caso de tener que cambiar 
 *  algún aspecto; sin embargo esta situación espera no darse, ya que el programa principal 
 *  opera únicamente con los propios platos y menús que se compondrán por estos objetos. 
 * 
 *  Esta clase hace uso de un tipo personalizado de datos para representar las distintas 
 *  categorías de alimentos (FoodCategory) de manera que se pueda discretizar la categoría 
 *  insertada al instanciar un objeto de esta clase.
 *  
 *  También se crea el tipo de dato "Macro" que permitirá definir las propiedades de las macros
 *  que se esperan que representen los valores nutriocionales de cada ingrediente. Una macro se compone por
 *  
 *  - grupo (Proteinas, Carbohidratos, Grasas y fibras)
 *  - gramos 
 * 
 * @param name Name of the Ingredient
 * @param country Country of the Ingredient
 * @param city City of the Ingredient
 * @param category Category of the Ingredient
 * @param kcal Calories of the ingredient
 * @param macro Macros of the Ingredient
 * @param price_kg Price of the Ingredient
 */
export class Ingredient {
  constructor(public readonly name: string, 
              public readonly country: string,
              public readonly city: string,
              public readonly category: FoodCategory,
              public readonly kcal: number,
              public readonly macro: Macro[],
              public readonly price_kg: number) {}
};

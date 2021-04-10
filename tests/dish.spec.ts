import 'mocha';
import {expect} from 'chai';
import {Ingredient} from '../src/ingredient';
import {Dish, DishCategory} from '../src/dish';

describe('Class Dish', () => {

  // Ingredintes del plato

  let tomate = new Ingredient("Tomate", "Colombia", "Cali", "Fruit", 22,
                              [{group: "Prot", grams: 1}, {group: "Fat", grams: 0.11}, {group: "Carb", grams: 3.5}],
                              1.45);

  let lechuga = new Ingredient("Lechuga", "Cuba", "Moron", "Vegetable", 14,
                               [{group: "Prot", grams: 1.34}, {group: "Fat", grams: 0.2}, {group: "Carb", grams:  1.4}],
                               2.83);

  let queso = new Ingredient("Queso", "España", "Coruña", "Dairy", 357,
                             [{group: "Prot", grams: 23}, {group: "Fat", grams: 28.5}, {group: "Carb", grams: 2}],
                             11.90);

  let picatostes = new Ingredient("Picatostes", "Italia", "Verona", "Grain", 308,
                                  [{group: "Prot", grams: 10.1}, {group: "Fat", grams: 2.99}, {group: "Carb", grams: 57.9}],
                                  7.22);

  let cebolla = new Ingredient("Cebolla", "Mexico", "Cancun", "Vegetable", 57, 
                               [{group: "Prot", grams: 3.1}, {group: "Fat", grams: 0.99}, {group: "Carb", grams:  17.9}],
                               2.57)
  
  // Plato -> Ensalada Cesar

  let dish1 = new Dish("Ensalada Cesar", "Starter", [[tomate, 200], [lechuga, 150], [queso, 50], [picatostes, 25], [cebolla, 75]]);
  
  it("Create new Object Dish" , () => {
      expect(dish1 instanceof Dish).to.eql(true);
  });

  it("Getters Dish Name" , () => {
    expect(dish1.name).to.eql("Ensalada Cesar");
  });

  it("Getters Dish Category" , () => {
    expect(dish1.category).to.eql("Starter");
  });

  it("Getters Dish Price" , () => {
    expect(dish1.totalDishPrice()).to.eql(1.68);
  });

  it("Getters Dish Calories" , () => {
    expect(dish1.totalDishCalories()).to.eql(363);
  });

  it("List of Ingredients" , () => {
    expect(dish1.showDishIngredients()).to.eql("Tomate (200g) Lechuga (150g) Queso (50g) Picatostes (25g) Cebolla (75g) ");
  });

  it("Dominant Ingredient" , () => {
    expect(dish1.dominantIngredientTypeOnDish()).to.eql("Vegetable");
  });
});
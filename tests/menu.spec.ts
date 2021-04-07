import 'mocha';
import {expect} from 'chai';
import {Ingredient} from '../src/ingredient';
import {Dish, DishCategory} from '../src/dish';
import {Menu} from '../src/menu';

describe('Class Menu', () => {

  let tomate = new Ingredient("Tomate", "Colombia", "Cali", "Fruit", 22, 
                              [{group:"Prot", grams: 1}, {group:"Fat", grams: 0.11}, {group:"Carb", grams: 3.5}], 1.45);
  let lechuga = new Ingredient("Lechuga", "Cuba", "Moron", "Vegetable", 14, 
                               [{group:"Prot", grams: 1.34}, {group:"Fat", grams:0.2}, {group:"Carb", grams:  1.4}], 2.83);
  let queso = new Ingredient("Queso", "España", "Coruña", "Dairy", 357, 
                             [{group:"Prot", grams: 23}, {group:"Fat", grams:28.5}, {group:"Carb", grams: 2} ], 11.90);
  let picatostes = new Ingredient("Picatostes", "Italia", "Verona", "Grain", 308, 
                                  [{group:"Prot", grams: 10.1 }, {group:"Fat", grams:2.99}, {group:"Carb", grams:  57.9}], 7.22);
  let cebolla = new Ingredient("Cebolla", "Mexico", "Cancun", "Vegetable", 57, 
                               [{group:"Prot", grams: 3.1 }, {group:"Fat", grams:0.99}, {group:"Carb", grams:  17.9} ], 2.57)

   let spaguetti = new Ingredient("Spaguetti", "Italia", "Parma", "Others", 157, 
                               [{group:"Prot", grams: 5.76}, {group:"Fat", grams: 0.92}, {group:"Carb", grams: 30}], 0.75);
   let pollo = new Ingredient("Pollo", "España", "Gijon", "Meat", 239, 
                                [{group:"Prot", grams: 27}, {group:"Fat", grams: 14}, {group:"Carb", grams:  0}], 4.5);
   let perejil = new Ingredient("Perejil", "España", "Santander", "Vegetable", 36, 
                                [{group:"Prot", grams: 3 }, {group:"Fat", grams: 0.8}, {group:"Carb", grams:  6} ], 25)
  
  let CesarSalad = new Dish("Ensalada Cesar", "Starter", [[tomate, 200], [lechuga, 150], [queso, 50], [picatostes, 25], [cebolla, 75]]);
  let PastaChicken = new Dish("Spaguetti con Pollo", "Main", [[spaguetti, 300], [pollo, 200], [queso, 50], [cebolla, 100], [perejil, 10]]);
  
  let Italian_Menu = new Menu([CesarSalad, PastaChicken]);

  it("Create new Object Menu", () => {
      expect(Italian_Menu instanceof Menu).to.eql(true);
  });

  it("Has at least 3 categories", () => {
    expect(Italian_Menu.categoryChecker()).to.eql(false);
  });

  it("Menu price is 3.91", () => {
    expect(Italian_Menu.totalMenuPrice()).to.eql(3.91);
  });

  it("Menu calories are 1551", () => {
    expect(Italian_Menu.totalMenuCalories()).to.eql(1551);
  });

  it("Menu dishes are...", () => {
    expect(Italian_Menu.showMenuDishes()).to.eql(
      [
        "Tomate (200g) Lechuga (150g) Queso (50g) Picatostes (25g) Cebolla (75g) ",
        "Spaguetti (300g) Pollo (200g) Queso (50g) Cebolla (100g) Perejil (10g) "
      ]
    );
  });
});
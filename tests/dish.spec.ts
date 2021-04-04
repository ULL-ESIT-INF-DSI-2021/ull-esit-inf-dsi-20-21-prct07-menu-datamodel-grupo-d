import 'mocha';
import {expect} from 'chai';
import {Ingredient} from '../src/ingredient';
import {Dish} from '../src/dish';

describe('Class Dish', () => {
  let tomate = new Ingredient("Tomate", "Colombia", "Cali", "Fruta", 22, [["Proteina", 1], ["Lipidos", 0.11], ["Hidratos", 3.5]], 1.45);
  let lechuga = new Ingredient("Lechuga", "Cuba", "Moron", "Verdura", 14, [["Proteina", 1.34], ["Lipidos", 0.2], ["Hidratos", 1.4]], 2.83);
  let queso = new Ingredient("Queso", "España", "Coruña", "Lacteo", 357, [["Proteina", 23], ["Lipidos", 28.5], ["Hidratos", 2]], 11.90);
  let picatostes = new Ingredient("Picatostes", "Italia", "Verona", "Cereales", 308, [["Proteina", 10.1], ["Lipidos", 2.99], ["Hidratos", 57.9]], 7.22);
  let cebolla = new Ingredient("Cebolla", "Mexico", "Cancun", "Verdura", 57, [["Proteina", 3.1], ["Lipidos", 0.99], ["Hidratos", 17.9]], 2.57)
  
  let dish1 = new Dish("Ensalada Cesar*", "Entrante", [[tomate, 200], [lechuga, 150], [queso, 50], [picatostes, 25], [cebolla, 75]]);
  
  it("Create new Object Dish" , () => {
      expect(dish1 instanceof Dish).to.eql(true);
  });
  it("Getters Dish Name" , () => {
    expect(dish1.getName()).to.eql("Ensalada Cesar*");
  });
  it("Getters Dish Category" , () => {
    expect(dish1.getCategory()).to.eql("Entrante");
  });
  it("Getters Dish Price" , () => {
    expect(dish1.getPrice()).to.eql(1.68);
  });
  it("Getters Dish Calories" , () => {
    expect(dish1.getCalories()).to.eql(363);
  });
  it("List of Ingredients" , () => {
    expect(dish1.showIngredients()).to.eql("Tomate (200g) Lechuga (150g) Queso (50g) Picatostes (25g) Cebolla (75g) ");
  });
  it("Dominant Ingredient" , () => {
    expect(dish1.dominantIngredientType()).to.eql("Verdura");
  });
});
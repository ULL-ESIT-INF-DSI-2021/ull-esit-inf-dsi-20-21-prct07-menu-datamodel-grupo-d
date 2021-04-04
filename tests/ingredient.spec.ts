import 'mocha';
import {expect} from 'chai';
import {Ingredient} from '../src/ingredient';

describe('Class Ingredient', () => {
    let tomate = new Ingredient("Tomate", "Colombia", "Cali", "Fruta", 22, [["Proteina", 1], ["Lipidos", 0.11], ["Hidratos", 3.5]], 1.45);
    it("Create new Object Ingredient" , () => {
        expect(tomate instanceof Ingredient).to.eql(true);
    });
    it("Getters Ingredient Name" , () => {
        expect(tomate.getName()).to.eql("Tomate");
    });
    it("Getters Ingredient Country" , () => {
        expect(tomate.getCountry()).to.eql("Colombia");
    });
    it("Getters Ingredient City" , () => {
        expect(tomate.getCity()).to.eql("Cali");
    });
    it("Getters Ingredient Category" , () => {
        expect(tomate.getCategory()).to.eql("Fruta");
    });
    it("Getters Ingredient Calories" , () => {
        expect(tomate.getCalories()).to.eql(22);
    });
    it("Getters Ingredient Macros" , () => {
        expect(tomate.getMacros()).to.eql([["Proteina", 1], ["Lipidos", 0.11], ["Hidratos", 3.5]]);
    });
    it("Getters Ingredient Price" , () => {
        expect(tomate.getPrice()).to.eql(1.45);
    });
});
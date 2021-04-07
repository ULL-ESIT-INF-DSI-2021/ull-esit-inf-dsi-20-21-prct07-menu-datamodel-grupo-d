import 'mocha';
import {expect} from 'chai';
import {Ingredient} from '../src/ingredient';

describe('Class Ingredient', () => {    

    let tomate = new Ingredient("Tomate", "Colombia", "Cali", "Fruit", 22,
                                [{group:"Prot", grams: 1}, {group:"Fat", grams: 0.11}, {group:"Carb", grams: 3.5}], 1.45);

    it("Create new Object Ingredient" , () => {
        expect(tomate instanceof Ingredient).to.eql(true);
    });

    it("Getters Ingredient Name" , () => {
        expect(tomate.name).to.eql("Tomate");
    });

    it("Getters Ingredient Country" , () => {
        expect(tomate.country).to.eql("Colombia");
    });

    it("Getters Ingredient City" , () => {
        expect(tomate.city).to.eql("Cali");
    });

    it("Getters Ingredient Category" , () => {
        expect(tomate.category).to.eql("Fruit");
    });

    it("Getters Ingredient Calories" , () => {
        expect(tomate.kcal).to.eql(22);
    });

    it("Getters Ingredient Macros" , () => {
        expect(tomate.macro)
            .to.eql([{group: "Prot", grams: 1}, 
                     {group: "Fat", grams: 0.11},
                     {group: "Carb", grams: 3.5}]);
    });

    it("Getters Ingredient Price" , () => {
        expect(tomate.price_kg).to.eql(1.45);
    });
});
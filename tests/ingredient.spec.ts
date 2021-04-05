import 'mocha';
import {expect} from 'chai';
import {Ingredient, Macro} from '../src/ingredient';

describe('Class Ingredient', () => {    
    const tomato_prot : Macro ={ group:"Prot", grams: 1}
    const tomato_carb : Macro ={ group: "Carb", grams: 0.11}
    const tomato_fat : Macro ={ group: "Fat", grams: 3.5}
                                        //new Macro{"Prot", 1}, new Macro{"Fat", 0.11}, new Macro{"Carb", 3.5}
    let tomate = new Ingredient("Tomate", "Colombia", "Cali", "Fruit", 22, [tomato_prot, tomato_carb, tomato_fat], 1.45);
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
                     {group: "Carb", grams: 0.11},
                     {group: "Fat", grams:3.5 }]);
    });
    it("Getters Ingredient Price" , () => {
        expect(tomate.price_kg).to.eql(1.45);
    });
});
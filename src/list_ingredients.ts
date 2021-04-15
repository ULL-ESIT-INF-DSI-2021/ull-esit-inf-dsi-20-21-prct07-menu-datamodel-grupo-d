import {Ingredient, FoodCategory} from './ingredient';

let Arroz: Ingredient            = new Ingredient("Arroz", "China", "Pekin" , "Grain", 381,
                                                  [
                                                    {group: "Prot" , grams: 7}, {group: "Fat", grams: 0.9}, {group: "Carb", grams: 86}, {group: "Fiber", grams: 0.2}   
                                                  ], 0.83);

let Base_Pizza: Ingredient       = new Ingredient("Base_Pizza", "Italia", "Roma" , "Grain", 273,
                                                  [
                                                    {group: "Prot" , grams: 6.7}, {group: "Fat", grams: 7.4}, {group: "Carb", grams: 43.9}, {group: "Fiber", grams: 2.2}   
                                                  ], 1.75);

let Spaguetti: Ingredient        = new Ingredient("Spaguetti", "Italia", "Verona", "Grain", 369, 
                                                  [
                                                    {group: "Prot", grams: 12}, {group: "Fat", grams: 0.5}, {group: "Carb", grams: 74.1}, {group: "Fiber", grams: 4}
                                                  ], 0.75);
                                                  
let Ternera: Ingredient          = new Ingredient("Ternera", "Polonia", "Varsovia", "Meat", 250, 
                                                  [
                                                    {group: "Prot", grams: 26}, {group: "Fat", grams: 15}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 3.30);

let Pollo: Ingredient            = new Ingredient("Pollo", "Alemania", "Schlüchtern" , "Meat", 167,
                                                  [
                                                    {group: "Prot" , grams: 20}, {group: "Fat", grams: 9.7}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}   
                                                  ], 3.86);

let Papa_Hervida: Ingredient     = new Ingredient("Papa Cocida",  "España", "Vigo", "Vegetable", 77, 
                                                  [
                                                    {group: "Prot", grams: 2}, {group: "Fat", grams: 0.1}, {group: "Carb", grams: 17}, {group: "Fiber", grams: 2.2}
                                                  ], 0.70);
                                                  
let Merluza: Ingredient          = new Ingredient("Merluza",  "España", "Cadiz", "Fish", 89,
                                                  [
                                                    {group: "Prot", grams: 15.9}, {group: "Fat", grams: 0.1}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 38);

let Papas_Fritas: Ingredient     = new Ingredient("Papas Fritas",  "Portugal", "Lisboa", "Vegetable", 312,
                                                  [
                                                    {group: "Prot", grams: 6.5}, {group: "Fat", grams: 15}, {group: "Carb", grams: 41}, {group: "Fiber", grams: 3.6}
                                                  ], 5.6);

let Huevo: Ingredient            = new Ingredient("Huevo",  "España", "Cadiz", "Others", 155,
                                                  [
                                                    {group: "Prot", grams: 13}, {group: "Fat", grams: 11}, {group: "Carb", grams: 1.1}, {group: "Fiber", grams: 0}
                                                  ], 3.09);

let Tomate: Ingredient           = new Ingredient("Tomate",  "España", "Cadiz", "Fruit", 22,
                                                  [
                                                    {group: "Prot", grams: 1}, {group: "Fat", grams: 0.11}, {group: "Carb", grams: 3.5}, {group: "Fiber", grams: 1.4}
                                                  ], 1.45);

let Cebolla: Ingredient          = new Ingredient("Cebolla", "España", "Cadiz", "Vegetable", 40,
                                                  [
                                                    {group: "Prot", grams: 1.1}, {group: "Fat", grams: 0.1}, {group: "Carb", grams: 9}, {group: "Fiber", grams: 1.7}
                                                  ], 2.60);

let Lechuga: Ingredient          = new Ingredient("Lechuga", "España", "Cadiz", "Vegetable", 15,
                                                  [
                                                    {group: "Prot", grams: 1.4}, {group: "Fat", grams: 0.2}, {group: "Carb", grams: 2.9}, {group: "Fiber", grams: 1.3}
                                                  ], 2.83);

let Pimiento: Ingredient         = new Ingredient("Pimiento", "España", "Cadiz", "Vegetable", 37,
                                                  [
                                                    {group: "Prot", grams: 1}, {group: "Fat", grams: 0.4}, {group: "Carb", grams: 6.4}, {group: "Fiber", grams: 1.9}
                                                  ], 3.05);

let Sal: Ingredient              = new Ingredient("Sal", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 0.25);

let Pimienta: Ingredient         = new Ingredient("Pimienta", "España", "Cadiz", "Others", 251,
                                                  [
                                                    {group: "Prot", grams: 10}, {group: "Fat", grams: 3.3}, {group: "Carb", grams: 64}, {group: "Fiber", grams: 25}
                                                  ], 8.9);

let Canela: Ingredient           = new Ingredient("Canela", "España", "Cadiz", "Others", 247,
                                                  [
                                                    {group: "Prot", grams: 4}, {group: "Fat", grams: 1.2}, {group: "Carb", grams: 81}, {group: "Fiber", grams: 54}
                                                  ], 10.3);

let Limon: Ingredient            = new Ingredient("Limon", "España", "Cadiz", "Fruit", 29,
                                                  [
                                                    {group: "Prot", grams: 1.1}, {group: "Fat", grams: 0.3}, {group: "Carb", grams: 9}, {group: "Fiber", grams: 1.2}
                                                  ], 0.2);

let Oregano: Ingredient          = new Ingredient("Oregano", "Italia", "Roma", "Others", 66,
                                                  [
                                                    {group: "Prot", grams: 2.2}, {group: "Fat", grams: 2}, {group: "Carb", grams: 6.4}, {group: "Fiber", grams: 0}
                                                  ], 12.5);

let Albahaca: Ingredient         = new Ingredient("Albahaca", "Italia", "Roma", "Others", 25,
                                                  [
                                                    {group: "Prot", grams: 2.5}, {group: "Fat", grams: 0.6}, {group: "Carb", grams: 0.44}, {group: "Fiber", grams: 3.9}
                                                  ], 65);

let Perejil: Ingredient          = new Ingredient("Perejil", "España", "Sevilla", "Others", 45,
                                                  [
                                                    {group: "Prot", grams: 3}, {group: "Fat", grams: 1.3}, {group: "Carb", grams: 2.7}, {group: "Fiber", grams: 0}
                                                  ], 39);

let Zanahoria: Ingredient        = new Ingredient("Zanahoria", "España", "Cadiz", "Vegetable", 44,
                                                  [
                                                    {group: "Prot", grams: 0.9}, {group: "Fat", grams: 0.2}, {group: "Carb", grams: 7.3}, {group: "Fiber", grams: 2.9}
                                                  ], 0.7);

let Carne_Molida: Ingredient     = new Ingredient("Carne Molida", "Portugal", "Lisboa", "Meat", 245,
                                                  [
                                                    {group: "Prot", grams: 15.2}, {group: "Fat", grams: 20.5}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 5);

let Aceite_Oliva: Ingredient     = new Ingredient("Aceite de Oliva", "España", "Cadiz", "Others", 900,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 99}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 2.8);

let Ajo: Ingredient              = new Ingredient("Ajo", "España", "Cadiz", "Vegetable", 118,
                                                  [
                                                    {group: "Prot", grams: 5.3}, {group: "Fat", grams: 0.3}, {group: "Carb", grams: 23}, {group: "Fiber", grams: 1.1}
                                                  ], 0.8);

let Champiñones: Ingredient      = new Ingredient("Champiñones", "España", "Vigo", "Vegetable", 33,
                                                  [
                                                    {group: "Prot", grams: 1.9}, {group: "Fat", grams: 0.3}, {group: "Carb", grams: 4}, {group: "Fiber", grams: 2.5}
                                                  ], 5);

let Atun: Ingredient             = new Ingredient("Atun", "España", "Santander", "Fish", 200,
                                                  [
                                                    {group: "Prot", grams: 23}, {group: "Fat", grams: 12}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 34);

let Queso_Rallado: Ingredient    = new Ingredient("Queso Rallado", "España", "Albacete", "Dairy", 422,
                                                  [
                                                    {group: "Prot", grams: 40}, {group: "Fat", grams: 28.9}, {group: "Carb", grams: 0.5}, {group: "Fiber", grams: 0}
                                                  ], 8.6);

let Pan_Hamburguesa: Ingredient  = new Ingredient("Pan de Hamburguesa", "España", "Mostoles", "Grain", 277,
                                                  [
                                                    {group: "Prot", grams: 7.8}, {group: "Fat", grams: 1}, {group: "Carb", grams: 58}, {group: "Fiber", grams: 2.2}
                                                  ], 2.24);

let Leche: Ingredient            = new Ingredient("Leche", "España", "Oviedo", "Dairy", 63,
                                                  [
                                                    {group: "Prot", grams: 3.1}, {group: "Fat", grams: 3.5}, {group: "Carb", grams: 4.7}, {group: "Fiber", grams: 0}
                                                  ], 11.39);

let Vainilla: Ingredient         = new Ingredient("Vainilla", "Marruecos", "Casablanca", "Others", 52,
                                                  [
                                                    {group: "Prot", grams: 0.1}, {group: "Fat", grams: 0.06}, {group: "Carb", grams: 12.7}, {group: "Fiber", grams: 0}
                                                  ], 60);

let Azucar: Ingredient           = new Ingredient("Azucar", "España", "Almeria", "Others", 387,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 100}, {group: "Fiber", grams: 0}
                                                  ], 0.89);

let Harina: Ingredient           = new Ingredient("Harina", "España", "Huelva", "Grain", 369,
                                                  [
                                                    {group: "Prot", grams: 8.7}, {group: "Fat", grams: 2.7}, {group: "Carb", grams: 76}, {group: "Fiber", grams: 3}
                                                  ], 0.53);

let Chocolate: Ingredient        = new Ingredient("Chocolate", "España", "Barcelona", "Grain", 553,
                                                  [
                                                    {group: "Prot", grams: 8.4}, {group: "Fat", grams: 31}, {group: "Carb", grams: 60}, {group: "Fiber", grams: 0}
                                                  ], 7);


let Mantequilla: Ingredient      = new Ingredient("Mantequilla", "España", "Barcelona", "Dairy", 749,
                                                  [
                                                    {group: "Prot", grams: 0.6}, {group: "Fat", grams: 83}, {group: "Carb", grams: 1}, {group: "Fiber", grams: 0}
                                                  ], 1.7);

let Manzana: Ingredient          = new Ingredient("Manzana", "España", "Cadiz", "Fruit", 61,
                                                  [
                                                    {group: "Prot", grams: 0.3}, {group: "Fat", grams: 0}, {group: "Carb", grams: 12}, {group: "Fiber", grams: 2}
                                                  ], 3.15);

let Nata: Ingredient             = new Ingredient("Nata", "España", "Cadiz", "Dairy", 448,
                                                  [
                                                    {group: "Prot", grams: 1.5}, {group: "Fat", grams: 48.2}, {group: "Carb", grams: 2}, {group: "Fiber", grams: 0}
                                                  ], 3.45);

let Hielo: Ingredient            = new Ingredient("Hielo", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 0.6);

let Galletas: Ingredient         = new Ingredient("Galleta", "España", "Almeria", "Grain", 450,
                                                  [
                                                    {group: "Prot", grams: 7}, {group: "Fat", grams: 14}, {group: "Carb", grams: 71.5}, {group: "Fiber", grams: 5}
                                                  ], 1.4);

let Vinagre: Ingredient          = new Ingredient("Vinagre", "España", "Barcelona", "Others", 4,
                                                  [
                                                    {group: "Prot", grams: 0.4}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0.6}, {group: "Fiber", grams: 0}
                                                  ], 0.5);


let Col: Ingredient              = new Ingredient("Hielo", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 0.6);

let Setas: Ingredient            = new Ingredient("Hielo", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 0.6);

/*
let Guindilla: Ingredient        = new Ingredient();
let Vino: Ingredient             = new Ingredient();
let Laurel: Ingredient           = new Ingredient();
let Lomo: Ingredient             = new Ingredient();
let Cafe: Ingredient             = new Ingredient();
let Aguacate: Ingredient         = new Ingredient();
let Mango: Ingredient            = new Ingredient();
let Panceta: Ingredient          = new Ingredient();
let Jamon_Serrano: Ingredient    = new Ingredient();
let Langostino: Ingredient       = new Ingredient();
let Gambas: Ingredient           = new Ingredient();
let Agua: Ingredient             = new Ingredient();
let Coca_Cola: Ingredient        = new Ingredient();
let Fanta_Naranja: Ingredient    = new Ingredient();
let Sprite: Ingredient           = new Ingredient();
let Cerveza: Ingredient          = new Ingredient();
let Comino: Ingredient           = new Ingredient();
let Apio: Ingredient             = new Ingredient();
let Alacaparras: Ingredient      = new Ingredient();
let Rape: Ingredient             = new Ingredient();
let Guisantes: Ingredient        = new Ingredient();
let Mejillones: Ingredient       = new Ingredient();
let Curry: Ingredient            = new Ingredient();
let Azafran: Ingredient          = new Ingredient();
let Tomillo: Ingredient          = new Ingredient();
let Pan_Rallado: Ingredient      = new Ingredient();
let Maicena: Ingredient          = new Ingredient();
let Requeson: Ingredient         = new Ingredient();
let Naranja: Ingredient          = new Ingredient();
*/







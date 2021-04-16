import {Ingredient, FoodCategory} from './ingredient';

export let Arroz: Ingredient            = new Ingredient("Arroz", "China", "Pekin" , "Grain", 381,
                                                  [
                                                    {group: "Prot" , grams: 7}, {group: "Fat", grams: 0.9}, {group: "Carb", grams: 86}, {group: "Fiber", grams: 0.2}   
                                                  ], 0.83);

export let Base_Pizza: Ingredient       = new Ingredient("Base_Pizza", "Italia", "Roma" , "Grain", 273,
                                                  [
                                                    {group: "Prot" , grams: 6.7}, {group: "Fat", grams: 7.4}, {group: "Carb", grams: 43.9}, {group: "Fiber", grams: 2.2}   
                                                  ], 1.75);

export let Spaguetti: Ingredient        = new Ingredient("Spaguetti", "Italia", "Verona", "Grain", 369, 
                                                  [
                                                    {group: "Prot", grams: 12}, {group: "Fat", grams: 0.5}, {group: "Carb", grams: 74.1}, {group: "Fiber", grams: 4}
                                                  ], 0.75);
                                                  
export let Ternera: Ingredient          = new Ingredient("Ternera", "Polonia", "Varsovia", "Meat", 250, 
                                                  [
                                                    {group: "Prot", grams: 26}, {group: "Fat", grams: 15}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 3.30);

export let Pollo: Ingredient            = new Ingredient("Pollo", "Alemania", "Schlüchtern" , "Meat", 167,
                                                  [
                                                    {group: "Prot" , grams: 20}, {group: "Fat", grams: 9.7}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}   
                                                  ], 3.86);

export let Papa_Hervida: Ingredient     = new Ingredient("Papa Cocida",  "España", "Vigo", "Vegetable", 77, 
                                                  [
                                                    {group: "Prot", grams: 2}, {group: "Fat", grams: 0.1}, {group: "Carb", grams: 17}, {group: "Fiber", grams: 2.2}
                                                  ], 0.70);

export let Merluza: Ingredient          = new Ingredient("Merluza",  "España", "Cadiz", "Fish", 89,
                                                  [
                                                    {group: "Prot", grams: 15.9}, {group: "Fat", grams: 0.1}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 38);

export let Papas_Fritas: Ingredient     = new Ingredient("Papas Fritas",  "Portugal", "Lisboa", "Vegetable", 312,
                                                  [
                                                    {group: "Prot", grams: 6.5}, {group: "Fat", grams: 15}, {group: "Carb", grams: 41}, {group: "Fiber", grams: 3.6}
                                                  ], 5.6);

export let Huevo: Ingredient            = new Ingredient("Huevo",  "España", "Cadiz", "Others", 155,
                                                  [
                                                    {group: "Prot", grams: 13}, {group: "Fat", grams: 11}, {group: "Carb", grams: 1.1}, {group: "Fiber", grams: 0}
                                                  ], 3.09);

export let Tomate: Ingredient           = new Ingredient("Tomate",  "España", "Cadiz", "Fruit", 22,
                                                  [
                                                    {group: "Prot", grams: 1}, {group: "Fat", grams: 0.11}, {group: "Carb", grams: 3.5}, {group: "Fiber", grams: 1.4}
                                                  ], 1.45);

export let Cebolla: Ingredient          = new Ingredient("Cebolla", "España", "Cadiz", "Vegetable", 40,
                                                  [
                                                    {group: "Prot", grams: 1.1}, {group: "Fat", grams: 0.1}, {group: "Carb", grams: 9}, {group: "Fiber", grams: 1.7}
                                                  ], 2.60);

export let Lechuga: Ingredient          = new Ingredient("Lechuga", "España", "Cadiz", "Vegetable", 15,
                                                  [
                                                    {group: "Prot", grams: 1.4}, {group: "Fat", grams: 0.2}, {group: "Carb", grams: 2.9}, {group: "Fiber", grams: 1.3}
                                                  ], 2.83);

export let Pimiento: Ingredient         = new Ingredient("Pimiento", "España", "Cadiz", "Vegetable", 37,
                                                  [
                                                    {group: "Prot", grams: 1}, {group: "Fat", grams: 0.4}, {group: "Carb", grams: 6.4}, {group: "Fiber", grams: 1.9}
                                                  ], 3.05);

export let Sal: Ingredient              = new Ingredient("Sal", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 0.25);

export let Pimienta: Ingredient         = new Ingredient("Pimienta", "España", "Cadiz", "Others", 251,
                                                  [
                                                    {group: "Prot", grams: 10}, {group: "Fat", grams: 3.3}, {group: "Carb", grams: 64}, {group: "Fiber", grams: 25}
                                                  ], 8.9);

export let Canela: Ingredient           = new Ingredient("Canela", "España", "Cadiz", "Others", 247,
                                                  [
                                                    {group: "Prot", grams: 4}, {group: "Fat", grams: 1.2}, {group: "Carb", grams: 81}, {group: "Fiber", grams: 54}
                                                  ], 10.3);

export let Limon: Ingredient            = new Ingredient("Limon", "España", "Cadiz", "Fruit", 29,
                                                  [
                                                    {group: "Prot", grams: 1.1}, {group: "Fat", grams: 0.3}, {group: "Carb", grams: 9}, {group: "Fiber", grams: 1.2}
                                                  ], 0.2);

export let Oregano: Ingredient          = new Ingredient("Oregano", "Italia", "Roma", "Others", 66,
                                                  [
                                                    {group: "Prot", grams: 2.2}, {group: "Fat", grams: 2}, {group: "Carb", grams: 6.4}, {group: "Fiber", grams: 0}
                                                  ], 12.5);

export let Albahaca: Ingredient         = new Ingredient("Albahaca", "Italia", "Roma", "Others", 25,
                                                  [
                                                    {group: "Prot", grams: 2.5}, {group: "Fat", grams: 0.6}, {group: "Carb", grams: 0.44}, {group: "Fiber", grams: 3.9}
                                                  ], 65);

export let Perejil: Ingredient          = new Ingredient("Perejil", "España", "Sevilla", "Others", 45,
                                                  [
                                                    {group: "Prot", grams: 3}, {group: "Fat", grams: 1.3}, {group: "Carb", grams: 2.7}, {group: "Fiber", grams: 0}
                                                  ], 39);

export let Zanahoria: Ingredient        = new Ingredient("Zanahoria", "España", "Cadiz", "Vegetable", 44,
                                                  [
                                                    {group: "Prot", grams: 0.9}, {group: "Fat", grams: 0.2}, {group: "Carb", grams: 7.3}, {group: "Fiber", grams: 2.9}
                                                  ], 0.7);

export let Carne_Molida: Ingredient     = new Ingredient("Carne Molida", "Portugal", "Lisboa", "Meat", 245,
                                                  [
                                                    {group: "Prot", grams: 15.2}, {group: "Fat", grams: 20.5}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 5);

export let Aceite_Oliva: Ingredient     = new Ingredient("Aceite de Oliva", "España", "Cadiz", "Others", 900,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 99}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 2.8);

export let Ajo: Ingredient              = new Ingredient("Ajo", "España", "Cadiz", "Vegetable", 118,
                                                  [
                                                    {group: "Prot", grams: 5.3}, {group: "Fat", grams: 0.3}, {group: "Carb", grams: 23}, {group: "Fiber", grams: 1.1}
                                                  ], 0.8);

export let Champiñones: Ingredient      = new Ingredient("Champiñones", "España", "Vigo", "Vegetable", 33,
                                                  [
                                                    {group: "Prot", grams: 1.9}, {group: "Fat", grams: 0.3}, {group: "Carb", grams: 4}, {group: "Fiber", grams: 2.5}
                                                  ], 5);

export let Atun: Ingredient             = new Ingredient("Atun", "España", "Santander", "Fish", 200,
                                                  [
                                                    {group: "Prot", grams: 23}, {group: "Fat", grams: 12}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 34);

export let Queso_Rallado: Ingredient    = new Ingredient("Queso Rallado", "España", "Albacete", "Dairy", 422,
                                                  [
                                                    {group: "Prot", grams: 40}, {group: "Fat", grams: 28.9}, {group: "Carb", grams: 0.5}, {group: "Fiber", grams: 0}
                                                  ], 8.6);

export let Pan_Hamburguesa: Ingredient  = new Ingredient("Pan de Hamburguesa", "España", "Mostoles", "Grain", 277,
                                                  [
                                                    {group: "Prot", grams: 7.8}, {group: "Fat", grams: 1}, {group: "Carb", grams: 58}, {group: "Fiber", grams: 2.2}
                                                  ], 2.24);

export let Leche: Ingredient            = new Ingredient("Leche", "España", "Oviedo", "Dairy", 63,
                                                  [
                                                    {group: "Prot", grams: 3.1}, {group: "Fat", grams: 3.5}, {group: "Carb", grams: 4.7}, {group: "Fiber", grams: 0}
                                                  ], 11.39);

export let Vainilla: Ingredient         = new Ingredient("Vainilla", "Marruecos", "Casablanca", "Others", 52,
                                                  [
                                                    {group: "Prot", grams: 0.1}, {group: "Fat", grams: 0.06}, {group: "Carb", grams: 12.7}, {group: "Fiber", grams: 0}
                                                  ], 60);

export let Azucar: Ingredient           = new Ingredient("Azucar", "España", "Almeria", "Others", 387,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 100}, {group: "Fiber", grams: 0}
                                                  ], 0.89);

export let Harina: Ingredient           = new Ingredient("Harina", "España", "Huelva", "Grain", 369,
                                                  [
                                                    {group: "Prot", grams: 8.7}, {group: "Fat", grams: 2.7}, {group: "Carb", grams: 76}, {group: "Fiber", grams: 3}
                                                  ], 0.53);

export let Chocolate: Ingredient        = new Ingredient("Chocolate", "España", "Barcelona", "Grain", 553,
                                                  [
                                                    {group: "Prot", grams: 8.4}, {group: "Fat", grams: 31}, {group: "Carb", grams: 60}, {group: "Fiber", grams: 0}
                                                  ], 7);

export let Mantequilla: Ingredient      = new Ingredient("Mantequilla", "España", "Barcelona", "Dairy", 749,
                                                  [
                                                    {group: "Prot", grams: 0.6}, {group: "Fat", grams: 83}, {group: "Carb", grams: 1}, {group: "Fiber", grams: 0}
                                                  ], 1.7);

export let Manzana: Ingredient          = new Ingredient("Manzana", "España", "Cadiz", "Fruit", 61,
                                                  [
                                                    {group: "Prot", grams: 0.3}, {group: "Fat", grams: 0}, {group: "Carb", grams: 12}, {group: "Fiber", grams: 2}
                                                  ], 3.15);

export let Nata: Ingredient             = new Ingredient("Nata", "España", "Cadiz", "Dairy", 448,
                                                  [
                                                    {group: "Prot", grams: 1.5}, {group: "Fat", grams: 48.2}, {group: "Carb", grams: 2}, {group: "Fiber", grams: 0}
                                                  ], 3.45);

export let Hielo: Ingredient            = new Ingredient("Hielo", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 0.6);

export let Galletas: Ingredient         = new Ingredient("Galleta", "España", "Almeria", "Grain", 450,
                                                  [
                                                    {group: "Prot", grams: 7}, {group: "Fat", grams: 14}, {group: "Carb", grams: 71.5}, {group: "Fiber", grams: 5}
                                                  ], 1.4);

export let Vinagre: Ingredient          = new Ingredient("Vinagre", "España", "Barcelona", "Others", 4,
                                                  [
                                                    {group: "Prot", grams: 0.4}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0.6}, {group: "Fiber", grams: 0}
                                                  ], 0.5);

export let Col: Ingredient              = new Ingredient("Col", "España", "Cadiz", "Vegetable", 33,
                                                  [
                                                    {group: "Prot", grams: 1.7}, {group: "Fat", grams: 0.3}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 1}
                                                  ], 0.6);

export let Setas: Ingredient            = new Ingredient("Setas", "España", "Cadiz", "Vegetable", 31,
                                                  [
                                                    {group: "Prot", grams: 1.8}, {group: "Fat", grams: 0.3}, {group: "Carb", grams: 4}, {group: "Fiber", grams: 2.5}
                                                  ], 6.45);

export let Guindilla: Ingredient        = new Ingredient("Guindilla", "España", "Cadiz", "Others", 331,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 45);

export let Vino: Ingredient             = new Ingredient("Vino", "España", "Jerez", "Others", 63,
                                                  [
                                                    {group: "Prot", grams: 0.2}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0.2}, {group: "Fiber", grams: 0}
                                                  ], 1.2);

export let Laurel: Ingredient           = new Ingredient("Laurel", "España", "Cadiz", "Vegetable", 300,
                                                  [
                                                    {group: "Prot", grams: 7.6}, {group: "Fat", grams: 8.4}, {group: "Carb", grams: 48.6}, {group: "Fiber", grams: 0}
                                                  ], 22);

export let Lomo: Ingredient             = new Ingredient("Lomo", "España", "Cadiz", "Meat", 152,
                                                  [
                                                    {group: "Prot", grams: 18}, {group: "Fat", grams: 8.85}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 4.5);

export let Cafe: Ingredient             = new Ingredient("Cafe", "Colombia", "Cali", "Grain", 4,
                                                  [
                                                    {group: "Prot", grams: 14}, {group: "Fat", grams: 0}, {group: "Carb", grams: 11}, {group: "Fiber", grams: 0}
                                                  ], 3.1);

/*
let Aguacate: Ingredient         = new Ingredient("Aguacate", "España", "Cadiz", "Fruit", 160,
                                                  [
                                                    {group: "Prot", grams: 1.5}, {group: "Fat", grams: 12}, {group: "Carb", grams: 5.9}, {group: "Fiber", grams: 1.8}
                                                  ], 5.5);

let Mango: Ingredient            = new Ingredient("Mango", "España", "Cadiz", "Fruit", 80,
                                                  [
                                                    {group: "Prot", grams: 0.78}, {group: "Fat", grams: 0.25}, {group: "Carb", grams: 14.9}, {group: "Fiber", grams: 3.1}
                                                  ], 6.2);

let Panceta: Ingredient          = new Ingredient("Panceta", "Italia", "Verona", "Meat", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 3.8);

let Jamon_Serrano: Ingredient    = new Ingredient("Jamon Serrano", "España", "Cadiz", "Meat", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 4.5);

let Langostino: Ingredient       = new Ingredient("Langostino", "España", "Cadiz", "Fish", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 17);

let Gambas: Ingredient           = new Ingredient("Gambas", "España", "Cadiz", "Fish", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 12);

let Agua: Ingredient             = new Ingredient("Agua", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 0.19);

let Comino: Ingredient           = new Ingredient("Comino", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 6.89);

let Apio: Ingredient             = new Ingredient("Apio", "España", "Cadiz", "Vegetable", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 3.4);

let Alacaparras: Ingredient      = new Ingredient("Alacaparras", "España", "Cadiz", "Vegetable", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 8.78);

let Rape: Ingredient             = new Ingredient("Rape", "España", "Cadiz", "Fish", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 12.7);

let Guisantes: Ingredient        = new Ingredient("Guisantes", "España", "Cadiz", "Vegetable", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 2.89);

let Mejillones: Ingredient       = new Ingredient("Mejillones", "España", "Cadiz", "Fish", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 13.45);

let Curry: Ingredient            = new Ingredient("Curry", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 4.78);

let Azafran: Ingredient          = new Ingredient("Azafran", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 23.78);

let Tomillo: Ingredient          = new Ingredient("Tomillo", "España", "Cadiz", "Others", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 4.78);

let Pan_Rallado: Ingredient      = new Ingredient("Pan Rallado", "España", "Cadiz", "Grain", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 2.34);

let Maicena: Ingredient          = new Ingredient("Maicena", "España", "Cadiz", "Grain", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 2.1);

let Requeson: Ingredient         = new Ingredient("Requeson", "España", "Cadiz", "Dairy", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 4.5);

let Naranja: Ingredient          = new Ingredient("Naranja", "España", "Cadiz", "Fruit", 0,
                                                  [
                                                    {group: "Prot", grams: 0}, {group: "Fat", grams: 0}, {group: "Carb", grams: 0}, {group: "Fiber", grams: 0}
                                                  ], 3.20);
*/







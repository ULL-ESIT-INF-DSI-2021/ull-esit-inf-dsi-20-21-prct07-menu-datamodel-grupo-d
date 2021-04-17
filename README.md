# README Practica 7: Diseño de Menu

[![Typescript Project Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-d/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-d/actions/workflows/node.js.yml)
## Participantes

* Yeixon Morales Gonzalez (alu0101134956)
* Noah Sanchez Geurts (alu0101133324)
* Alejandro Martin De Leon (alu0101015941)
* Eric Dürr Sierra (alu0101027005)

## Hacer PULL del repo

```bash
git init 
git remote add [nombre] git@github.com:ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-d.git
git pull [nombre] master
npm install (instalar dependencias)
```

## Lista de Clases

1. Clase Ingredient
  * Crea el objeto Ingrediente, con sus propiedades como:
    * Nombre
    * Pais
    * Ciudad
    * Tipo de Ingrediente -> Fruta, Verdura, Cereal, Lacteo...
    * Calorias
    * Macros -> Proteinas, Grasas, Carbohidratos y Fibra
    * Precio por Kilo

2. Clase Dish
  * Crea el objeto Dish, con sus propiedades como:
    * Nombre
    * Categoria -> Entrante, Primero, Principal y Postre
    * Ingredientes

  * Ingredientes
    * Es un vector de tipo [Ingredient, Number], contiene en cada posicion un ingrediente junto con la cantidad en gramos de dicho ingrediente.

  * Metodos
    * ```totalDishCalories()``` -> Calcula las calorias totales del plato.
    * ```totalDishPrice()``` -> Calcula el precio total del plato.
    * ```showDishIngredients()``` -> Muestra los ingredientes del plato.
    * ```getDishMacro()``` -> Calcula las macros totales del plato.
    * ```dominantIngredientTypeOnDish()``` -> Retorna el tipo de ingrediente mas prodominante en el plato.

3. Clase Menu
  * Crea el objeto Menu, que tiene como unica propiedad un vector de Dish
  * Metodos
    * ```categoryChecker()``` -> Comprueba que el menu contenga al menos 3 categorias diferentes
    * ```addDish()``` -> Añade un plato al menu.
    * ```removeDish()``` -> Elimina un plato del menu.
    * ```totalMenuPrice()``` -> Calcula el precio total del menu.
    * ```totalMenuCalories()``` -> Calcula las calorias totales del menu.
    * ```showMenuDishes()``` -> Muestra los platos del menu.
    * ```getMenuMacro()``` -> Calcula las macros totales del menu.
    * ```showGroupIngredients()``` -> Muestra los grupos de ingrendientes de cada plato.

4. Clase Comanda
  * Se encarga de las funciones de navegacion de la carta
  * Metodos
    * ```promptUser()``` -> Muestra el menu inicial
    * ```selectMenu()``` -> Muestra la informacion del menu seleccionado
    * ```showMenuInfo()``` -> Funcion que se encarga de mostrar la informacion del menu

 

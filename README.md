# README Practica 7: Diseño de Menu

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

## Creacion de rama para cada clase

```bash
git branch [nombre clase]
git checkout [nombre clase]
```

A partir de la rama master tendremos dos ramas, ```develop``` y ```doc```, la primera para la elaboracion del codigo y la segunda para la elaboracion de la documentacion ```(/index.md)```. De la rama develop colgara las ramas de cada clase en las que se trabajara (Ingrendiente, Plato, Menu, Carta, Comanda). La metodolia de trabajo que vamos a seguir, sera la siguiente, primero trabajamos en la rama de nivel mas bajo (Ingrediente), luego mergeamos a develop, una vez mergeado, creamos la rama plato, para asi poder trabajar en la rama Plato, teniendo ya la clase Ingrediente construida, y asi lo haremos con las demas clases de capa superior.

1. Develop -> ```Ingrediente``` -> merge hacia develop
2. Develop -> ```Plato``` -> merge hacia develop
3. Develop -> ```Menu```        -> merge hacia develop
4. Develop -> ```Carta```       -> merge hacia develop
5. Develop -> ```Comanda```     -> merge hacia develop

* Script de package.json para Coveralls: ```"coverage": "nyc npm tests && nyc report --reporter=text-lcov | copveralls && rm -rf .ny_output"```

 

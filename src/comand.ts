import * as carta from './database/carta';
import * as inquirer from 'inquirer';
import {sleep} from 'sleep-ts';
import {Menu} from './menu';
import {Dish} from './dish';

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./src/database/orders.json');
const db = low(adapter);


// ***************************************

/**
 * ## Objetos enum para Inquirer.JS
 * 
 * Los siguientes módulos se plantean de cara a su uso con la herramienta
 * de menús interactivos inquirer.js, son unos enumerados sencillos
 * que representan las opciones a elegir durante la ejecución
 * 
 * Se crean 4 bloques de comando:
 * 
 * - CommandFirstOrder - representa la opciión de selección entre un menú, un plato individual o salir del programa
 * - CommandOrderMenu - Permite optar por cada uno de los menús propuestos, volver al menú anterior o salir del programa
 * - CommandModifyMenu - Permite optar por cada una de las opciones disponibles para el menú seleccionado:
 *    --Añadir un plato
 *    --Retirar un plato
 *    --volver atras
 *    --seleccionar el menú actual
 *    --salir del programa
 * 
 * - ommandIndividualDish - Representa las opciones en cuanto a la selección de un plato individual
 */

enum CommandFirstOrder {
  Carta = "Carta de Menu",
  Dish = "Platos individuales",
  Quit = "Quit"
}

enum CommandOrderMenu {
  Menu_1 = "Menu 1",
  Menu_2 = "Menu 2",
  Menu_3 = "Menu 3",
  Menu_4 = "Menu 4",
  Menu_5 = "Menu 5",
  Menu_6 = "Create Menu",
  Back = "Back",
  Quit = "Quit"
}

enum CommandModifyMenu {
  Add = "Add Dish",
  Rem = "Remove Dish",
  Back = "Back",
  Select = "Select",
  Quit = "Quit"
}

enum CommandIndividualDish {
  Back = "Back",
  Select = "Select",
  Quit = "Quit"
}

// *********************************

/**
 * # Clase Command
 * Esta clase hace de interfaz operativa para la escritura y lectura en la base de datos relativa a la selección de menús del cliente. 
 * 
 * La clase dispone de un atributo privado que representa una lista de menús predefinidos y otro atributo privado que contiene la lista 
 * de alimentos a emplear en la clase para la selección de platos individuales o la creación y modificación de menús
 * 
 * La clase tiene la particularidad de operar con lowdb haciendo uso de una variable global creada en el fichero. Esta variable actúa como 
 * una base de datos a través de la lectura y escritura de un fichero JSON. Gracias a esto la interfaz consigue persistencia. El método saveOnDB
 * es el que se encarga de guardar el menú pasado por parámetro y escribir su información en formato JSON. Este opera seleccionando el menú de entre 
 * la lista de menús filtrando el nombre y creando una instancia vacía de una lista de platos que, en un bucle con callback, será rellenada con la 
 * lista de platos del menú.
 * 
 * Por otro lado la propia clase incorpora métodos para la adición y la eliminación de platos en un menú; y métodos para formatear en texto la información de un menú
 * pasado por parámetro o para mostrar la información de un plato. Estos métodos también estan ligados a la funcionalidad interactiva de inquirer
 * 
 * Al crear un objeto del tipo Command, la interfaz se lanza con promptUser que lanza una instancia de inquirer.
 * 
 */
class Command {
  private Menus: Menu[] = [
    carta.Menu_Ruso, carta.Menu_Italiano, carta.Menu_Occidental, carta.Menu_Extreme, carta.Menu_Kids
  ];

  private Dishes: Dish[] = [
    carta.Arroz_Con_Gambas, carta.Empanaditas, carta.Pasta_Con_Setas, carta.Sopa_De_Langostinos, carta.Spaguetti_Con_Carne,
    carta.Pescado_Con_Pimiento, carta.Pollo_Al_Curry, carta.Lomo_Relleno, carta.Croquetas_De_Pollo, carta.Lomo_A_La_Sal,
    carta.Hamburguesa_Americana, carta.Spaguetti_Carbonara, carta.Pizza_De_Atun, carta.Pizza_De_Jamon_Serrano, carta.Tortilla_De_Papas,
    carta.Isla_Flotante, carta.Torrijas, carta.Pastel_De_Queso, carta.Leño_De_Chocolate, carta.Arroz_Con_Leche, 
  ]

  constructor() {
  }

  saveOnDB(order: Menu): void {
    db.defaults({Menus: []})
    .write()

    //// [ objPlato1,  objPlato2, ... ]
    // let aux: Dish = db.get("Menus").filter({name: "Nombre"});

// Añadir plato a menu (Plato)

    db.get('Menus')
      .push({
        name: order.get_name(),
        platos: [
        ],
        precio: order.totalMenuPrice(),
        id: Math.floor(Math.random() % 100000)
      })
      .write();

    order.dishes.forEach( (dish)=> {
      db.get('Menus')
      .find({name: order.get_name()})
      .get("platos")
      .push({name: dish.name, category: dish.category, calories: dish.totalDishCalories()})
      .write()
    })

  }

  addDish2Menu(order: Menu){
    console.clear();
    this.Dishes.forEach(dish => {
      console.log(dish.category + ": " + dish.name);
    })
    let flag: boolean = false;
    let aux_order: Menu = order;
    inquirer.prompt({ type: "input", name: "dish", message: "Seleccione un plato a añadir:"})
      .then(answers => {
        this.Dishes.forEach(elem => {
          if (elem.name == answers["dish"]) {
            aux_order.addDish(elem);
            flag = true;
          }
        });
        console.clear();
        if(!flag)
          console.log("Plato no encontrado");
        else 
          console.log("Plato Añadido");
        sleep(3000).then(res => {
          this.showMenuInfo(aux_order);
        })
      })
  }

  removeDishFromMenu(order: Menu) {
    console.clear();
    order.dishes.forEach(dish => {
      console.log(dish.category + ": " + dish.name);
    })
    let flag: boolean = false;
    let aux_order: Menu = order;
    inquirer.prompt({ type: "input", name: "dish", message: "Seleccione un plato a eliminar:"})
      .then(answers => {
        order.dishes.forEach(elem => {
          if (elem.name == answers["dish"]) {
            aux_order.removeDish(elem);
            flag = true;
          }
        });
        console.clear();
        if(!flag)
          console.log("Plato no encontrado");
        else 
          console.log("Plato Eliminado");
        sleep(2000).then(res => {
          this.showMenuInfo(aux_order);
        })
      })
  }


  showMenuInfo(order: Menu): void {
    console.clear();
    console.log(order.get_name() + ":\n");
    order.showMenuDishes().forEach((element) => {
      console.log(element);
    });
    console.log("\n * Calorias Totales: " + order.totalMenuCalories());
    console.log("\n * Precio Total: " + order.totalMenuPrice());
    console.log("\n * Composicion nutricional:");
    order.getMenuMacro().forEach(element => {
      console.log(element.group + " => " + element.grams);
    })
    console.log("\n * Grupo de alimentos de cada plato: \n");
    order.showGroupIngredients().forEach(element =>{
      console.log(element);
    })
    console.log("\n");
    inquirer.prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(CommandModifyMenu)
    }).then(answers => {
      let newOrder: Menu = order;
      switch (answers["command"]) {
        case CommandModifyMenu.Add:
          this.addDish2Menu(order);
          break;
        case CommandModifyMenu.Rem:
          this.removeDishFromMenu(order);
          break;
        case CommandModifyMenu.Back:
          this.selectMenu();
          break;
        case CommandModifyMenu.Select:
          console.clear();
          console.log("Selected Menu, Cheers!");
          this.saveOnDB(order)
          break;
      }
    });
  }

  showDishInfo(dish: Dish) {
    console.clear();
    console.log(dish.name + ":\n");
    console.log(dish.showDishIngredients());
    console.log("\n * Calorias Totales: " + dish.totalDishCalories());
    console.log("\n * Precio Total: " + dish.totalDishPrice());
    console.log("\n * Composicion nutricional:");
    dish.getDishMacro().forEach(element => {
      console.log(element.group + " => " + element.grams);
    })
    console.log("\n * Grupo predominante del plato: \n" + dish.dominantIngredientTypeOnDish());
    console.log("\n");
    //-----------------------------------------------
    console.log("\n");
    inquirer.prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(CommandIndividualDish)
    }).then(answers => {
      switch (answers["command"]) {
        case CommandIndividualDish.Back:
          this.showIndividualDishes();
          break;
        case CommandIndividualDish.Select:
          console.clear();
          console.log("Selected Menu, Cheers!");
          let Independent_Menu: Menu = new Menu("Unico Plato",[dish])
          this.saveOnDB(Independent_Menu);
          break;
      }
    });
  }
  selectMenu(): void {
    console.clear();
    inquirer.prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(CommandOrderMenu)
    }).then(answers => {
      switch (answers["command"]) {
        case CommandOrderMenu.Menu_1:
            this.showMenuInfo(this.Menus[0]);
          break;
        case CommandOrderMenu.Menu_2:
            this.showMenuInfo(this.Menus[1]);
          break;
        case CommandOrderMenu.Menu_3:
            this.showMenuInfo(this.Menus[2]);
          break;
        case CommandOrderMenu.Menu_4:
            this.showMenuInfo(this.Menus[3]);
          break;
        case CommandOrderMenu.Menu_5:
            this.showMenuInfo(this.Menus[4]);
          break;
        case CommandOrderMenu.Menu_6:
            this.showMenuInfo(new Menu("Menu Personalizado",[]));
          break;
        case CommandOrderMenu.Back:
            this.promptUser();
          break;
      }
    })
  }

  showIndividualDishes(): void{
    console.clear();
    this.Dishes.forEach(dish => {
      console.log(dish.category + ": " + dish.name);
    })
    console.log("Escribe Back para ir atras")
    inquirer.prompt({ type: "input", name: "dish", message: "Seleccione un plato:"})
      .then(answers => {
        let flag: boolean = false;
        if (answers["dish"] == "Back") {
          console.clear();
          this.promptUser();
        } else {
          this.Dishes.forEach(elem => {
            if (elem.name === answers["dish"]) {
              this.showDishInfo(elem);
              flag = true;
            }
          });
          if(!flag){
            console.log("No existe el plato");
            this.showIndividualDishes();
          }
        }
      })
  }

  promptUser(): void {
    console.clear();
    inquirer.prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(CommandFirstOrder)
    }).then(answers => {
      switch (answers["command"]) {
        case CommandFirstOrder.Carta:
          this.selectMenu();
          break;
        case CommandFirstOrder.Dish:
          this.showIndividualDishes();
          break;
      }
    })
  }

}

let newCommand: Command = new Command()
newCommand.promptUser();
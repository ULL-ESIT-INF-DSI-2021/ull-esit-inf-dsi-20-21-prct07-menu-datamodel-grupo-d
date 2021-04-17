import * as carta from './database/carta';
import * as inquirer from 'inquirer';
import {Menu} from './menu';
import {Dish} from './dish';

// ***************************************

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

enum Selected {
  Back = "Back",
  Select = "Select",
  Quit = "Quit"
}

// *********************************


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
      choices: Object.values(Selected)
    }).then(answers => {
      switch (answers["command"]) {
        case Selected.Back:
          this.selectMenu();
          break;
        case Selected.Select:
          console.clear();
          console.log("Selected Menu, Cheers!");
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
      choices: Object.values(Selected)
    }).then(answers => {
      switch (answers["command"]) {
        case Selected.Back:
          this.showIndividualDishes();
          break;
        case Selected.Select:
          console.clear();
          console.log("Selected Menu, Cheers!");
          break;
      }
    });
  }

  personalizedMenu(): void {

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
            this.personalizedMenu();
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
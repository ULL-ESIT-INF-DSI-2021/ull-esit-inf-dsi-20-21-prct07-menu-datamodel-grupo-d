import * as carta from './carta';
import * as inquirer from 'inquirer';
import {Menu} from './menu';

enum Commands {
  Back = "Back",
  Select = "Select",
  Quit = "Quit"
}

enum CommandMenu {
  Menu_1 = "Menu 1",
  Menu_2 = "Menu 2",
  Menu_3 = "Menu 3",
  Menu_4 = "Menu 4",
  Menu_5 = "Menu 5",
  Menu_6 = "Create Menu",
  Quit = "Quit"
}

class Command {
  private Menus: Menu[] = [
    carta.Menu_Ruso, carta.Menu_Italiano, carta.Menu_Occidental, carta.Menu_Extreme, carta.Menu_Kids
  ];

  constructor() {
  }

  showMenuInfo(order: Menu) {
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
  }

  SelectMenu(order: Menu): void {
    console.clear();
    console.log(order.get_name() + ":\n");
    this.showMenuInfo(order);
    // order.showMenuDishes().forEach((element, index) => {
    //   let Nombre_Plato: string[] = element.split("-");
    //   console.log((index + 1) + " => " + Nombre_Plato[0]);
    // })
    console.log("\n");
    inquirer.prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(Commands)
    }).then(answers => {
      switch (answers["command"]) {
        case Commands.Back:
          this.promptUser();
          break;
        case Commands.Select:
          console.clear();
          console.log("Selected Menu, Cheers!");
          break;
      }
    })
  }

  PersonalizedMenu(): void {

  }

  promptUser(): void {
    console.clear();
    inquirer.prompt({
      type: "list",
      name: "command",
      message: "Choose option",
      choices: Object.values(CommandMenu)
    }).then(answers => {
      switch (answers["command"]) {
        case CommandMenu.Menu_1:
          this.SelectMenu(this.Menus[0]);
          break;
        case CommandMenu.Menu_2:
          this.SelectMenu(this.Menus[1]);
          break;
        case CommandMenu.Menu_3:
          this.SelectMenu(this.Menus[2]);
          break;
        case CommandMenu.Menu_4:
          this.SelectMenu(this.Menus[3]);
          break;
        case CommandMenu.Menu_5:
          this.SelectMenu(this.Menus[4]);
          break;
        case CommandMenu.Menu_6:
          this.PersonalizedMenu();
          break;
      }
    })
  }

}

let newCommand: Command = new Command()
newCommand.promptUser();
import {Arroz, Aceite_Oliva, Cebolla, Tomate, Pimiento, Setas, Gambas, Spaguetti, Langostino,Papa_Hervida, Pimienta, Azucar, Vainilla, Maicena} from './list_ingredients';
import {Harina, Huevo, Agua, Sal, Carne_Molida, Jamon_Serrano, Ajo, Perejil, Vino, Zanahoria, Apio, Col, Albahaca, Alcaparras, Queso_Rallado, Limon, Mantequilla} from './list_ingredients';
import {Pollo, Azafran, Curry, Rape, Laurel, Lomo, Leche, Pan_Rallado, Lechuga, Pan_Hamburguesa, Panceta, Base_Pizza, Oregano, Atun, Papas_Fritas, Galletas, Requeson, Chocolate} from './list_ingredients';
import {Dish} from './dish';
import {Menu} from './menu';

// Entrantes

let Arroz_Con_Gambas = new Dish("Arroz con gambas", "Starter", 
                                 [[Arroz, 350], [Aceite_Oliva, 60], [Cebolla, 20], [Tomate, 200], [Gambas, 250]]
                               );

let Empanaditas = new Dish("Empanaditas", "Starter", 
                            [[Harina, 800], [Aceite_Oliva, 200], [Huevo, 250], [Agua, 100], [Sal, 20],
                             [Carne_Molida, 250], [Jamon_Serrano, 100], [Cebolla, 250], [Ajo, 100], [Perejil, 20], [Vino, 100]
                            ]);

let Pasta_Con_Setas = new Dish("Pasta con setas", "Starter",
                                [[Spaguetti, 250], [Aceite_Oliva, 60], [Setas, 300], [Sal, 20]]
                              );

let Sopa_De_Langostinos = new Dish("Sopa de langostino","Starter",
                                    [[Langostino, 50], [Papa_Hervida, 20], [Spaguetti, 100], [Col, 500],
                                    [Cebolla, 40], [Huevo, 100], [Aceite_Oliva, 150], [Sal, 20]]
                                  );

let Spaguetti_Con_Carne = new Dish("Spaguetti con Carne", "Starter", 
                                    [[Spaguetti, 400], [Carne_Molida, 250], [Aceite_Oliva, 60], [Ajo, 20], [Cebolla, 100], [Zanahoria, 75], [Apio, 50],
                                     [Tomate, 500], [Vino, 100], [Albahaca, 30], [Alcaparras, 50], [Queso_Rallado, 50], [Pimiento, 100], [Sal, 20], [Pimienta, 20]]
                                   );


//1º Plato

let Pescado_Con_Pimiento = new Dish("Pescado con pimiento", "First",
                                     [[Rape, 350], [Cebolla, 25], [Pimiento, 20], [Ajo, 10], [Azafran, 5], [Vino, 60], [Sal, 10]]
                                   );
                                   
let Pollo_Al_Curry = new Dish("Pollo al Curry", "First",
                              [[Pollo, 500], [Cebolla, 100], [Jamon_Serrano, 50], [Azafran, 20], [Curry, 20], [Ajo, 20], [Vino, 175],
                               [Huevo, 50], [Perejil, 20], [Aceite_Oliva, 100], [Sal, 20], [Pimienta, 20]]
                             );

let Lomo_Relleno = new Dish("Lomo Relleno", "First",
                             [[Lomo, 500], [Tomate, 50], [Ajo, 15], [Papa_Hervida, 50], [Aceite_Oliva, 60], [Vino, 25], [Agua, 100]]
                           );

let Croquetas_De_Pollo = new Dish("Croquetas de Pollo", "First",
                                  [[Pollo, 350], [Cebolla, 50], [Laurel, 20], [Huevo, 150], [Aceite_Oliva, 200], [Leche, 500], [Sal, 10], [Pan_Rallado, 75], [Pimienta, 20]]
                                  );

let Lomo_A_La_Sal = new Dish("Lomo a la sal","First",
                              [[Lomo, 1000], [Ajo, 25], [Cebolla, 30], [Aceite_Oliva, 30], [Azafran, 2], [Laurel, 2], [Sal, 15]]
                            );


// 2º Plato

let Hamburguesa_Americana = new Dish("Hamburguesa Americana", "Main",
                                      [[Carne_Molida, 200], [Tomate, 50], [Lechuga, 50], [Huevo, 50], [Aceite_Oliva, 20], [Pan_Hamburguesa, 25], [Panceta, 100]]
                                    );

let Spaguetti_Carbonara = new Dish("Spaguetti Carbonara", "Main",
                                      [[Spaguetti, 200], [Pimienta, 50], [Huevo, 100], [Aceite_Oliva, 20], [Panceta, 100]]
                                    );
                                    
let Pizza_De_Atun = new Dish("Pizza de Atun", "Main",
                             [[Base_Pizza, 200], [Oregano, 50], [Tomate, 100], [Atun, 200], [Cebolla, 100]]
                            );

let Pizza_De_Jamon_Serrano = new Dish("Pizza de Jamon Serrano", "Main",
                            [[Base_Pizza, 200], [Oregano, 50], [Tomate, 100], [Jamon_Serrano, 200], [Cebolla, 100]]
                           );

let Tortilla_De_Papas = new Dish("Tortilla de Papas", "Main",
                       [[Papas_Fritas, 400], [Huevo, 200], [Cebolla, 100], [Aceite_Oliva, 50]]
                     );


// Postres

let Isla_Flotante = new Dish("Isla Flotante", "Dessert",
                              [[Huevo, 400], [Azucar, 350], [Vainilla, 15], [Leche, 150], [Maicena, 50]]
                            );

let Torrijas = new Dish("Torrijas","Dessert",
                         [[Pan_Rallado, 250], [Leche, 300], [Aceite_Oliva, 20], [Azucar, 30]]
                       );

let Pastel_De_Queso = new Dish("Pastel de Queso", "Dessert",
                                [[Huevo, 200], [Azucar, 150], [Galletas, 40], [Leche, 150], [Requeson, 50]]
                              );

let Leño_De_Chocolate = new Dish("Leño de Chocolate","Dessert",
                                  [[Chocolate, 500], [Agua, 20], [Huevo, 125], [Azucar, 250], [Leche, 50], [Mantequilla, 125]]
                                );

let Arroz_Con_Leche = new Dish("Arroz Con Leche", "Dessert",
                              [[Arroz, 300], [Azucar, 75], [Limon, 40], [Leche, 750], [Sal, 10]]
                            );


// Menus

let Menu_Italiano = new Menu([Arroz_Con_Gambas, Lomo_Relleno, Pizza_De_Atun, Pastel_De_Queso]);

let Menu_Ruso = new Menu([Empanaditas, Pollo_Al_Curry, Spaguetti_Carbonara, Torrijas]);

let Menu_Kids = new Menu([Spaguetti_Con_Carne, Lomo_A_La_Sal, Hamburguesa_Americana, Arroz_Con_Leche]);

let Menu_Occidental = new Menu([Sopa_De_Langostinos, Croquetas_De_Pollo, Pizza_De_Jamon_Serrano, Leño_De_Chocolate]);

let Menu_Extreme = new Menu([Pasta_Con_Setas, Pescado_Con_Pimiento, Tortilla_De_Papas, Isla_Flotante]);
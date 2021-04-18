# README Practica 7: Diseño de Menu

<p align="center">
    <a href="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-d/actions/workflows/node.js.yml">
        <img alt="GitHub" src="https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-d/actions/workflows/node.js.yml/badge.svg">
    </a>  
    <a href="https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-d?branch=master">
        <img src="https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-d/badge.svg?branch=master" alt="Coverage Status" />
    </a>
</p>

## Participantes

* Yeixon Morales Gonzalez (alu0101134956)
* Noah Sanchez Geurts (alu0101133324)
* Alejandro Martin De Leon (alu0101015941)
* Eric Dürr Sierra (alu0101027005)


## Introducción 
Se adjunta en este documento el informe relativo a la práctica número 7. En esta práctica por vez primera se propone una tarea de trabajo colaborativo, 
con lo que se pone en práctica el desarrollo dee código mediante todas las herramientas disponibles para ello y se pone a prueba la capacidad de los
participantes para organizarse y emplear el trabajo remoto como una herramienta a su favor.

Se detalla a lo largo de los siguientes apartados tanto la configuración del entorno establecida cómo el desarrollo, de manera adjunta a la [documentación generada](https://ull-esit-inf-dsi-2021.github.io/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-d/), del código que compone las distintas interfaces solicitadas en el ejercicio. 
También se explica brevemete el uso de las herramientas propuestas (inquirer.js y lowdb) a demás del proceso de trabajo colaborativo.

Algunas palabras y frases clave que se pueden identificar con este proyecto son:
- menú alimenticio
- información nutricional
- interfaz de selección por terminal
- cobertura de código
- flujo de trabajo
- YAML
- JSON
- trabajo remoto
- entorno colaborativo
- documentación

## Uso de workflows para  la integración continua y la cobertura de código

Es indispensable establecer la configuración a la que se ajusta el entorno desde el inicio del proyecto, para que
todos los miembros trabajen en las mismas condiciones y bajo los mismos paradigmas. También resulta útil establecer 
los workflows para que desde el principio, todo lo que se añada a la rama principal, se vea sometido a pruebas de
construcción de código, los test de desarrollo y la comprobación de cobertura de código.

Para poder llevar a cabo estas tareas se hace uso de la herramienta interna de la aplicación web de [Git Hub](https://github.com/), 
[Git Hub Actions](https://github.com/features/actions). Mediante esta interfaz de automatización, cada vez que se haga una pull request 
o se haga una actualización en remoto del contenido local se activarán una serie de tareas que se iniciarán en una máquina virtual remota 
totalmente configurable desde un archivo YAML inherente al repositorio que se sitúa bajo la carpeta `.github/workflows`.

En este caso se configuran dos archivos para cada una de las características que se desean cumplir. La primera de ellas consiste en una automatización 
que compile y ejecute los test. Ésta se ha definido en el fichero `node.js.yml` y se encarga de comprobar que los test son construidos y que todos ellos 
pasan al subir el código al repositorio remoto. En caso de que algo falle dentro de este proceso la Git Hub Action fallará notificando dicho fallo en la
interfaz preparada para ello o bien mediante una "Badge" que se añade en esete mismo documento al inicio.

Por otro lado, se debe hacer una evolución práctica del uso de la herramienta de cobertura de código "istanbul" y su posterior subida de resultados a [Coveralls](https://coveralls.io/) (la interfaz que vincula un repositorio remoto y permite la publicación de este análisis de cobertura). Para mejorar este proceso se aplica un automatismo de Actions para ejecutar dicho anális en remoto tras un "push" o una Pull Request. De esta manera se evita tener que estar generando los ficheros de manera local y ejecutando scripts de cada a que se quiera actualizar. La información devuelta por la aplicación web también viene representada por una badge al principio del documento. El fichero donde se especifica la serie de instrucciones que se ejecuta entorno a esta funcionalidad se denomina `coveralls.yml`. Una característica distinta en este "workflow" es la necesidad de emplear un "token" que proporciona la propia interfaz de coveralls para poder localizar el repositorio; en este caso ese "token" debe ser añadido como secreto dentro del propio repositorio en lugar de en un fichero de configuración entre los ficheros del directorio de trabajo.


## Proceso de desarrollo de la jerarquía de clases


<!-- SOLO AQUÏ-->

<!-- -------- -->

## Implementación de inquirer.js y lowdb en la clase Comanda

<!-- SOLO AQUÏ-->
En el desarrollo de la calse Comanda, hemos trabajado con dos modulos, el inquirer.js, el cual nos permitira llevar a cabo el control de un menu por consola; y el lowdb que nos proporciana un mejor manejo de los datos que se generan a la hora de solicitar un menu.

Para empezar instalamos el modulo inquirer.js como dependencia de desarrollo, añadiendolo asi a las dependencias, en el package.json.
Luego lo importamos al fichero comand.ts con un ```import * as inquirer from 'inquirer';``` de esta forma ya podriamos hacer uso de este modulo en el fichero.

Con lo que respecta al modulo lowdb, tenemos que añadir en el fichero estas lineas, para que se pueda trabajar con él:
```ts
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./path/file.json');
const db = low(adapter);
```
Una vez añadidas podemos hacer uso del mismo, el cual esta referenciado por la varaible ```db```.

Para mas informacion ver la documentacion del proyecto en el apartado de la clase Comand
<!-- -------- -->

## Metodología de trabajo colaborativo

De cara a afrontar una experiencia colaborativa se ha tratado de hacer uso de las Pull Request que GitHub ofrece para realizar la fusión de código de una manera más organizada 
y de manera que los alumnos restantes al que subió el código sean los revisores; es de esta manera cómo se logra dividir el trabajo sin que quede inconexo el conocimiento acerca de 
cómo se desarrollan las distintas características del entorno. Es mediante las Pull Request también dónde se previenen los posibles bugs y conflictos que deriven de una mala gestión 
en las ramas o en la división del trabajo colaborativo.  

Por otro lado también se hace uso de liveshare y sesiones en google meet para aplicar un desarrollo de código mediante pair programming y para simplemente establecer ciertas reuniones periódicas donde comentar opiniones y compartir conocimientos relativos al desarrollo del proyecto.


## [Enlace a la documentación generada](https://ull-esit-inf-dsi-2021.github.io/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-d/)
## Referencias

- [documentación oficial de Coveralls](https://docs.coveralls.io/)
- [Repositorio GitHub de lowdb](https://github.com/typicode/lowdb)

## Conclusión 

Hasta una sencilla interfaz de selección de menús puede veerse dificultada por la mala gestión de un entorno colaborativo donde falla la comunicación entre los integrantes. Por eso resulta crucial establecer una base sólida respecto al modelo de contribución del repositorio y respecto a cómo se sincronizan las aportaciones de trabajo al ejercicio práctico. 

En este caso los miembros del grupo han sido capaces de sacar partido a experiencia previa con este tipo de interfaces y establecer una base sólida desde la que partir comunmente, geneerando una jerarquía de ramas que atiende a las dependencias entre las clases que componen el proyecto y buscando la manera de producir el menor volumen de conflictos.

Este proyecto se vería notoriamente mejorado mediante el uso de herramientas de gestión de responsabilidades. Por ejemplo el uso de Git Hub Projects para organizar las tareas, asignarlas y generar isues en base a las mismas hubiera dotado el proceso de desarrollo de una mayor agilidad y una estructura organizativa más presente
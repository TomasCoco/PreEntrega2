// Array con las marcas de autos disponibles:
var marcasDeAutos = ["Nissan", "Ford", "Volkswagen", "Kia"];

// Solicitamos al usuario que elija una opción
var opcion = prompt("Ingresá el número correspondiente a la acción que quieras ejecutar :\n 1. Buscar una marca de auto\n 2. Buscar por año del auto\n 3. Salir");

// Convertir la opción a un número entero
opcion = parseInt(opcion);


// Función para la búsqueda de la marca, y que nos marque en posición del array está:
function buscarMarca(marca) {
  var index = marcasDeAutos.indexOf(marca);
  if (index !== -1) {
    alert("La marca de auto " + marca + " está en la posición " + index + " del array.");
  } else {
    alert("La marca de auto " + marca + " no fue encontrada.");
  }
}


// Función para buscar por año:
function buscarModelo(año) {
 if(añoBuscado === 2023){
        alert("Nissan es 2023");
    }else{
        alert("No hay autos de ese año")
    }
}


// Dependiendo la opción que ingrese el usuario (1, 2 o 3), va a ejecutar diferentes acciones:
switch (opcion) {
  case 1:
    var marcaBuscada = prompt("Ingrese la marca de auto que desea buscar:");
    buscarMarca(marcaBuscada);
    break;
  case 2:
    var añoBuscado = prompt("Ingrese el año de auto que desea buscar:");
    buscarModelo(añoBuscado);
    break;
    case 3:
    alert("Gracias por usar el programa. ¡Hasta luego!");
    break;
  default:
    alert("Opción no válida. Por favor, elige una opción válida.");
    break;
}


// Tomas Cococcioni


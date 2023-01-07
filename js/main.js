// Declaro el conjunto de arrays donde se guardaran los datos del programa
const clientes = [];
const equipos = [];
const listaDePrecios = [];

// Creo los contructores para los objetos
class Cliente {
  constructor(nombre, apellido, direccion, localidad, telefono) {
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.direccion = direccion.toUpperCase();
    this.localidad = localidad.toUpperCase();
    this.telefono = telefono;
  }
}

class Equipo {
  constructor(
    marca,
    modelo,
    potencia,
    tecnologia,
    tipo,
    refrigerante,
    condicion
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.tecnologia = tecnologia;
    this.tipo = tipo;
    this.refrigerante = refrigerante;
    this.condicion = condicion;
  }
}

/* class ListaPrecios {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Creo una lista de precios con nombres y precios en un array.
listaDePrecios.push(new ListaPrecios("Caño 1/4", 950));
listaDePrecios.push(new ListaPrecios("Caño 3/8", 1200));
listaDePrecios.push(new ListaPrecios("Caño 1/2", 1500));
listaDePrecios.push(new ListaPrecios("Caño 5/8", 1750));
listaDePrecios.push(new ListaPrecios("Caño 3/4", 2250));
listaDePrecios.push(new ListaPrecios("Aislante 1/4", 172));
listaDePrecios.push(new ListaPrecios("Aislante 3/8", 187));
listaDePrecios.push(new ListaPrecios("Aislante 1/2", 208));
listaDePrecios.push(new ListaPrecios("Aislante 5/8", 226));
listaDePrecios.push(new ListaPrecios("Aislante 3/4", 274));
listaDePrecios.push(new ListaPrecios("Cable 3 x 1.5mm", 95));
listaDePrecios.push(new ListaPrecios("Cable 3 x 2.5mm", 195));
listaDePrecios.push(new ListaPrecios("Cable 5 x 1.5mm", 180));
listaDePrecios.push(new ListaPrecios("Cable 5 x 2.5mm", 280));
listaDePrecios.push(new ListaPrecios("Mensula h/4500", 900));
listaDePrecios.push(new ListaPrecios("Mensula h/6000", 1610));
listaDePrecios.push(new ListaPrecios("Pata mensula", 170));
listaDePrecios.push(new ListaPrecios("Pata piso", 185));
listaDePrecios.push(new ListaPrecios("Manguera Cristal 5/8", 85));
listaDePrecios.push(new ListaPrecios("Cinta s/adeshivo", 205));
listaDePrecios.push(new ListaPrecios("Kit tornillos", 175));
listaDePrecios.push(new ListaPrecios("Aro embellecedor", 250));

 */ // console.log(listaDePrecios[0].precio);
// console.log(listaDePrecios[4].precio);
// console.log(listaDePrecios.length);

// traigo el formulario para capturar los datos 
const formulario = document.getElementById("form");
// Capturo los datos del cliente y del equipo y los muestro por consola.
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  // Obtener los valores del formulario
  const nombre = document.getElementById("nombreCliente").value,
    apellido = document.getElementById("apellidoCliente").value,
    direccion = document.getElementById("direccionCliente").value,
    localidad = document.getElementById("localidadCliente").value,
    telefono = document.getElementById("telefonoCliente").value;

  const nuevoCliente = new Cliente(
    nombre,
    apellido,
    direccion,
    localidad,
    telefono
  );

  const marca = document.getElementById("marca").value,
    modelo = document.getElementById("modelo").value,
    potencia = document.querySelector("#potencia").value,
    tipo = document.querySelector("#tipo").value,
    tecnologia = document.querySelector("#tecnologia").value,
    refrigerante = document.querySelector("#refrigerante").value,
    condicion = document.querySelector("#condicion").value;
  
  const nuevoEquipo = new Equipo(
    marca,
    modelo,
    potencia,
    tecnologia,
    tipo,
    refrigerante,
    condicion
  );
  
  clientes.push(nuevoCliente);
  equipos.push(nuevoEquipo);
  console.log(clientes);
  console.log(equipos);
  

});




// Pido al usuario que ingrese los productos a calcular.
/* 
class ProductosIngresados {
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}

const productos = [];
const cantidades = [];
let cantidad = 3;

 */// Si desea probar el programa con distinta cantidad de productos cambie el valor de let cantidad.

// Pido al usuario que ingrese los productos a calcular.
/* alert("a continuación ingrese los productos necesarios para la instalación");




do {
  let productoIngresado = prompt("Ingresar Producto a calcular:");
  let cantidadIngresada = parseFloat(prompt("Ingresar Cantidad del producto:"));
  const prodEnc = listaDePrecios.find(
    (prod) => prod.nombre === productoIngresado
  );
  productos.push(prodEnc);
  cantidades.push(cantidadIngresada);
  console.log("vuelta " + productos.length);
} while (productos.length != cantidad);





// Muestro en consola los datos ingresados
console.log("Productos ingresados: " + productos);
console.log("Cantidades ingresadas: " + cantidades);
console.log("Cantidad de Productos ingresados: " + productos.length);

// ====================================================================================================================================================================

console.log(
  "no está haciendo lo siguiente:\n Busca en la lista de precios, el precio del producto ingresado y lo carga en el array precioProducto. "
);
// Busca el precio del producto ingresado en la lista de precios y lo carga en el array precioProducto.
let precioProducto = [];
// Los valores dentro del array los deberia sumar atravez del método .reduce
for (let i = 0; i < listaDePrecios.length; i++) {
  if (listaDePrecios[i].nombre === productos) {
    precioProducto.push(listaDePrecios[i].precio);
    break;
  }
}
console.log(precioProducto);
console.log("precioProducto es de tipo: " + typeof precioProducto);
parseFloat(listaDePrecios.precio);
// ------------------------------------------------------------------
// Calcula el costo total multiplicando el precio por la cantidad
// let costoTotal = parseFloat(precioProducto) * cantidades;

// Muestra el costo total en la consola
// console.log("El costo total es: " + costoTotal);

// ------------------------------------------------------------------

console.log("Gracias por utilizar nuestro sistema!!!");

 */
// Todos los console.log son pruebas que fui haciendo para buscar dónde está el problema, aparentemente nunca se carga el array precioProducto y no se porqué.
// Todo el código que está comentado es para poder probar solo la programación que no me esta respondiendo, luego se descomenta todo.

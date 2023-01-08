const listaDePrecios = []; //LINEA EXISTENTE
const materiales = [];     //LINEA EXISTENTE
let observaciones;         //LINEA EXISTENTE

class ListaPrecios {
                           //CODIGO EXISTENTE
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class MaterialesIngresados {
                           //CODIGO EXISTENTE
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}

// Creo una lista de precios con nombres y precios en un array. LISTA EXISTENTE
listaDePrecios.push(new ListaPrecios("Caño 1/4 y 3/8", 2150));
listaDePrecios.push(new ListaPrecios("Caño 1/4 y 1/2", 2450));
listaDePrecios.push(new ListaPrecios("Caño 1/4 y 5/8", 2700));
listaDePrecios.push(new ListaPrecios("Caño 3/8 y 5/8", 2950));
listaDePrecios.push(new ListaPrecios("Caño 3/8 y 3/4", 3450));
listaDePrecios.push(new ListaPrecios("Aislante 1/4 y 3/8", 359));
listaDePrecios.push(new ListaPrecios("Aislante 1/4 y 1/2", 380));
listaDePrecios.push(new ListaPrecios("Aislante 1/4 y 5/8", 398));
listaDePrecios.push(new ListaPrecios("Aislante 3/8 y 5/8", 413));
listaDePrecios.push(new ListaPrecios("Aislante 3/8 y 3/4", 461));
listaDePrecios.push(new ListaPrecios("Cable 3 x 1.5mm", 95));
listaDePrecios.push(new ListaPrecios("Cable 3 x 2.5mm", 195));
listaDePrecios.push(new ListaPrecios("Cable 5 x 1.5mm", 180));
listaDePrecios.push(new ListaPrecios("Cable 5 x 2.5mm", 280));
listaDePrecios.push(new ListaPrecios("Manguera Cristal 5/8", 85));
listaDePrecios.push(new ListaPrecios("Mensula h/4500", 900));
listaDePrecios.push(new ListaPrecios("Mensula h/6000", 1610));
listaDePrecios.push(new ListaPrecios("Pata mensula", 170));
listaDePrecios.push(new ListaPrecios("Pata piso", 185));
listaDePrecios.push(new ListaPrecios("Tarugos de 6 y 10", 175));
listaDePrecios.push(new ListaPrecios("Tarugos de 8 y 12", 215));
listaDePrecios.push(new ListaPrecios("Cinta Beige", 205));
listaDePrecios.push(new ListaPrecios("Cinta Blanca", 205));
listaDePrecios.push(new ListaPrecios("Cinta Gris", 205));
listaDePrecios.push(new ListaPrecios("Cinta Marrón", 205));
listaDePrecios.push(new ListaPrecios("Cinta Morada", 205));
listaDePrecios.push(new ListaPrecios("Aro embellecedor", 250));

// traigo el formulario para capturar los datos
const formulario = document.getElementById("form");
// Capturo los datos del cliente y del equipo y los muestro por consola.
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Capturo datos de materiales del formulario
  const nombre = [
    document.getElementById("canios").value,
    document.getElementById("aislantes").value,
    document.getElementById("cable").value,
    document.getElementById("manguera").value,
    document.getElementById("mensula").value,
    document.getElementById("tacos").value,
    document.getElementById("tornillos").value,
    document.getElementById("colorCinta").value,
    document.getElementById("colorEmb").value,
  ];
  const cantidad = [
    document.getElementById("longCanios").value,
    document.getElementById("longAisl").value,
    document.getElementById("longCable").value,
    document.getElementById("longMC").value,
    document.getElementById("cantMens").value,
    document.getElementById("cantTacos").value,
    document.getElementById("cantTorn").value,
    document.getElementById("cantCinta").value,
    document.getElementById("cantEmb").value,
  ];

  // Capturo datos de observaciones del formulario
  const obs = document.getElementById("observaciones");

  const listaDeMateriales = new MaterialesIngresados(nombre, cantidad);

  // Guardo datos de materiales y observaciones en variables
  materiales.push(listaDeMateriales);
  console.log(materiales);
  observaciones = obs.value;
  console.log(observaciones);
});
/* const productos = [];
const cantidades = [];
let cantidad = 3;

// Si desea probar el programa con distinta cantidad de productos cambie el valor de let cantidad.

// Pido al usuario que ingrese los productos a calcular.
alert("a continuación ingrese los productos necesarios para la instalación");

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
console.log("-----------------------------------------------------");

console.log(
  "no está haciendo lo siguiente:\n Busca en la lista de precios, el precio del producto ingresado y lo carga en el array precioProducto. "
);
// Busca el precio del producto ingresado en la lista de precios y lo carga en el array precioProducto.
let precioProducto = [];

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
 */

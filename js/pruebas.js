// Buscar el precio del producto ingresado en la lista de precios y lo carga en el array precioProducto.
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

// Todos los console.log son pruebas que fui haciendo para buscar dónde está el problema, aparentemente nunca se carga el array precioProducto y no se porqué.
// Todo el código que está comentado es para poder probar solo la programación que no me esta respondiendo, luego se descomenta todo.

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

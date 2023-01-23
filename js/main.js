

// Declaro el conjunto de arrays donde se guardaran los datos del programa
const listaDePrecios = [];
const clientes = [];
const equipos = [];
const matSelect = [];
let observaciones;
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

class ListaPrecios {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class MaterialesIngresados {
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}

// Imprimo la fecha actual en el formulario
const DateTime = luxon.DateTime;
const dt = DateTime.local();
const hoy = document.getElementById("today");
hoy.innerHTML = `<span class = "fecha">Fecha: ${dt.toLocaleString(
  DateTime.DATE_SHORT
)}</span>`;

/* // Creo una lista de precios con nombres y precios en un array.
listaDePrecios.push(new ListaPrecios("Caño 1/4 y 3/8", 5626));
listaDePrecios.push(new ListaPrecios("Caño 1/4 y 1/2", 6632));
listaDePrecios.push(new ListaPrecios("Caño 1/4 y 5/8", 7787));
listaDePrecios.push(new ListaPrecios("Caño 3/8 y 5/8", 9091));
listaDePrecios.push(new ListaPrecios("Caño 3/8 y 3/4", 10246));
listaDePrecios.push(new ListaPrecios("Aislante 1/4 y 3/8", 745));
listaDePrecios.push(new ListaPrecios("Aislante 1/4 y 1/2", 861));
listaDePrecios.push(new ListaPrecios("Aislante 1/4 y 5/8", 932));
listaDePrecios.push(new ListaPrecios("Aislante 3/8 y 5/8", 1011));
listaDePrecios.push(new ListaPrecios("Aislante 3/8 y 3/4", 1098));
listaDePrecios.push(new ListaPrecios("Cable 3 x 1,5mm", 185));
listaDePrecios.push(new ListaPrecios("Cable 3 x 2,5mm", 285));
listaDePrecios.push(new ListaPrecios("Cable 5 x 1,5mm", 290));
listaDePrecios.push(new ListaPrecios("Cable 5 x 2,5mm", 444));
listaDePrecios.push(new ListaPrecios("Manguera Cristal 5/8", 150));
listaDePrecios.push(new ListaPrecios("Mensula h/4500", 1986));
listaDePrecios.push(new ListaPrecios("Mensula h/6000", 3845));
listaDePrecios.push(new ListaPrecios("Pata mensula", 301));
listaDePrecios.push(new ListaPrecios("Pata piso", 322));
listaDePrecios.push(new ListaPrecios("Tarugos de 6 y 10", 292));
listaDePrecios.push(new ListaPrecios("Tarugos de 8 y 12", 315));
listaDePrecios.push(new ListaPrecios("Cinta Beige", 616));
listaDePrecios.push(new ListaPrecios("Cinta Blanca", 616));
listaDePrecios.push(new ListaPrecios("Cinta Gris", 616));
listaDePrecios.push(new ListaPrecios("Cinta Marrón", 616));
listaDePrecios.push(new ListaPrecios("Cinta Morada", 616));
listaDePrecios.push(new ListaPrecios("Aro Beige", 105));
listaDePrecios.push(new ListaPrecios("Aro Blanco", 105));
listaDePrecios.push(new ListaPrecios("Aro Gris", 105));
listaDePrecios.push(new ListaPrecios("Aro Marrón", 105));
listaDePrecios.push(new ListaPrecios("Aro Morado", 105));
 */
// traigo una lista de precios externa con nombres y precios en un json.
fetch("/materiales.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      listaDePrecios.push(new ListaPrecios(producto.nombre, producto.precio));
    });
    console.log(listaDePrecios);
  });
// traigo el formulario para capturar los datos
const formulario = document.getElementById("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  // capturo los datos del cliente del formulario
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

  // capturo los datos del equipo del formulario
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

  // Declaro constantes para los materiales
  const canios = {},
    aislante = {},
    cable = {},
    manguera = {},
    mensula = {},
    tacos = {},
    tornillos = {},
    cinta = {},
    aro = {};

  // Capturo datos de materiales del formulario
  canios.material = document.getElementById("canios").value;
  canios.cantidad = document.getElementById("longCanios").value;
  aislante.material = document.getElementById("aislantes").value;
  aislante.cantidad = document.getElementById("longAisl").value;
  cable.material = document.getElementById("cable").value;
  cable.cantidad = document.getElementById("longCable").value;
  manguera.material = document.getElementById("manguera").value;
  manguera.cantidad = document.getElementById("longMC").value;
  mensula.material = document.getElementById("mensula").value;
  mensula.cantidad = document.getElementById("cantMens").value;
  tacos.material = document.getElementById("tacos").value;
  tacos.cantidad = document.getElementById("cantTacos").value;
  tornillos.material = document.getElementById("tornillos").value;
  tornillos.cantidad = document.getElementById("cantTorn").value;
  cinta.material = document.getElementById("colorCinta").value;
  cinta.cantidad = document.getElementById("cantCinta").value;
  aro.material = document.getElementById("colorEmb").value;
  aro.cantidad = document.getElementById("cantEmb").value;

  // Capturo datos de observaciones del formulario
  const obs = document.getElementById("observaciones");

  // Guardo datos de clientes, equipos, materiales y observaciones en variables
  clientes.push(nuevoCliente);
  equipos.push(nuevoEquipo);
  matSelect.push(canios);
  matSelect.push(aislante);
  matSelect.push(cable);
  matSelect.push(manguera);
  matSelect.push(mensula);
  matSelect.push(tacos);
  matSelect.push(tornillos);
  matSelect.push(cinta);
  matSelect.push(aro);
  observaciones = obs.value;

// Confirmo captura de datos
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Los datos han sido guardados correctamente",
    showConfirmButton: false,
    timer: 1500,
  });

  // Muestro en consola los datos obtenidos
  console.log(clientes);
  console.log(equipos);
  console.log(matSelect);
  console.log(observaciones);

  // Convierto el objeto en una cadena de texto
  const clienteString = JSON.stringify(nuevoCliente),
    equipoString = JSON.stringify(nuevoEquipo),
    materialesString = JSON.stringify(matSelect),
    observacionesString = JSON.stringify(observaciones);

  // Guardo la cadena en el localstorage con la clave "nuevoCliente"
  localStorage.setItem("Cliente", clienteString);
  localStorage.setItem("Equipo", equipoString);
  localStorage.setItem("Materiales", materialesString);
  localStorage.setItem("Observaciones", observacionesString);

  // A PARTIR DE AQUÍ CALCULO EL PRECIO TOTAL DE LA INSTALACIÓN"

  // por cada iteracion de la constante matSelect comparar nombre con cada item de la constante listaDePrecios, y al encontrar coincidencia multiplicar matSelect.cantidad * listaDeprecios.precio
  const precioParcial = [];
  for (let i = 0; i < matSelect.length; i++) {
    for (let j = 0; j < listaDePrecios.length; j++) {
      matSelect[i].material === listaDePrecios[j].nombre &&
        precioParcial.push(matSelect[i].cantidad * listaDePrecios[j].precio);
      // if (matSelect[i].material === listaDePrecios[j].nombre) {
      //   precioParcial.push(matSelect[i].cantidad * listaDePrecios[j].precio);
      // }
    }
  }
  console.log(precioParcial);

  // Sumo todos los valores del array precioParcial mediante el método .reduce()
  const precioTotalMat = precioParcial.reduce(
    (total, precio) => total + precio,
    0
  );
  // Modifico el costo de mano de obra segun potencia del equipo a instalar
  let potencias = document.getElementById("potencia").value;
  if (potencias == 2250 || potencias == 3000) {
    manoDeObra = 20000;
  } else if (potencias == 4500) {
    manoDeObra = 24000;
  } else if (potencias == 6000) {
    manoDeObra = 36000;
  } else if (potencias == 90000) {
    manoDeObra = 50000;
  }

  // Imprimo en el documento los Costos de Instalación
  let subtotal = document.getElementById("costoDeMateriales"),
    work = document.getElementById("costoManoDeObra"),
    totalInstal = document.getElementById("costoTotalInstal"),
    cti = precioTotalMat + manoDeObra;
  console.log(`Materiales: $${precioTotalMat}`);
  console.log(`M de Obra: $${manoDeObra}`);
  console.log(`Costo Total Instalación: $${cti}`);

  subtotal.innerHTML = `<p>Materiales: $${precioTotalMat}</p>`;
  work.innerHTML = `<p>M de Obra: $${manoDeObra}</p>`;
  totalInstal.innerHTML = `<span>Costo Total Instalación: $ ${cti}.-</span>`;

  // Creo botón de imprimir formulario una vez completado el mismo
  const btnImp = document.getElementById("imprimir");
  btnImp.innerHTML = `<button type="button" class="btn btn-primary btnPrint" id="botonPrint">
        Imprimir Formulario
      </button>`;
  // Envio el formulario a la impresora
  const impForm = document.getElementById("botonPrint");
  impForm.addEventListener("click", respuesta);
  function respuesta() {
    window.print(formulario);
    console.log("imprimiendo documento");
  }
});

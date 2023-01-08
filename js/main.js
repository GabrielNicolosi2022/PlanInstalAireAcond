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

// Creo una lista de precios con nombres y precios en un array.
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
  const canios = {};
  const aislante = {};
  const cable = {};
  const manguera = {};
  const mensula = {};
  const tacos = {};
  const tornillos = {};
  const cinta = {};
  const aro = {};
  
  // Capturo datos de materiales del formulario
  canios.material = document.getElementById("canios").value;
  canios.cantidad = document.getElementById("longCanios").value;
  aislante.material = document.getElementById("aislantes").value;
  aislante.cantidad = document.getElementById("longAisl").value;
  cable.material = document.getElementById("cable").value;
  cable.cantidad = document.getElementById("longCable").value;
  manguera.material = document.getElementById("canios").value;
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

  // Muestro en consola los datos obtenidos
  console.log(clientes);
  console.log(equipos);
  console.log(matSelect);
  console.log(observaciones);
});

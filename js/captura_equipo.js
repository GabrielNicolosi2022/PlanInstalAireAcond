const equipos = [];

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

const formEq = document.getElementById("formEquipo");

formEq.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
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

  equipos.push(nuevoEquipo);
  console.log(equipos);
});

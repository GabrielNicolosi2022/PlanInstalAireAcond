const clientes = [];

class Cliente {
  constructor(nombre, apellido, direccion, localidad, telefono) {
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.direccion = direccion.toUpperCase();
    this.localidad = localidad.toUpperCase();
    this.telefono = telefono;
  }
}

const formCl = document.getElementById("formCliente");

formCl.addEventListener("submit", (event) => {
  event.preventDefault();

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

  clientes.push(nuevoCliente);
  console.log(clientes);
});

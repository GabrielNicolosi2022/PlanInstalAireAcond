  // Convierto el objeto en una cadena de texto
  const clienteString = JSON.stringify(nuevoCliente);

  // Guardo la cadena en el localstorage con la clave "nuevoCliente"
  localStorage.setItem("cliente", clienteString);

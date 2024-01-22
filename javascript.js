function finalizar() {
  // Obtenemos la tabla de pedido
  const table = document.getElementById("pedido");

  // Inicializamos las variables
  let total = 0;
  let lista = [];

  // Recorremos la tabla de pedido
  for (let i = 0; i < table.rows.length; i++) {
    // Obtenemos la cantidad del pedido
    const cantidad = table.rows[i].cells[3].querySelector("input").value;

    // Si la cantidad es mayor que 0, calculamos el precio
    if (cantidad > 0) {
      // Obtenemos el precio del pedido
      const precio = table.rows[i].cells[2].innerHTML;

      // Calculamos el precio total del pedido
      total += parseFloat(precio) * cantidad;

      // Agregamos el pedido a la lista
      lista.push({
        nombre: table.rows[i].cells[1].innerHTML,
        cantidad: cantidad,
        precio: precio,
      });
    }
  }

  // Mostramos la lista del pedido
  document.getElementById("lista").innerHTML = lista.toString();

  // Mostramos el precio total
  document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
}

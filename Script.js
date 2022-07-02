const precioTicket = 200;

function resumir() {
  //Se cargan valores a la variable segun lo obtenido en el HTML
  var cantidadTicket = document.getElementById("inputCantidad").value;
  var descuento = document.getElementById("inputCategoria").value;
  var precio =
    cantidadTicket * (precioTicket - (precioTicket * descuento) / 100);

  //sumatoria total devolviendo el valor al form
  document.getElementById("compraTotal").value = "Total a pagar: $" + precio;
}

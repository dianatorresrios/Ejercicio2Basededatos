const articulosModel = require('./models/articulos');
const ticketsModel = require('./models/tickets');

// Crear un artículo
const nuevoArticulo = {
  Nombre: 'Leche',
  Precio: 2.5,
  Existencias: 100
};
articulosModel.crearArticulo(nuevoArticulo);

// Obtener todos los artículos
const todosLosArticulos = await articulosModel.obtenerTodosLosArticulos();
console.log(todosLosArticulos);

// Crear un ticket
const nuevoTicket = {
  Subtotal: 25,
  IVA: 4.75,
  Total: 29.75
};
ticketsModel.crearTicket(nuevoTicket);

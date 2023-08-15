const knex = require('../knex'); 
const Articulos = () => knex('articulos');

module.exports = {
  crearArticulo: async (articulo) => {
    return await Articulos().insert(articulo);
  },
  obtenerArticuloPorId: async (id) => {
    return await Articulos().where('id', id).first();
  },
  obtenerTodosLosArticulos: async () => {
    return await Articulos().select('*');
  },

};

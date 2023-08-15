const knex = require('../knex'); 

const Tickets = () => knex('tickets');

module.exports = {
  crearTicket: async (ticket) => {
    return await Tickets().insert(ticket);
  },
  obtenerTicketPorId: async (id) => {
    return await Tickets().where('id', id).first();
  },
  obtenerTodosLosTickets: async () => {
    return await Tickets().select('*');
  },
 
};

const knex = require('../db/connection');

module.exports = {
  findFurby: (id) => {
    return knex('furby').where('id', id).first();
  },
  createFurby: (info) => {
    return knex('furby').insert(info);
  }
};

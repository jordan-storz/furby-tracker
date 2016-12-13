const knex = require('../db/connection');

module.exports = {
  createFurby: (info) => {
    return knex('furby').insert(info);
  }
};

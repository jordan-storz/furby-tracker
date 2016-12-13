const knex = require('../db/connection');

module.exports = {
  findUsers: () => {
    return knex('users');
  },
  createUser: (info) => {
    return knex('users').returning('id', 'username').insert(info);
  }
};

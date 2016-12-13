const knex = require('../db/connection');

module.exports = {
  findFurby: (id) => {
    return knex('furby').where('id', id).first().then((furby) => {
      return knex.select('username')
        .from('users')
        .where('id', furby.user_id)
        .first()
        .then((user) => {
          furby.username = user.username;
          return Promise.resolve(furby);
        });
    });
  },
  createFurby: (info) => {
    return knex('furby').insert(info);
  },
  editFurby: (id, info) => {
    return knex('furby')
      .where('id', id)
      .returning('id')
      .update(info)
      .then(data => Promise.resolve(data[0]));
  }
};

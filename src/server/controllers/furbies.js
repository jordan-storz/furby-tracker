const knex = require('../db/connection');

module.exports = {
  findAllFurbies: () => {
    return knex('furby');
  },
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
    return knex('furby')
      .where('image_url', info.image_url)
      .where('user_id', info.user_id)
      .then((furbies) => {
        if (furbies.length === 0) {
          return knex('furby').insert(info);
        } else {
          return Promise.reject('User has furby already');
        }
      });
  },
  editFurby: (id, info) => {
    return knex('furby')
      .where('id', id)
      .returning('id')
      .update(info)
      .then(data => Promise.resolve(data[0]));
  },
  deleteFurby: (id) => {
    return knex('furby').where('id', id).del();
  }
};

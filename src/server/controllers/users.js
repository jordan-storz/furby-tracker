const knex = require('../db/connection');

module.exports = {
  findUsers: () => {
    return knex('users');
  },
  createUser: (info) => {
    return knex('users').returning('id', 'username').insert(info);
  },
  findUserAndFurbies: (id) => {
    return knex('users').where('id', id).first().then((user) => {
      return knex('furby').where('user_id', id).then((furbies) => {
        return Promise.resolve({
          user,
          furbies
        });
      });
    });
  },
  findUser: (id) => {
    return knex('users').where('id', id).first();
  },
  deleteUser: (id) => {
    return knex('users').where('id', id).del();
  },
  findUsersWithFurbyUrl: (url) => {
    return knex('furby').where('image_url', url).then((furbies) => {
      let userIds = furbies.map((furby) => {
        return furby.user_id;
      });
      return knex('users').whereIn('id', userIds).then((users) => {
        return Promise.resolve({
          furby: furbies[0],
          users: users
        });
      });
    });
  }
};

const knex = require('../db/connection');

module.exports = {
  findUsers: () => {
    return knex('users');
  },
  createUser: (info) => {
    return knex('users').returning('id', 'username').insert(info);
  },
  findUserAndFurbies: (id) => {
    // return knex.select(
    //   'users.id', 'users.username', 'furby.nickname as furbyNickName', 'furby.image_url as imageUrl'
    // ).from('users').join('furby', 'furby.user_id', 'users.id').where('users.id', id);

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
  }
};

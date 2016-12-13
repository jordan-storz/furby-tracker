const knex = require('../db/connection');

module.exports = {
  findUsers: () => {
    return knex('users');
  },
  createUser: (info) => {
    return knex('users').returning('id', 'username').insert(info);
  },
  findUserAndFurbies: (id) => {
    // return knex('users').where('id', id);
    return knex.select(
      'users.username', 'furby.nickname as furbyNickName', 'furby.image_url as imageUrl'
    ).from('users').join('furby', 'furby.user_id', 'users.id').where('users.id', id);
  },
  findUser: (id) => {
    return knex('users').where('id', id).first();
  }
};

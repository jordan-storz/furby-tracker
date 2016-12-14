
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (users) => {
    users.increments();
    users.string('username').notNullable();
    users.unique('username');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};

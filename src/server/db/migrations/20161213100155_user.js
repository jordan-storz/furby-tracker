
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (user) => {
    user.increments();
    user.string('username').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};

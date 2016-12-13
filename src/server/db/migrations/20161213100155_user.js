
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (user) => {
    user.increments();
    user.string('username');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('furby', (furby) => {
    furby.increments();
    furby.string('image_url').notNullable();
    furby.string('nickname');
    furby.integer('user_id');
    furby.foreign('user_id')
      .references('id').inTable('user');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('furby');
};

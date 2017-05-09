
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('url')
    table.string('profile_picture')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};

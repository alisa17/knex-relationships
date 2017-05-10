exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', function (table) {
    table.timestamp('post_created_at').defaultTo(knex.fn.now())
    table.increments('id').primary()
    table.string('title')
    table.string('user_id')
    table.string('content')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts')
}

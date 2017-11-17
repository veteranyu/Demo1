
exports.up = (knex, Promise) => {
  return knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
    table.string('description').notNullable().unique()
    table.string('price').notNullable().unique()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('products')
}

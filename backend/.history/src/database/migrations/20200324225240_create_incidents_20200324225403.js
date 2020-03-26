exports.up = function (knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.incremets();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('incidents');
};

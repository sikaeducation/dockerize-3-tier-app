exports.up = function(knex) {
  return knex.schema.createTable("dog", table => {
    table.increments()
    table.string("name")
  })
};

exports.down = async function(knex) {
  return knex.schema.dropTableIfExists("dog")
};

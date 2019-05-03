
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', tbl => {
    //primary key
    tbl.increments();

    //table data
    //name
    tbl
    .string('contextName', '128')
    .notNullable()
    .unique()
    
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
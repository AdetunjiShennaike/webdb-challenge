
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    //primary key
    tbl.increments();

    //table data
    //name
    tbl
    .string('projectName', '128')
    .notNullable()
    .unique()

    //description
    tbl
    .string('projectDescription')
    .notNullable()

    //completed
    tbl
    .boolean('complete')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
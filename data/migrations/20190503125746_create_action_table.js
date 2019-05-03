
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    //primary key
    tbl.increments();

    //table data
    //name
    tbl
    .string('actionName', '128')
    .notNullable()
    .unique()

    //description
    tbl
    .string('actionDescription')
    .notNullable()

    //notes
    tbl
    .string('notes', '128')
   
    //complete
    tbl
    .boolean('completed')

    //foreign key
    tbl
    .integer('project_id')
    .unsigned()
    .references('id')
    .inTable('projects')
    .notNullable()
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')
    
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('action_context', tbl => {
    //primary key
    tbl.increments();
    
    //foreign keys
    tbl
    .integer('action_id')
    .unsigned()
    .references('id')
    .inTable('actions')
    .notNullable()
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')
    
    tbl
    .integer('context_id')
    .unsigned()
    .references('id')
    .inTable('contexts')
    .notNullable()
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action_context');
};
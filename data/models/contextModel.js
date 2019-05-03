//import knex from config file 
const db = require('../dbConfig');

//set up th exports
module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
}

//setup SQL Functions
function get() {
  return db('contexts');
}

function getById(id) {
 return db('contexts')
 .where('id', id)
 .first()
}

function insert(dish) {
  return db('contexts')
  .insert( dish )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function update(id, change) {
  return db('contexts')
  .where({ id })
  .update( change )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function remove(id) {
  return db('contexts')
  .where('id', id)
  .del()
  
}
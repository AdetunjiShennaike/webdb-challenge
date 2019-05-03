//import knex from config file 
const db = require('../dbConfig');

//set up th exports
module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  getActions,
}

//setup SQL functions
function get() {
  return db('projects');
}

function getById(id) {
 return db('projects')
 .where('id', id)
 .first()
}

function insert(dish) {
  return db('projects')
  .insert( dish )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function update(id, change) {
  return db('projects')
  .where({ id })
  .update( change )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function remove(id) {
  return db('projects')
  .where('id', id)
  .del()
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function getActions(id) {
  return db('actions')
  .where('dish_id', id)
  .then( recipes => recipes.map(recipe => { return {...recipe}}))
}
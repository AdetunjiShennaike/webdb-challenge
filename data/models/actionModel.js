//import knex from config file 
const db = require('../dbConfig');

//set up th exports
module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  getContexts
}

//setup SQL Functions
function get() {
  return db('actions');
}

function getById(id) {
 return db('actions')
 .where('id', id)
 .first()
}

function insert(dish) {
  return db('actions')
  .insert( dish )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function update(id, change) {
  return db('actions')
  .where({ id })
  .update( change )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function remove(id) {
  return db('actions')
  .where('id', id)
  .del()
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function getContexts(id) {
  return db('action_context')
  .select('action_context.id', 'actionName', 'completed', 'contextName' )
  .join('actions', {'actions.id': 'action_id'})
  .join('contexts', {'contexts.id': 'context_id'})
  .where('action_id', id)
  .orderBy('context_id')
  .then( contexts => contexts.map(context => { return {...context}}))
}
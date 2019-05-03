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
  
}

function getActions(id) {
  let project = db('projects')

  if (id) {
    project.where('id', id).first();
    
    const data = [project, findActions(id)]

    // .then( next => {
    //   console.log(next)
    //   db('actions')
    //   .where('project_id', id)
    //   .then( actions => {
    //     console.log(actions)
    //     return {next, actions}
    //   });
    // })

    return Promise.all(data)
  }

}

function findActions(id) {
  return db('actions')
  .where('project_id', id)
  .then( actions => actions.map(action => { return {...action}}))
}
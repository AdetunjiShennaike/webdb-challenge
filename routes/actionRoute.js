//import express and set route
const express = require('express');
const router = express.Router();

//import db
const actions = require('../data/models/actionModel');

//set error msgs
const sendError = (msg, res) => {
  res.status(500).json({ error: `${msg}`});
};

const missingError = res => {
  res.status(404).json({ error: 'This action does not exist'});
};

const newError = (sts, msg, res) => {
  res.status(sts).json({ error: `${msg}` })
}

//set middleware

//CRUD requests
//get actions
router.get('/', (req, res) => {
  actions
  .get()
  .then( action => {
    res.status(200).json({ action });
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//by id
router.get('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  actions
  .getById(ID)
  .then( action => {
    if(action === undefined) {
      return missingError(res);
    }
    else {
      return res.status(200).json({ action });
    }
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//get contexts
router.get('/:id/contexts', (req, res) => {
  //set ID
  const ID = req.params.id
  
  actions
  .getContexts(ID)
  .then( action => {
    if(action === undefined) {
      return missingError(res);
    }
    else {
      return res.status(200).json({ action });
    }
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//post request
router.post('/', (req, res) => {
  //set req body
  const { actionName, project_id, actionDescription, notes } = req.body;
  const newAction = { actionName, project_id, actionDescription, notes  };

  //check req body
  if ( !actionName || !project_id || !actionDescription ) { 
    return newError( 406, 'Missing Action Name, Project ID, or Description!', res );
  }
  actions
  .insert(newAction)
  .then( action => {
    res.status(201).json({ action });
  })
  .catch( err => {
    return sendError( err , res );
  })
})

//update request
router.put('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  //set req body
  const { actionName, project_id, actionDescription, notes  } = req.body;
  const newAction = { actionName, project_id, actionDescription, notes  };

  //check req body
  if ( !actionName || !project_id || !actionDescription ) { 
    return newError( 406, 'Missing Action Name, Project ID, or Description!', res );
  }
  actions
  .update(ID, newAction) 
  .then( action => {
    if(action === undefined) {
    return missingError(res);
    }
    else {
      return res.status(202).json({ action });
    }
  })
  .catch( err => {
    return sendError( err , res );
  })
})

router.delete('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  actions
  .getById(ID)
  .then( target => {
    actions
    .remove(ID)
    .then( action => {
      if(action === undefined) {
        return missingError(res);
      }
      else {
        return res.status(202).json({ target });
      }
    })
    .catch( err => {
      return sendError( err, res );
    })
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//export
module.exports = router;
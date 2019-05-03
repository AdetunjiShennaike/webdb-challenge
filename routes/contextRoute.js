//import express and set route
const express = require('express');
const router = express.Router();

//import db
const contexts = require('../data/models/contextModel');

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
  contexts
  .get()
  .then( context => {
    res.status(200).json({ context });
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//by id
router.get('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  contexts
  .getById(ID)
  .then( context => {
    if(context === undefined) {
      return missingError(res);
    }
    else {
      return res.status(200).json({ context });
    }
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//post request
router.post('/', (req, res) => {
  //set req body
  const { name } = req.body;
  const newContext = { name };

  //check req body
  if ( !name ) { 
    return newError( 406, 'Missing context Name!', res );
  }
  contexts
  .insert(newContext)
  .then( context => {
    res.status(201).json({ context });
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
  const { name } = req.body;
  const newContext = { name };

  //check req body
  if ( !name ) { 
    return newError( 406, 'Missing context Name!', res );
  }
  contexts
  .update(ID, newContext) 
  .then( context => {
    if(context === undefined) {
    return missingError(res);
    }
    else {
      return res.status(202).json({ context });
    }
  })
  .catch( err => {
    return sendError( err , res );
  })
})

router.delete('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  contexts
  .remove(ID)
  .then( context => {
    if(context === undefined) {
      return missingError(res);
    }
    else {
      return res.status(202).json({ context });
    }
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//export
module.exports = router;
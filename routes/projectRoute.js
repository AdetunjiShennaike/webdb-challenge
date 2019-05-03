//import express and set route
const express = require('express');
const router = express.Router();

//import db
const projects = require('../data/models/projectModel');

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
  projects
  .get()
  .then( project => {
    res.status(200).json({ project });
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//by id
router.get('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  projects
  .getById(ID)
  .then( project => {
    if(project === undefined) {
      return missingError(res);
    }
    else {
      return res.status(200).json({ project });
    }
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//get actions
router.get('/:id/actions', (req, res) => {
  //set ID
  const ID = req.params.id
  
  projects
  .getActions(ID)
  .then( project => {
    if(project === undefined) {
      return missingError(res);
    }
    else {
      return res.status(200).json({ project });
    }
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//post request
router.post('/', (req, res) => {
  //set req body
  const { projectName, projectDescription} = req.body;
  const newProject = { projectName, projectDescription};

  //check req body
  if ( !projectName, !projectDescription) { 
    return newError( 406, 'Missing Project Name and/or Project Description!', res );
  }
  projects
  .insert(newProject)
  .then( project => {
    res.status(201).json({ project });
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
  const { projectName, projectDescription} = req.body;
  const newProject = { projectName, projectDescription};

  //check req body
  if ( !projectName, projectDescription) { 
    return newError( 406, 'Missing project Name!', res );
  }
  projects
  .update(ID, newProject) 
  .then( project => {
    if(project === undefined) {
    return missingError(res);
    }
    else {
      return res.status(202).json({ project });
    }
  })
  .catch( err => {
    return sendError( err , res );
  })
})

router.delete('/:id', (req, res) => {
  //set ID
  const ID = req.params.id
  
  projects
  .remove(ID)
  .then( project => {
    if(project === undefined) {
      return missingError(res);
    }
    else {
      return res.status(202).json({ project });
    }
  })
  .catch( err => {
    return sendError( err, res );
  })
})

//export
module.exports = router;
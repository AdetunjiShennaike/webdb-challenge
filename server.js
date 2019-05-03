//import express and dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

//import routes
const projectRoute = require('./routes/projectRoute');
const actionRoute = require('./routes/actionRoute');
const contextRoute = require('./routes/contextRoute');


//define server
const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));

//run routes
server.use('/api/project', projectRoute);
server.use('/api/action', actionRoute);
server.use('/api/context', contextRoute);

//export
module.exports = server;
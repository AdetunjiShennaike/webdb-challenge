//import express and dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

//import routes


//define server
const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));

//run routes


//export
module.exports = server;
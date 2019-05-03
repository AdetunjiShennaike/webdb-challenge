//import knex and knexfile as well as env
const knex = require('knex');
const knexConfig = require('../knexfile');
require('dotenv').config();

//define the export
const db = knex(knexConfig.development)

//export to be used in multiple files instead of having to call repeatedly
module.exports = db;
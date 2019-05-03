//import server and dotenv
const server = require('./server');
require('dotenv').config();

//dynamic port
const PORT = process.env.PORT || 4300;

//listen for the port
server.listen(PORT, () => {
  console.log(`\n It's my way ${PORT}, or the highway. \n`)
})
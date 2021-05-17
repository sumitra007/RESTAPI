const express = require('express');
const app = express();
async function init() {
  const approuting = require('./modules');
  const appmodules = new approuting(app);
  appmodules.init();
}
init();
module.exports = app;


/*
const express = require('express');
//global.CONFIG = require('./config/environment');
const bodyparser = require('body-parser');
const app = express();

async function init() {
  
//const mssqlconnection = require('./utilities/mssqlconnection');
//global.MSSQLConnection = mssqlconnection.getConnection(global.CONFIG.mssql);
const mssqlconnection = require('./dbconnection.js');
global.MSSQLConnection = mssqlconnection.getConnection("");
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
const approuting = require('./modules');
const appmodules = new approuting(app);
appmodules.init();

  
}

init();

module.exports = app;
*/
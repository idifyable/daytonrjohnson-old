/****************************************
* Imports
****************************************/

var path = require('path');
var config = require('../config.js');
var Sequelize = require('sequelize');
var db = {};

/****************************************
* Database Connection
****************************************/

var sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
  dialect: 'postgres',
  operatorsAliases: false,
  port: process.env.POSTGRES_PORT,
  host: 'postgres', // Docker DB service name
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection succeeded.');
  })
  .catch(err => {
    console.error('Database connection failed: ', err);
  })

/****************************************
* Models
****************************************/

db.project = require('./projectModel.js')(sequelize, Sequelize);

/****************************************
* Pass along sequelize
****************************************/

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/****************************************
* Exports
****************************************/

module.exports = db;
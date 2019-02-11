/**
* Imports
*/

const debug = require('debug')('daytonrjohnson:server');
const Sequelize = require('sequelize');
const projectModel = require('./projectModel.js');
const config = require('../config.js');


module.exports = async function getModels() {
  const db = {};

  // Configure Sequelize database connection
  const sequelize = new Sequelize(
    config.database.name,
    config.database.username,
    config.database.password, {
      dialect: 'postgres',
      operatorsAliases: false,
      port: process.env.POSTGRES_PORT,
      host: 'postgres', // Docker DB service name
    },
  );

  // Pass along sequelize
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  // Authenticate
  try {
    await sequelize.authenticate();

    // Add models to db object
    db.project = await projectModel(sequelize, Sequelize);

    debug(db.project);
    return db;
  } catch (err) {
    throw err;
  }
};

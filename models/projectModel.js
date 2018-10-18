/****************************************
* Imports
****************************************/

var path = require('path');
var config = require('../config.js');
var Sequelize = require('sequelize');

/****************************************
* Model
****************************************/

var Project = function(sequelize, Sequelize)
{
  const Project = sequelize.define('Project', {
    title: Sequelize.TEXT,
    image: Sequelize.TEXT,
    technologies_used: Sequelize.ARRAY(Sequelize.TEXT),
    link_live: Sequelize.TEXT,
    link_repo: Sequelize.TEXT
  },
  {
    timestamps: false
  });

  return Project;
}

/****************************************
* Exports
****************************************/

module.exports = Project;
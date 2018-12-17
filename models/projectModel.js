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
  const Project = sequelize.define('project', {
    title: Sequelize.TEXT,
    image: Sequelize.TEXT,
    technologies_used: Sequelize.ARRAY(Sequelize.TEXT),
    link_live: Sequelize.TEXT,
    link_repo: Sequelize.TEXT
  },
  {
    timestamps: false,
    freezeTableName: true
  });

  // Create the project table if one does not exist
  Project.sync().then(function(response)
  {
    console.log(response);
  });

  return Project;
}


/****************************************
* Exports
****************************************/

module.exports = Project;
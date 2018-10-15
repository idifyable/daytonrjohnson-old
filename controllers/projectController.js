/****************************************
* Imports
****************************************/

var projectModel = require('../models/projectModel');

/****************************************
* Load projects page
****************************************/

projectLoadAll = function(req, res)
{
  projectModel.find({}).exec(function(err, allProjectsData)
  {
    if(err)
    {
      return next(err);
    }

    res.render('pages/projects.pug', {
      page: 'projects',
      allProjects: allProjectsData
    });
  });
}

/****************************************
* Load all projects on home page
****************************************/

projectLoadAllHome = function(req, res)
{
  projectModel.find({}).exec(function(err, allProjectsData)
  {
    if(err)
    {
      return next(err);
    }

    res.render('pages/index.pug', {
      page: 'home',
      allProjects: allProjectsData
    });
  });
}

/****************************************
* Exports
****************************************/

module.exports = {projectLoadAll, projectLoadAllHome};
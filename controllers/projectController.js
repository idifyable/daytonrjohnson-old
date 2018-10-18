/****************************************
* Imports
****************************************/

var models = require('../models/');

/****************************************
* Load projects and render projects page
****************************************/

projectLoadAll = function(req, res, next)
{
  models.project.findAll({raw: true})
    .then(function(allProjectsData)
    {
      res.render('pages/projects.pug', {
        page: 'projects',
        data: {
          projects: allProjectsData
        }
      });
    })
    .catch(function(err)
    {
      console.log(err);
    });
}

/****************************************
* Load projects and render home page
****************************************/

projectLoadAllHome = function(req, res)
{
  models.project.findAll({raw: true})
    .then(function(allProjectsData)
    {
      res.render('pages/index.pug', {
        page: 'home',
        data: {
          projects: allProjectsData
        }
      });
    })
    .catch(function(err)
    {
      console.log(err);
    });
}

/****************************************
* Exports
****************************************/

module.exports = {projectLoadAll, projectLoadAllHome};
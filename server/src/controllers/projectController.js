/**
* Imports
*/

const getModels = require('../models/');

/**
* Load projects and render projects page
*/

async function projectLoadAll(req, res, next) {
  const models = await getModels();

  models.project.findAll({ raw: true })
    .then((allProjectsData) => {
      res.render('pages/projects.pug', {
        page: 'projects',
        data: {
          projects: allProjectsData,
        },
      });
    })
    .catch((err) => {
      next(err);
    });
}

/**
 * Load projects and render home page
 */

async function projectLoadAllHome(req, res, next) {
  const models = await getModels();
  models.project.findAll({ raw: true })
    .then((allProjectsData) => {
      res.render('pages/index.pug', {
        page: 'home',
        data: {
          projects: allProjectsData,
        },
      });
    })
    .catch((err) => {
      next(err);
    });
}

/**
* Exports
*/

module.exports = {
  projectLoadAll,
  projectLoadAllHome,
};

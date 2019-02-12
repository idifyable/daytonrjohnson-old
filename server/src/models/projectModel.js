/**
* Model
*/

module.exports = async function initializeProject(sequelize, Sequelize) {
  const Project = sequelize.define('project', {
    title: Sequelize.TEXT,
    image: Sequelize.TEXT,
    technologies_used: Sequelize.ARRAY(Sequelize.TEXT),
    link_live: Sequelize.TEXT,
    link_repo: Sequelize.TEXT,
  },
  {
    timestamps: false,
    freezeTableName: true,
  });

  // Create the project table if one does not exist
  Project.sync()
    .then(() => Project)
    .catch((err) => {
      throw (err);
    });

  return Project;
};

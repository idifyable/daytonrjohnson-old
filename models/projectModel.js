/****************************************
* Imports
****************************************/

var mongoose = require('mongoose');

/****************************************
* Model
****************************************/

var ProjectModelSchema = new mongoose.Schema({
  title: String,
  image: String,
  technologies_used: Array,
  links: {
    live: String,
    repo: String
  }
});

/****************************************
* Exports
****************************************/

module.exports = mongoose.model('Project', ProjectModelSchema);
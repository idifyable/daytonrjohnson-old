/****************************************
 * Imports
 ****************************************/

var fs = require('fs');

/****************************************
* Configuration
****************************************/

const POSTGRES_DB = fs.readFileSync('/run/secrets/POSTGRES_DB', 'utf8');
const POSTGRES_USER = fs.readFileSync('/run/secrets/POSTGRES_USER', 'utf8');
const POSTGRES_PASSWORD = fs.readFileSync('/run/secrets/POSTGRES_PASSWORD', 'utf8');
const POSTGRES_HOST = process.env.POSTGRES_HOST;

var config = {
  'database': {
    'host': POSTGRES_HOST,
    'name': POSTGRES_DB,
    'username': POSTGRES_USER,
    'password': POSTGRES_PASSWORD
  }
}

/****************************************
* Exports
****************************************/

module.exports = config;
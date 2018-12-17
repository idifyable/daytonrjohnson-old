var enviroment = process.env.NODE_ENV;

if(typeof enviroment == 'undefined')
{
  enviroment = 'development';
  console.warn('NODE_ENV is undefined.');
}

/****************************************
* Configuration
****************************************/

var config = {
  'development': {
    'database': {
      'name': '',
      'username': '',
      'password': ''
    }
  },
  'production': {
    'database': {
      'name': '',
      'username': '',
      'password': ''
    }
  }
}

/****************************************
* Enviroment Configuration
****************************************/

var enviromentConfig = config[enviroment];

/****************************************
* Exports
****************************************/

module.exports = enviromentConfig;

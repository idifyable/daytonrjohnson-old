/****************************************
* Imports
****************************************/

var config = require('./config');

// Modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Controllers
var projectController = require('./controllers/projectController');

// Routers
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var projectsRouter = require('./routes/projects');

/****************************************
* Setup app
****************************************/

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// HTML minification
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

/****************************************
* Enviroment configuration
****************************************/

var enviroment = app.get('env') || 'production';
var enviromentConfig = config[enviroment];

/****************************************
* Setup middleware
****************************************/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/****************************************
* Set up Mongoose DB connection
****************************************/

var databaseConfig = enviromentConfig.database;
var databaseConnectionString = 'mongodb://' + databaseConfig.hostname + ':' + databaseConfig.port;

mongoose.connect(databaseConnectionString + '/projects', {
  useNewUrlParser: true
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Get the default connection
var db = mongoose.connection;

// Attach database error handler
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/****************************************
* Set up routes
****************************************/

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);

/****************************************
* Error handling
****************************************/

// Catch 404 and forward to error handler
app.use(function(req, res, next)
{
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next)
{
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

/****************************************
* Exports
****************************************/

module.exports = app;
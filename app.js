/**
* Imports
*/

// Modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Routers
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectsRouter = require('./routes/projects');

/**
 * Setup app
 */

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

global.env = app.get('env');

// HTML minification
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

/**
 * Setup middleware
 */

app.use(logger('tiny', {
  skip(req, res) { return res.statusCode < 400; },
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Set up routes
 */

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);

/**
 * Error handling
 */

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 * Exports
 */

module.exports = app;

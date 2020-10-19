const createError = require('http-errors');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const colors = require('colors');
const cors = require('cors');
const { sequelize } = require('./models')

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const truthsRouter = require('./routes/truths');

/* Variable to enable global error logging */
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

/* create the Express app */
const app = express();

/* add cors  */
app.use(cors());

/* setup morgan which gives us http request logging */
app.use(morgan('dev'));

/* json middleware — helps with being able to use req.body in route handlers */
app.use(express.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/* Test the DB connection */
(async () => {
  console.log('Testing the connection to the database...'.cyan);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully'.green);
  } catch (error) {
    console.error('Unable to connect to the database: '.red, error);
  }

  try {
    await sequelize.sync();
    console.log('Database synced successfully'.green);
  } catch (error) {
    console.error('Unable to sync the database: '.red, error);
  }
})();


/* Routes */
app.use(indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/truths', truthsRouter);


/* ERROR HANDLERS */

/* 404 handler to catch undefined or non-existent route requests */ 
app.use((req, res, next) => {

  const err = new Error();
  err.status = 404;
  err.name = 'Resource Not Found';
  err.message = `${err.status} - ${err.name}: Unfortunately, it looks like the resource that you're looking for doesn't exist.`;

  console.log('404 error handler called'.red, err);
  res.status(err.status).json(err.message);
});


/* Global error handler */
app.use((err, req, res, next) => {

  // Handle err name
  if (err.status === 404) {
    err.name = 'Resource Not Found';
  } else {
    err.name = err.name || 'Server Error';
  }

  // Handle err message and response
  let errResponse = '';

  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeConstraintError') {
    err.status = 400;
    err.message = err.errors.map( err => err.message);
    errResponse = { err: { status: err.status, name: err.name, messages: err.message } };
  } else {
    err.status = err.status || 500;
    err.message = err.message || `${err.status} - Unfortunately, it looks like the server has encountered a ${err.name}.`;
    errResponse = `${err.status} - ${err.name}: ${err.message}`;
  }

  console.log('Global error handler called'.red, err); 
  res.status(err.status).json(errResponse);
});

module.exports = app;

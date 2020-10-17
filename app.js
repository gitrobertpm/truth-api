const createError = require('http-errors');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models')

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const truthsRouter = require('./routes/users');

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


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));


/* Test the DB connection */
(async () => {
  console.log('Testing the connection to the database...');
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  try {
    await sequelize.sync();
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Unable to sync the database:', error);
  }
})();



/* Root route redirect to the '/api/' route */
app.get('/', (req, res) => {
  res.redirect('/api');
});

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/truths', truthsRouter);


/* ERROR HANDLERS */

/* 404 handler to catch undefined or non-existent route requests */ 
app.use((req, res, next) => {

  const err = new Error();
  err.status = 404;
  err.name = 'Resource Not Found';
  err.message = `${err.status} - ${err.name}: Unfortunately, it looks like the resource that you're looking for does not exist.`;

  console.log('404 error handler called', { err });
  res.status(err.status).json({ err: { message: [err.message] } });
});

/* Global error handler */
app.use((err, req, res, next) => {

  err.status = err.status || 500;
  err.name = err.name || (err.status === 404) ? 'Resource Not Found Error' : 'Server Error';
  err.message = err.message || `${err.status} - Unfortunately, it looks like the server has encountered a ${err.name}.`;

  console.log('Global error handler called', { err });

  res.status(err.status).json({ err: { message: [err.message] } });
});

module.exports = app;

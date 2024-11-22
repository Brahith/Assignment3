let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('../routes/avg');

let app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

// Import and connect to MongoDB
const connectDB = require('./db');
connectDB();  // Use the function from db.js to connect to MongoDB

// view engine setup
app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use('/Content', express.static(path.join(__dirname, '../public/Content')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title:'Error'});
});

module.exports = app;

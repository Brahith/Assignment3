const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require('mongoose');
const DB = require('./db');
const testRouter = require('../routes/testMark'); // Ensure this path is valid

const app = express();

// Mongoose connection setup
mongoose.connect(DB.URI, {
  useNewUrlParser: true, // Correct typo
  useUnifiedTopology: true,
});

const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error'));
mongoDB.once('open', () => {
  console.log('MongoDB Connected');
});

// View engine setup
app.set('views', path.join(__dirname, 'views')); // Corrected path
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use('/', testRouter); // Root route setup

// Static files
app.use('/Content', express.static(path.join(__dirname, '../public/Content')));

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

module.exports = app;

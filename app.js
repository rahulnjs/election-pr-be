var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouterV1 = require('./routes/v1/index');
var authRouterV1 = require('./routes/v1/auth');
var mockRouter = require('./routes/mock');
require("./db/mongo");

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/v1/', indexRouterV1);
app.use('/v1/auth', authRouterV1);
app.use('/v1/', mockRouter);

/*
app.get('/', (req, res) => {
  res.json({
    ok: true
  })
});
*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

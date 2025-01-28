var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Social_Media')
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err.message))

var users = require('./routes/user');
var comment = require('./routes/comment');
var conversation = require('./routes/conversation');
var message = require('./routes/message');
var post = require('./routes/post');
var story = require('./routes/story');
var like = require('./routes/like');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/post', post);
app.use('/comment', comment);
app.use('/conversation', conversation);
app.use('/message', message);
app.use('/story', story);
app.use('/like', like);

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
  res.render('error');
});

module.exports = app;

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('./models/user');

var routeUser = require('./routes/users');

mongoose.connect('mongodb://127.0.0.1:27017/blog');

var app = express();
app.set('view engine', 'html');

//Роутинг
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');

    next();
});

app.use(express.static(__dirname + '/dist'));

app.use(logger('combined'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

//Наши запросы

app.use('/api/users', routeUser);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, next) {
   res.status(err.status || 500);
   req.json({
       message: err.message,
       error: err
   });
});

app.listen(8082, function () {
    console.log('Сервер запущен!');
});
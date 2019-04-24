var mongoose = require('mongoose');

var userSheme = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String
});

mongoose.model('User', userSheme, 'users');
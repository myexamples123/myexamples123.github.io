var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var User = mongoose.model('User');

router.get('/', function (req, res, next) {
    User.find({}, function (err, users) {
        if(err){
            next(err);
        }

        res.json(users);
    })
});

module.exports = router;
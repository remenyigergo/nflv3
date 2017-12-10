var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var sha1 = require('sha1');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016";
var db = mongojs(url);

var ObjectId = mongojs.ObjectId;

router.post('/register', function (req, res, next) {
    console.log("USER SERVER REGISTER")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var hashedpassword = sha1(req.body.password);
        req.body.password = hashedpassword;
        req.body.balance = 0;
        db.collection("users").insertOne(req.body, function (err, res) {
            if (err) throw err;
            console.log("1 user inserted");
            db.close();
        });
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json();
});


router.get('/getallUsers', function (req, res, next) {
    db.collection("users").find(function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log(docs);
        res.json(docs);
    });
});

router.get('/getinfo/:id', function (req, res, next) {
    console.log("GET INFO")
    db.users.findOne({ 'username': req.params.id }, { "password": 0 }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });

});


module.exports = router;
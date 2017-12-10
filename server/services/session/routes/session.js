var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var sha1 = require('sha1');
var jwt = require('json-web-token');


var MongoClient = require('mongodb').MongoClient;
var ObjectId = mongojs.ObjectId;
var url = "mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016";
var db = mongojs(url);

var secret = 'da39a3ee5e6b4b0d3255bfef95601890afd80709';

router.post('/login', function (req, res, next) {
    console.log("/login: " + JSON.stringify(req.body))
    db.collection("users").findOne({ "username": req.body.username }, function (err, user) {
        if (err) {
            console.log(err);
            res.send(err);
        }

        var userHashedPassword = sha1(req.body.password);

        if (user.password == userHashedPassword) {
            console.log("\tuser found with matching password: " + user.username)
            var payload = {
                "userid": user._id,
                "createdAt": new Date()
            };


            jwt.encode(secret, payload, function (err, token) {
                if (err) {
                    console.log(err.message);
                } else {
                    var response = token;
                    console.log("\ttoken created: " + token)
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                    res.json(response)
                }
            });

        } else {
            res.status(403);
            res.send('Unauthorized');
        }

    });
});


router.post('/authenticate', function (req, res, next) {
    console.log("auth: ")
    console.log(req.body)
    jwt.decode(secret, req.body.token, function (err, decodedPayload, decodedHeader) {
        if (err) {
            console.log(err.message);
            res.status(403);
            res.json("{isAuthenticated: false}");
        } else {
            console.log(decodedPayload, decodedHeader);
            res.json("{isAuthenticated: true}");
        }
    });
});

module.exports = router;
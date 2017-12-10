var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var sha1 = require('sha1');
var jwt = require('json-web-token');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016";
var db = mongojs(url);

var secret = 'TOPSECRETTTTT';

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

var ObjectId = mongojs.ObjectId;

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




router.post('/deposit', function (req, res, next) {
    console.log("/deposit")
    console.log(req.body.username);
    

    db.users.update({ 'username': req.body.username }, { "$set": { "balance": req.body.deposit } }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200);
        res.json("");
    });
});


router.post('/withdraw', function (req, res, next) {
    console.log("/withdraw")
    console.log(req.body.username);

    db.users.findOne({ 'username': req.body.username }, { "balance": 1 }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }

        if (docs.balance - req.body.withdrawal >= 0) {
            balance = docs.balance - req.body.withdrawal;
            db.users.update({ 'username': req.body.username }, { "$set": { "balance": balance } }, function (err, docs) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.status(200);
                res.json("");

            });
        }

    });
});

module.exports = router;
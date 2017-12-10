var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');


var MongoClient = require('mongodb').MongoClient;
var ObjectId = mongojs.ObjectId;
var url = "mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016";
var db = mongojs(url);


router.post('/deposit', function (req, res, next) {
    console.log("/deposit")
    console.log(req.body.username);
    

    db.users.update({ 'username': req.body.username }, { "$set": { "balance": req.body.deposit } }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }

        db.users.findOne({ 'username': req.body.username }, { "balance": 1 }, function (err, docs) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200);            
            res.json(docs.balance);
        });        
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
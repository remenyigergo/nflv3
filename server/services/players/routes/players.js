var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016',['players']);


var ObjectId = mongojs.ObjectId;
// LEKÉRDEZÉSEK 
//error vizsgálat
db.on('error', function() {
    console.log('we had an error.');
  });

//Minden scapat
router.get('/', function(req, res, next) {
    db.players.find(function(err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

router.get('/:id', function (req, res, next) {
    db.collection("players").findOne({ "_id" : ObjectId(req.params.id) }, function (err, docs) {
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



module.exports = router;
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016',['player']);



// LEKÉRDEZÉSEK 
//error vizsgálat
db.on('error', function() {
    console.log('we had an error.');
  });

//Minden scapat
router.get('/', function(req, res, next) {
    db.player.find(function(err, docs) {
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
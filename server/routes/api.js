var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016',['teams']);



// LEKÉRDEZÉSEK 
//error vizsgálat
db.on('error', function() {
    console.log('we had an error.');
  });

//Minden scapat
router.get('/', function(req, res, next) {
    db.teams.find(function(err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
        
    });
});



var ObjectId = mongojs.ObjectId;
router.get('/player/richest', function (req, res, next) {
    console.log(req.params.id)
    db.collection("player").find({}, {"playerId": 1, "caphit": 1}).sort({"caphit": 1},function (err, docs) {
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

router.get('/player/:id', function (req, res, next) {
    console.log(req.params.id)
    db.collection("player").find({"_id": ObjectId(req.params.id)}, {"playerId": 0},function (err, docs) {
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

router.get('/matches/:id', function (req, res, next) {
    db.collection("matches").find({"_id": ObjectId(req.params.id)},function (err, docs) {
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

router.get('/matches/week/:id/top_passers', function (req, res, next) {
    var week;
    db.collection("matches").find({"week": req.params.id}, {"PassYds": 1, "PassYdsPoints": 1,"_id": 0}).sort({"PassYdsPoints": 1},function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log(docs);
        week=res.json(docs);
    });
});

router.get('/matches/week/:id/top_rushers', function (req, res, next) {
    var week;
    db.collection("matches").find({"week": req.params.id}, {"RushYds": 1, "RushYdsPoints": 1,"_id": 0}).sort({"RushYdsPoints": 1},function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log(docs);
        week=res.json(docs);
    });
});

router.get('/matches/week/:id/top_receivers', function (req, res, next) {
    var week;
    db.collection("matches").find({"week": req.params.id}, {"RecYds": 1, "RecYdsPoints": 1,"_id": 0}).sort({"RecYdsPoints": 1},function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log(docs);
        week=res.json(docs);
    });
});

router.get('/matches/week/:id', function (req, res, next) {
    db.collection("matches").find({"week": req.params.id},function (err, docs) {
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

router.put('/matches/:id', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var myquery = { "_id": ObjectId(req.params.id) };
        var newvalues = req.body;
        db.collection("matches").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            db.close();
        });
    });
});


router.delete('/matches/:id', function (req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var myquery = {"_id" : ObjectId(req.params.id)}
        db.collection("matches").deleteOne(myquery, function(err, obj) {
          if (err) throw err;
          console.log("1 document deleted");
          db.close();
        });
      });
});





module.exports = router;


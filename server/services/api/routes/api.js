var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016', ['teams']);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016";

// LEKÉRDEZÉSEK 
//error vizsgálat
db.on('error', function () {
    console.log('we had an error.');
});

//Minden scapat
router.get('/', function (req, res, next) {
    db.teams.find(function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);

    });
});

router.get('/matches/find', function (req, res, next) {
    db.collection("matches").findOne(function (err, docs) {
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


router.get('/player/richest', function (req, res, next) {
    console.log(req.params.id)
    db.collection("player").find({}, { "playerId": 1, "caphit": 1 }).sort({ "caphit": 1 }, function (err, docs) {
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

router.get('/players/:id', function (req, res, next) {
    console.log(req.params.id)
    db.collection("players").find({ "_id": ObjectId(req.params.id) }, function (err, docs) {
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

router.get('/players/name/:id', function (req, res, next) {
    db.collection("players").find({ "name": req.params.id }, function (err, docs) {
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

router.get('/teams/:id', function (req, res, next) {
    console.log(req.params.id)
    db.collection("teams").find({ "_id": ObjectId(req.params.id) }, function (err, docs) {
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


router.get('/players/name/:name', function (req, res, next) {
    console.log(req.params.name)
    db.collection("players").find({ "name": req.params.name }, { "playerId": 0 }, function (err, docs) {
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
    db.collection("matches").find({ "_id": ObjectId(req.params.id) }, function (err, docs) {
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
    db.collection("matches").find({ "week": req.params.id }, { "PassYds": 1, "PassYdsPoints": 1, "_id": 0 }).sort({ "PassYdsPoints": 1 }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log(docs);
        week = res.json(docs);
    });
});

router.get('/matches/week/:id/top_rushers', function (req, res, next) {
    var week;
    db.collection("matches").find({ "week": req.params.id }, { "RushYds": 1, "RushYdsPoints": 1, "_id": 0 }).sort({ "RushYdsPoints": 1 }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log(docs);
        week = res.json(docs);
    });
});

router.get('/matches/week/:id/top_receivers', function (req, res, next) {
    var week;
    db.collection("matches").find({ "week": req.params.id }, { "RecYds": 1, "RecYdsPoints": 1, "_id": 0 }).sort({ "RecYdsPoints": 1 }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log(docs);
        week = res.json(docs);
    });
});

router.get('/matches/week/:id', function (req, res, next) {
    db.collection("matches").find({ "week": req.params.id }, function (err, docs) {
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
        db.collection("matches").updateOne(myquery, newvalues, function (err, result) {
            if (err) throw err;
            console.log("1 document updated");
			res.json();
            db.close();
        });
    });
});

var db = mongojs('mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016');
router.get('/matches/upcoming', function (req, res, next) {
    db.collection("matches").find({ "week": { $gt: 1 } }, function (err, docs) {
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


router.put('/teams/:id', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var myquery = { "_id": ObjectId(req.params.id) };
        var newvalues = req.body;
        db.collection("teams").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log(req.params.id)
            console.log("1 document updated");
            db.close();
        });
    });
});

router.put('/players/:id', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var myquery = { "_id": ObjectId(req.params.id) };
        var newvalues = req.body;
        db.collection("players").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log(req.params.id)
            console.log("1 document updated");
            db.close();
        });
    });
});

router.delete('/players/:id', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var myquery = { "_id": ObjectId(req.params.id) };
        db.collection("players").deleteOne(myquery, function (err, res) {
            if (err) throw err;
            console.log(req.params.id)
            console.log("1 document deleted");
            db.close();
        });
    });
});

router.delete('/teams/:id', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var myquery = { "_id": ObjectId(req.params.id) };
        db.collection("teams").deleteOne(myquery, function (err, res) {
            if (err) throw err;
            console.log(req.params.id)
            console.log("1 document deleted (team)");
            db.close();
        });
    });
});

router.post('/matches/add', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var myquery = { "_id": ObjectId(req.params.id) };
        var newvalues = req.body;
        db.collection("matches").insertOne(newvalues, function (err, result) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			res.json();
        });
    });
});

router.delete('/matches/:id', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var myquery = { "_id": ObjectId(req.params.id) }
        db.collection("matches").deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            db.close();
        });
    });
});





module.exports = router;


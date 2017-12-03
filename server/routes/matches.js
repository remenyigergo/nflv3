var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016', ['matches']);





// LEKÉRDEZÉSEK 
//error vizsgálat
db.on('error', function () {
    console.log('we had an error.');
});

//Minden scapat
router.get('/', function (req, res, next) {
    db.matches.find(function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

router.get('/week1', function (req, res, next) {
    db.matches.find({ 'week': '1' }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });

});

router.get('/week1/1-10', function (req, res, next) {
    db.matches.find({ 'week': '1' }).skip(0).limit(10, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });

});

router.get('/week1/10-20', function (req, res, next) {
    db.matches.find({ 'week': '1' }).skip(10).limit(10, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });

});

router.get('/week2/1-10', function (req, res, next) {
    db.matches.find({ 'week': '2' }).skip(0).limit(10, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

router.get('/week2/10-20', function (req, res, next) {
    db.matches.find({ 'week': '2' }).skip(10).limit(10, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});


router.get('/week2', function (req, res, next) {
    db.matches.find({ 'week': '2' }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});



//Az első öt top passer match az első hétről
router.get('/week1/top_passers', function (req, res, next) {
    db.collection("matches").find({ 'week': '1' }).sort({ 'PassYdsPoints': -1 }).limit(5, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

//Az első öt top rusher match az első hétről
router.get('/week1/top_rushers', function (req, res, next) {
    db.collection("matches").find({ 'week': '1' }).sort({ 'RushYdsPoints': -1 }).limit(5, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

//Az első öt top receiver match az első hétről
router.get('/week1/top_receivers', function (req, res, next) {
    db.collection("matches").find({ 'week': '1' }).sort({ 'RecYdsPoints': -1 }).limit(5, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});




//Az első öt top passer match a második hétről
router.get('/week2/top_passers', function (req, res, next) {
    db.collection("matches").find({ 'week': '2' }).sort({ 'PassYdsPoints': -1 }).limit(5, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

//Az első öt top passer match a második hétről
router.get('/week2/top_rushers', function (req, res, next) {
    db.collection("matches").find({ 'week': '2' }).sort({ 'RushYdsPoints': -1 }).limit(5, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

//Az első öt top passer match a második hétről
router.get('/week2/top_receivers', function (req, res, next) {
    db.collection("matches").find({ 'week': '2' }).sort({ 'RecYdsPoints': -1 }).limit(5, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

//Nincs működés 
router.get('/week1/biggest_deficit_games', function (req, res, next) {
    db.collection("matches").find({ 'week': '1' }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

//MINDEN MECCS
router.get('/allgames', function (req, res, next) {
    db.collection("matches").find(function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016";

router.post('/', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        db.collection("matches").insertOne(req.body, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(docs);
    });

});



module.exports = router;


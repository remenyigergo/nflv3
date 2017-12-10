var email = require('../mail/mail');

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016', ['teams']);


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://greg:gigolo_3@ds241065.mlab.com:41065/nfl_matches_2016";
var ObjectId = mongojs.ObjectId;

const nodemailer = require('nodemailer');

router.post('/addticket', function (req, res, next) {
    db.collection("matches").findOne({ "_id": ObjectId(req.body.matchId) }, { "_id": 0, "tickets": 1 }, function (err, docs) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        console.log("body.matchId: " + req.body.matchId)
        console.log("ticket definiálás előtt: " + JSON.stringify(docs))

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        //BALANCE CHECK / USER
        db.users.findOne({ 'username': req.body.username }, { "balance": 1 }, function (error, balance) {
            if (error) {
                console.log(error);
                res.send(error);
            }

            console.log("balance check if")
            PurchasedTicketsPrice = req.body.tickets * 10000;
            console.log("PurchasedTicketsPrice:" + PurchasedTicketsPrice)
            console.log("req.body.tickets * 10000:" +req.body.tickets*10000)
            if (balance.balance - PurchasedTicketsPrice >= 0) {
                console.log("VAN RÁ ELÉG PÉNZED");



                //TICKET ELLENŐRZÉS, HOGY VAN E MÉG ANNYI AMENNYIT A USER MEG AKAR VENNI
                var tickets;
                console.log("docs.tickets : " + docs.tickets)
                if (docs.tickets != null && docs.tickets - req.body.tickets >= 0) {
                    tickets = docs.tickets - req.body.tickets;
                    console.log("ticket definiálás után: " + JSON.stringify(tickets))
                    db.collection("matches").update({ "_id": ObjectId(req.body.matchId) }, { "$set": { "tickets": tickets } }, function (err, result) {
                        if (err) {
                            console.log(err);
                            res.send(err);
                        }
                    });

                    MongoClient.connect(url, function (err, db) {
                        if (err) throw err;
                        var newvalues = req.body;
                        db.collection("tickets").insertOne(newvalues, function (err, res) {
                            if (err) throw err;
                            console.log("1 ticket inserted");
                            db.close();
                        });
                    });

                    var e = new email("localhost", "greg.remenyi@gmail.com", "\nTICKET BOUGHT\nYou just bought a ticket for this match: \nID #" + req.body.matchId + "\n\nDate:" + req.body.date + "\nName: " + req.body.firstname + " " + req.body.surname + "\nTickets purchased: " + req.body.tickets);
                    //e.send()

                    res.status(200)
                    res.send();
                } else {
                    console.log("Nincs ennyi jegy")
                    res.status(405).json()
                }
                console.log("utána")

            } else {
                console.log("Nincs ennyi pénzed")
                res.status(405).json
            }
        });
    });

});

module.exports = router;
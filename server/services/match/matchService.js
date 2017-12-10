var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var match = require('./routes/matches');
var tickets = require('./routes/tickets');
var mail = require('./helper/mail/mail');



var app = express();
var port = 3004;

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder, angular stuff

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use('/', index);
app.use('/match', match);
app.use('/tickets', tickets);
app.use('/mail', mail);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.listen(port, function() {
    console.log('Server started on port: ', port);
});


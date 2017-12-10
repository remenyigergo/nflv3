var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var player = require('./routes/player');
var players = require('./routes/players');
var teams = require('./routes/teams');



var app = express();
var port = 3005;

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder, angular stuff

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/image',express.static(path.join(__dirname, 'images')));

//app.use('/', index);
app.use('/player', player);
app.use('/players', players);
app.use('/teams', teams);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.listen(port, function() {
    console.log('Server started on port: ', port);
});


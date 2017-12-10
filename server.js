var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var api = require('./server/routes/api');
var teams = require('./server/routes/teams');
var matches = require('./server/routes/matches');
var players = require('./server/routes/players');
var player = require('./server/routes/player');
var users = require('./server/routes/users');
var tickets = require('./server/routes/tickets');


//var index = require('./routes/index');
//var teams = require('./routes/teams');

var app = express();
var port = 3000;

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder, angular stuff

app.use('/image',express.static(path.join(__dirname, 'image')));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use('/', index);
app.use('/api', api);
app.use('/teams', teams);
app.use('/matches', matches);
app.use('/players', players);
//app.use('/player', player);
app.use('/users', users);
app.use('/tickets', tickets);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/players/:id', function (req, res) {
    res.send(req.params.id)
  })



app.listen(port, function() {
    console.log('Server started on port: ', port);
});


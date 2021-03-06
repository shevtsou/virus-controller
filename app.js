//@ts-check
var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');

require('dotenv').config()
const { PORT } = process.env
var db = require('./config/database');
//hero routes
var statisticsRouts = require('./api/statistics/statistics.routes');
const countriesRouts = require('./api/countries/countries.routes')
const newsRouts = require('./api/news/news.routes')

var app = express();

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialise express router
var router = express.Router();

// call the database connectivity function
db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

// use express router
app.use('/api',router);
//call heros routing
statisticsRouts(router);
countriesRouts(router)
newsRouts(router)
// intialise server
app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT} port.`);
})
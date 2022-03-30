// Entry point for the application. 
// This is adapted from the sample provided by Professor Caroline Barriere :// https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis

// express application
var express = require('express');


// require the controller we make
var databaseAccessor = require('./DatabaseAccessor.js');

var cors = require("cors");

var app = express();

app.use(cors());

//var path = require('path');

// set up template engine
//app.set('view engine', 'ejs');
// Change directory solution obtained from https://stackoverflow.com/questions/21885377/change-express-view-folder-based-on-where-is-the-file-that-res-render-is-calle
//app.set('views', path.join(__dirname, '/BackEnd/ServerSide'));

// static file serving
//app.use(express.static('./FrontEnd'));
//app.use(express.static('./BackEnd'));

// fire function from surveyController
databaseAccessor(app);

// listen to port
app.listen(3001);
console.log('listening port 3001');


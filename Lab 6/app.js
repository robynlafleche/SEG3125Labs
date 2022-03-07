// Entry point for the application. 
// This is adapted from the sample provided by Professor Caroline Barriere :// https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis

// express application
var express = require('express');
// require the controller we make
var surveyController = require('./systemController.js');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static file serving
app.use(express.static('./FrontEnd'));
app.use(express.static('./BackEnd'));


// fire function from surveyController
surveyController(app);

// listen to port
app.listen(3000);
console.log('listening port 3000');


/*
var http = require("http");

http.createServer(function (req, res) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
 
    // Send the response body as "Hello World"
    res.end('Hello World\n');
 }).listen(3000);
 
 // Console will print the message
 console.log("server is running on http://127.0.0.1:3000/")
*/
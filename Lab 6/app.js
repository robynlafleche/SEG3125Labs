// Entry point for the application. 
// This is adapted from the sample provided by Professor Caroline Barriere :// https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis

// express application
var express = require('express');
// import mysql
var mysql = require("mysql");

// require the controller we make
var surveyController = require('./systemController.js');

var app = express();
var PORT = 3000;

var path = require('path');

// set up template engine
app.set('view engine', 'ejs');
// Change directory solution obtained from https://stackoverflow.com/questions/21885377/change-express-view-folder-based-on-where-is-the-file-that-res-render-is-calle
app.set('views', path.join(__dirname, '/BackEnd/ServerSide'));

// static file serving
app.use(express.static('./FrontEnd'));
app.use(express.static('./BackEnd'));

// create a connection to the database
var conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "group6"
});

app.post('/survey', function(req,res){
	var firstName = req.body.inputFirstName;
	var lastName = req.body.inputLastName;
	var email = req.body.inputEmail4;
	var phoneNumber = req.body.inputPhoneNumber;

	conn.connect(function(error){
		if (error)
			throw error;
		var sql = "INSERT INTO users (firstName, lastName, email, phoneNumber) VALUES ('"+firstName+"', "+lastName+"', '"+email"', '"+phoneNumber+"')";
		conn.query(sql, function(error, result) {
			if (error) {
				throw error;
			}
			var sql = 'UPDATE userData SET firstName ="' + firstName+'",lastName="'+ lastName+'",email="' + email+'" WHERE phoneNumber ="'+ phoneNumber+'"';
			conn.query(sql, function(error, result) {
				if (error)
					throw error;
				console.log(result.affectedRows + " records(s) updated");
			});
			res.end();
		}
	});
});


// fire function from surveyController
surveyController(app);

// listen to port
app.listen(3000);
console.log('listening port 3000');



// mySql for Node JS, how to connect the database obtained from https://www.w3schools.com/nodejs/nodejs_mysql.asp

var mysql = require('mysql');

// create the connection to the database with desired credentials
var conn = mysql.createConnection({
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	password: "group6",
});


conn.connect(function(err) {
	if (err)
		throw err;
	console.log("Successfully connected!");
	conn.query("CREATE DATABASE IF NOT EXISTS group6db", function(err, result) {
		if (err)
			throw err;
		console.log("Database successfully created!");
	});

	var sql = "CREATE TABLE IF NOT EXISTS group6db.users (userID int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), phoneNumber VARCHAR(255), PRIMARY KEY (userID))";
  	conn.query(sql, function (err, result) {
    if (err) 
    	throw err;
    console.log("users table created");

  	});

  	sql = "CREATE TABLE IF NOT EXISTS group6db.surveyResults (surveyResultID int NOT NULL AUTO_INCREMENT, \
	budgetRange VARCHAR(255), highlightLocation VARCHAR(255), readability VARCHAR(255), \
	recommendation VARCHAR(255), starRating VARCHAR(255), easinessLevel VARCHAR(255), difficultyLevel VARCHAR(255), suggestion VARCHAR(255), \
	userID INTEGER, PRIMARY KEY (surveyResultID))";
	conn.query(sql, function (err, result) {
	if (err) 
		throw err;
	console.log("surveyResults table created");	
	});


	sql = "CREATE TABLE IF NOT EXISTS group6db.favouriteFeatures (favouriteFeatureResultID int NOT NULL AUTO_INCREMENT, \
		favouriteFeatureResultChoice VARCHAR(255), surveyResultID INTEGER, PRIMARY KEY (favouriteFeatureResultID))";
	conn.query(sql, function (err, result) {
	if (err) 
		throw err;
	console.log("favouriteFeatures table created");		
	});

});

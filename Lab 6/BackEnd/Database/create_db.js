
var mysql = require('mysql');

// create the connection to the database with desired credentials
var conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "group6"
});


conn.connect(function(err) {
	if (err)
		throw err;
	console.log("Successfully connected!");
	conn.query("CREATE DATABASE group6db", function(err, result) {
		if (err)
			throw err;
		console.log("Database successfully created!");
	});
});
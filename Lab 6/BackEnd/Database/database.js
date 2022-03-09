
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
	var sql = "CREATE TABLE users (firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), phoneNumber VARCHAR(255))";
  	conn.query(sql, function (err, result) {
    if (err) 
    	throw err;
    console.log("Table created");
  });

});
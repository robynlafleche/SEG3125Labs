
var mysql = require('mysql');

// create the connection to the database with desired credentials
var conn = mysql.createConnection({
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	password: "group6",
	insecureAuth : true,
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
	var sql = "CREATE TABLE IF NOT EXISTS group6db.users (userID int NOT NULL AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), phoneNumber VARCHAR(255), PRIMARY KEY (userID))";
  	conn.query(sql, function (err, result) {
    if (err) 
    	throw err;
    console.log("Table created");
  });

});

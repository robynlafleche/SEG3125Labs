
// mySql for Node JS, how to connect the database obtained from https://www.w3schools.com/nodejs/nodejs_mysql.asp

var mysql = require('mysql');


// create the connection to the database with desired credentials
// code for connecting to the database was inspired by https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
var conn = mysql.createConnection({
	host: "209.209.40.92",
    port: "17921",
	user: "admin",
	password: "CoyKBkrM"
});


conn.connect(function(err) {
	if (err)
		throw err;
	console.log("Successfully connected!");
	conn.query("CREATE DATABASE IF NOT EXISTS escape6db", function(err, result) {
		if (err)
			throw err;
		console.log("Database successfully created!");
	});

});


// mySql for Node JS, how to connect the database obtained from https://www.w3schools.com/nodejs/nodejs_mysql.asp

// Synchronous queries obtained from https://stackoverflow.com/questions/32850045/node-js-synchronous-queries-with-mys
const Mysql = require('sync-mysql'); 


const connection = new Mysql({ 
	host: "209.209.40.92",
    port: "17921",
	user: "admin",
	password: "CoyKBkrM",
    database:'escape6db'
}); 


	
var sql = "CREATE TABLE IF NOT EXISTS escape6db.EscapeRoom(\
	RoomID INTEGER AUTO_INCREMENT, \
	RoomName VARCHAR(255) NOT NULL,\
	PricePerPlayer NUMERIC(8,2) NOT NULL, \
	RoomType VARCHAR(255) NOT NULL,\
	DifficultyLevel INTEGER NOT NULL,\
	MinimumNumberOfParticipants INTEGER NOT NULL,\
	CHECK (PricePerPlayer > 0),\
    CHECK (MinimumNumberOfParticipants > 0),\
	CHECK (RoomType IN ('Indoor', 'Outdoor', 'Virtual')),	\
	CHECK (DifficultyLevel BETWEEN 1 AND 5),\
	PRIMARY KEY (RoomID)\
	);";

connection.query(sql);
console.log("EscapeRoom table created");

sql = "CREATE TABLE IF NOT EXISTS escape6db.Timeslot(\
	TimeslotID INTEGER AUTO_INCREMENT, \
	TimeslotDescription VARCHAR(255) NOT NULL,\
	PRIMARY KEY (TimeslotID)\
	)";

connection.query(sql);
console.log("Timeslot table created");


sql = "CREATE TABLE IF NOT EXISTS escape6db.Booking(\
	ConfirmationNumber INTEGER AUTO_INCREMENT, \
	BookingDate DATE NOT NULL,\
	AllowOtherToJoin BOOLEAN NOT NULL,\
	TimeslotID INTEGER, \
	RoomID INTEGER NOT NULL, \
	PRIMARY KEY (ConfirmationNumber),\
	FOREIGN KEY (RoomID) REFERENCES EscapeRoom (RoomID) ON DELETE CASCADE ON UPDATE CASCADE,\
	FOREIGN KEY (TimeslotID) REFERENCES Timeslot (TimeslotID) ON DELETE CASCADE ON UPDATE CASCADE\
	) AUTO_INCREMENT=1053;";

connection.query(sql);
console.log("Booking table created");


sql = "CREATE TABLE IF NOT EXISTS escape6db.Customer(\
	EmailAddress VARCHAR(255),\
	PhoneNumber VARCHAR(255),\
	FirstName VARCHAR(255),\
	LastName VARCHAR(255),	\
	PRIMARY KEY (EmailAddress)\
);";

connection.query(sql);
console.log("Customer table created");



sql = "CREATE TABLE IF NOT EXISTS escape6db.RoomAvailability(\
	RoomAvailabilityID INTEGER AUTO_INCREMENT, \
	RoomID INTEGER NOT NULL, \
	TimeslotID INTEGER NOT NULL,\
	PRIMARY KEY (RoomAvailabilityID),\
	FOREIGN KEY (RoomID) REFERENCES EscapeRoom (RoomID) ON DELETE CASCADE ON UPDATE CASCADE,\
	FOREIGN KEY (TimeslotID) REFERENCES Timeslot (TimeslotID) ON DELETE CASCADE ON UPDATE CASCADE\
	);";

connection.query(sql);
console.log("RoomAvailability table created");


sql = "CREATE TABLE IF NOT EXISTS escape6db.CustomerBooking(\
	CustomerBookingID INTEGER AUTO_INCREMENT, \
	ConfirmationNumber INTEGER,\
	EmailAddress VARCHAR(255),\
	PRIMARY KEY (CustomerBookingID),\
	FOREIGN KEY (ConfirmationNumber) REFERENCES Booking (ConfirmationNumber) ON DELETE CASCADE ON UPDATE CASCADE,\
	FOREIGN KEY (EmailAddress) REFERENCES Customer (EmailAddress) ON DELETE CASCADE ON UPDATE CASCADE\
	);";

connection.query(sql);
console.log("CustomerBooking table created");






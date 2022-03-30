
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

// Escape Rooms

var RoomName = "Space Adventure"; // id : 1
var PricePerPlayer =  "30.00";
var RoomType = "Indoor";
var DifficultyLevel = "4";
var MinimumNumberOfParticipants = "4";
var sql = "INSERT INTO EscapeRoom (RoomName, PricePerPlayer, RoomType, DifficultyLevel, MinimumNumberOfParticipants) \
VALUES ('"+RoomName+"', '"+PricePerPlayer+"', '"+RoomType+"', "+"'"+DifficultyLevel+"', '"+MinimumNumberOfParticipants+"')";
connection.query(sql);


RoomName = "The Castle"; // id : 2 
PricePerPlayer =  "30.00";
RoomType = "Indoor";
DifficultyLevel = "3";
MinimumNumberOfParticipants = "4";
sql = "INSERT INTO EscapeRoom (RoomName, PricePerPlayer, RoomType, DifficultyLevel, MinimumNumberOfParticipants) \
VALUES ('"+RoomName+"', '"+PricePerPlayer+"', '"+RoomType+"', "+"'"+DifficultyLevel+"', '"+MinimumNumberOfParticipants+"')";
connection.query(sql);


RoomName = "Jungle Escape"; // id : 3
PricePerPlayer =  "20.00";
RoomType = "Outdoor";
DifficultyLevel = "3";
MinimumNumberOfParticipants = "3";
sql = "INSERT INTO EscapeRoom (RoomName, PricePerPlayer, RoomType, DifficultyLevel, MinimumNumberOfParticipants) \
VALUES ('"+RoomName+"', '"+PricePerPlayer+"', '"+RoomType+"', "+"'"+DifficultyLevel+"', '"+MinimumNumberOfParticipants+"')";
connection.query(sql);


RoomName = "Code Red"; // id : 4
PricePerPlayer =  "20.00";
RoomType = "Outdoor";
DifficultyLevel = "3";
MinimumNumberOfParticipants = "3";
sql = "INSERT INTO EscapeRoom (RoomName, PricePerPlayer, RoomType, DifficultyLevel, MinimumNumberOfParticipants) \
VALUES ('"+RoomName+"', '"+PricePerPlayer+"', '"+RoomType+"', "+"'"+DifficultyLevel+"', '"+MinimumNumberOfParticipants+"')";
connection.query(sql);


RoomName = "Undermined"; // id : 5
PricePerPlayer =  "15.00";
RoomType = "Virtual";
DifficultyLevel = 4;
MinimumNumberOfParticipants = 2;
sql = "INSERT INTO EscapeRoom (RoomName, PricePerPlayer, RoomType, DifficultyLevel, MinimumNumberOfParticipants) \
VALUES ('"+RoomName+"', '"+PricePerPlayer+"', '"+RoomType+"', "+"'"+DifficultyLevel+"', '"+MinimumNumberOfParticipants+"')";
connection.query(sql);


RoomName = "Warlocked"; // id : 6
PricePerPlayer =  "15.00";
RoomType = "Virtual";
DifficultyLevel = "3";
MinimumNumberOfParticipants = "2";
sql = "INSERT INTO EscapeRoom (RoomName, PricePerPlayer, RoomType, DifficultyLevel, MinimumNumberOfParticipants) \
VALUES ('"+RoomName+"', '"+PricePerPlayer+"', '"+RoomType+"', "+"'"+DifficultyLevel+"', '"+MinimumNumberOfParticipants+"')";
connection.query(sql);

console.log("EscapeRoom table populated");



//  Timeslots
var TimeslotDescription = "9:00 am - 10:00 am"; // id : 1
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "10:30 am - 11:30 am"; // id : 2
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "12:00 pm - 1:00 pm"; // id : 3
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "1:30 pm - 2:30 pm"; // id : 4
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "3:00 pm - 4:00 pm"; // id : 5
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "4:30 pm - 5:30 pm"; // id : 6
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "6:00 pm - 7:00 pm"; // id : 7
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "7:30 pm - 8:30 pm"; // id : 8
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);


TimeslotDescription = "9:00 am - 11:00 am"; // id : 9
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "11:30 am - 1:30 pm"; // id : 10
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "2:00 pm - 4:00 pm"; // id : 11
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "4:30 am - 6:30 pm"; // id : 12
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
connection.query(sql);

TimeslotDescription = "7:00 pm - 9:00 pm"; // id : 13
sql = "INSERT INTO Timeslot (TimeslotDescription) VALUES ('"+TimeslotDescription+"')";
var r = connection.query(sql);
console.log("Timeslot table created");



var RoomID = 1;  // Space Adventure
for (var TimeslotID = 1; TimeslotID < 9; TimeslotID++)
{
	sql = "INSERT INTO RoomAvailability (RoomID, TimeslotID) \
	VALUES ('"+RoomID+"', '"+TimeslotID+"')";
	connection.query(sql);	
}

RoomID = 2;  // The Castle
for (var TimeslotID = 1; TimeslotID < 9; TimeslotID++)
{
	sql = "INSERT INTO RoomAvailability (RoomID, TimeslotID) \
	VALUES ('"+RoomID+"', '"+TimeslotID+"')";
	connection.query(sql);
}

var RoomID = 3;  // Jungle Escape
for (var TimeslotID = 9; TimeslotID < 14; TimeslotID++)
{
	sql = "INSERT INTO RoomAvailability (RoomID, TimeslotID) \
	VALUES ('"+RoomID+"', '"+TimeslotID+"')";
	connection.query(sql);	
}

var RoomID = 4;  // Code Red
for (var TimeslotID = 9; TimeslotID < 14; TimeslotID++)
{
	sql = "INSERT INTO RoomAvailability (RoomID, TimeslotID) \
	VALUES ('"+RoomID+"', '"+TimeslotID+"')";
	connection.query(sql);	
}

RoomID = 5;  // Undermined
for (var TimeslotID = 1; TimeslotID < 9; TimeslotID++)
{
	sql = "INSERT INTO RoomAvailability (RoomID, TimeslotID) \
	VALUES ('"+RoomID+"', '"+TimeslotID+"')";
	connection.query(sql);
}


RoomID = 6;  // Warlocked
for (var TimeslotID = 1; TimeslotID < 9; TimeslotID++)
{
	sql = "INSERT INTO RoomAvailability (RoomID, TimeslotID) \
	VALUES ('"+RoomID+"', '"+TimeslotID+"')";
	connection.query(sql);
}





console.log("RoomAvailability table created");


/*
sql = "CREATE TABLE IF NOT EXISTS escape6db.Booking(\
	ConfirmationNumber INTEGER, \
	DayOfTheWeek VARCHAR(255) NOT NULL,\
	AllowOtherToJoin BOOLEAN NOT NULL,\
	Timeslot VARCHAR(255) NOT NULL,\
	RoomID INTEGER NOT NULL, \
	CHECK (DayOfTheWeek IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')),	\
	PRIMARY KEY (ConfirmationNumber),\
	FOREIGN KEY (RoomID) REFERENCES EscapeRoom (RoomID) ON DELETE CASCADE ON UPDATE CASCADE\
	);";

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



sql = "CREATE TABLE IF NOT EXISTS escape6db.Timeslot(\
	TimeslotID INTEGER, \
	TimeslotDescription VARCHAR(255) NOT NULL,\
	PRIMARY KEY (TimeslotID)\
	);";

connection.query(sql);
console.log("Timeslot table created");


sql = "CREATE TABLE IF NOT EXISTS escape6db.RoomAvailability(\
	RoomAvailabilityID INTEGER, \
	RoomID INTEGER NOT NULL, \
	TimeslotID INTEGER NOT NULL,\
	PRIMARY KEY (RoomAvailabilityID),\
	FOREIGN KEY (RoomID) REFERENCES EscapeRoom (RoomID) ON DELETE CASCADE ON UPDATE CASCADE,\
	FOREIGN KEY (TimeslotID) REFERENCES Timeslot (TimeslotID) ON DELETE CASCADE ON UPDATE CASCADE\
	);";

connection.query(sql);
console.log("RoomAvailability table created");


sql = "CREATE TABLE IF NOT EXISTS escape6db.CustomerBooking(\
	RoomAvailabilityID INTEGER, \
	RoomID INTEGER NOT NULL, \
	TimeslotID INTEGER NOT NULL,\
	PRIMARY KEY (RoomAvailabilityID),\
	FOREIGN KEY (RoomID) REFERENCES EscapeRoom (RoomID) ON DELETE CASCADE ON UPDATE CASCADE,\
	FOREIGN KEY (TimeslotID) REFERENCES Timeslot (TimeslotID) ON DELETE CASCADE ON UPDATE CASCADE\
	);";

connection.query(sql);
console.log("CustomerBooking table created");

*/




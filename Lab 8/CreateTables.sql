CREATE DATABASE IF NOT EXISTS escape6db


CREATE TABLE IF NOT EXISTS escape6db.EscapeRoom(
	RoomID INTEGER AUTO_INCREMENT, 
	RoomName VARCHAR(255) NOT NULL,
	PricePerPlayer NUMERIC(8,2) NOT NULL, 
	RoomType VARCHAR(255) NOT NULL,
	DifficultyLevel INTEGER NOT NULL,
	MinimumNumberOfParticipants INTEGER NOT NULL,
	CHECK (PricePerPlayer > 0),
    CHECK (MinimumNumberOfParticipants > 0),
	CHECK (RoomType IN ('Indoor', 'Outdoor', 'Virtual')),	
	CHECK (DifficultyLevel BETWEEN 1 AND 5),
	PRIMARY KEY (RoomID)
	);

CREATE TABLE IF NOT EXISTS escape6db.Timeslot(
	TimeslotID INTEGER, 
	TimeslotDescription VARCHAR(255) NOT NULL,
	PRIMARY KEY (TimeslotID)
	);


CREATE TABLE IF NOT EXISTS escape6db.RoomAvailability(
	RoomAvailabilityID INTEGER, 
	RoomID INTEGER NOT NULL, 
	TimeslotID INTEGER NOT NULL, 
	PRIMARY KEY (RoomAvailabilityID),
	FOREIGN KEY (RoomID) REFERENCES EscapeRoom (RoomID) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (TimeslotID) REFERENCES Timeslot (TimeslotID) ON DELETE CASCADE ON UPDATE CASCADE
	);



CREATE TABLE IF NOT EXISTS escape6db.Booking(
	ConfirmationNumber INTEGER, 
	DayOfTheWeek VARCHAR(255) NOT NULL,
	AllowOtherToJoin BOOLEAN NOT NULL,
	Timeslot VARCHAR(255) NOT NULL,
	RoomID INTEGER NOT NULL, 
	CHECK (DayOfTheWeek IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')),	
	PRIMARY KEY (ConfirmationNumber),
	FOREIGN KEY (RoomID) REFERENCES EscapeRoom (RoomID) ON DELETE CASCADE ON UPDATE CASCADE
	);


CREATE TABLE IF NOT EXISTS escape6db.Customer(
	EmailAddress VARCHAR(255),
	PhoneNumber VARCHAR(255),
	FirstName VARCHAR(255),
	LastName VARCHAR(255),	
	PRIMARY KEY (EmailAddress)
);

CREATE TABLE IF NOT EXISTS escape6db.CustomerBooking(
	CustomerBookingID INTEGER, 
	ConfirmationNumber INTEGER,
	EmailAddress VARCHAR(255),
	PRIMARY KEY (CustomerBookingID),
	FOREIGN KEY (ConfirmationNumber) REFERENCES Booking (ConfirmationNumber) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (EmailAddress) REFERENCES Customer (EmailAddress) ON DELETE CASCADE ON UPDATE CASCADE
);




// This module is adapted from the sample provided by Professor Caroline Barriere :// https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis


// This file stores the sum of all the survey results that have been entered into the system, by all users of the front-end web page.
DATABASE_FILENAME_PATH_SUMMARY = "./BackEnd/Database/cummulativeSurveyResults.json";

// The file stores every individual surver results one after the other, line by line (this will include names, emails, and phone numbers).
DATABASE_FILENAME_PATH_ALL_RESULTS = "./BackEnd/Database/individualSurveyResults.json";

// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

// import mysql
var mysql = require("mysql");

// Read a data file.
function readData(fileName){
    let dataRead = fs.readFileSync(fileName);

    if (dataRead.length == 0)
    {
        return ""
    }
    // Convert the text into a JSON object.
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// Write to a data file
function writeData(info, fileName){
    data = JSON.stringify(info); // Convert the JSON object into a string.
    fs.writeFileSync(fileName, data);
}

// Append the given data at the end of the file (the content that is already in the file will still be in the file - it does not get erased).
function appendData(jsonSurveyResults, dbFilePath)
{
    data = JSON.stringify(jsonSurveyResults); // Convert the JSON object into a string.  
    fs.appendFileSync(dbFilePath, data);
    fs.appendFileSync(dbFilePath, "\n"); // Add a new line so we can see each entry line by line.
}

function addSurveyResultsToDatabaseJSON(jsonSurveyResults)
{
    // Add a specific survey entry, that a user just submitted to the database (both of the JSON databases).
    
    // Append the survey result at the end of the first JSON database.
    appendData(jsonSurveyResults, DATABASE_FILENAME_PATH_ALL_RESULTS);

    // Now work on the main database that stores the sum of all the results.

    // Grab the current database content.
    var currentCummulativeResults = readData(DATABASE_FILENAME_PATH_SUMMARY);

    if (currentCummulativeResults == "")
    {
        // No data at all - this is the first person to fill out the survey.
        currentCummulativeResults = {}; // Initialize the database content.

        // Survey Question 1
        currentSurveyQuestionName = "Which budget range did the website advertise the most?"
        currentCummulativeResults[currentSurveyQuestionName] = {};
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName)
        
        // Survey Question 2 (this one is a bit special because it is 'check all that apply').
        currentSurveyQuestionName = "What was your favourite feature of the website?";
        currentCummulativeResults[currentSurveyQuestionName] = {};
        currentNewlySelectedFeatures = jsonSurveyResults[currentSurveyQuestionName];

        if (currentNewlySelectedFeatures == undefined)
        {
            // Do nothing as user has not selected any of the checkboxes.
        }
        else if (JSON.stringify(currentNewlySelectedFeatures).includes(","))
        {
            // More than 1 checkbox is selected
            var proxyJsonSurveyResults = {}
            for (var favoriteFeatureIndex in currentNewlySelectedFeatures)
            {
                var currentNewlySelectedFavouriteFeature = currentNewlySelectedFeatures[favoriteFeatureIndex];
                proxyJsonSurveyResults[currentSurveyQuestionName] = currentNewlySelectedFavouriteFeature;
                addNewSurveyQuestionResultToDatabase(proxyJsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);
            }            
        }
        else
        {
            // Only 1 checkbox selected.
            var proxyJsonSurveyResults = {};
            proxyJsonSurveyResults[currentSurveyQuestionName] = currentNewlySelectedFeatures;
            addNewSurveyQuestionResultToDatabase(proxyJsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);
        }


        // Survey Question 3
        currentSurveyQuestionName = "Airbnb Highlight Location";
        currentCummulativeResults[currentSurveyQuestionName] = {};
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName) ;
        
        // Survey Question 4
        currentSurveyQuestionName = "How likely are you to recommend Airbnb to a friend or colleague?";
        currentCummulativeResults[currentSurveyQuestionName] = {};
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);
                
        // Survey Question 5
        currentSurveyQuestionName = "How would you rate the overall appearance of the website?";
        currentCummulativeResults[currentSurveyQuestionName] = {};
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);

        // Survey Question 6
        currentSurveyQuestionName = "How easy was it for you to find a place to stay in your destination of choice?";
        currentCummulativeResults[currentSurveyQuestionName] = {};
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);
        
        // Survey Question 7
        currentSurveyQuestionName = "How readable are the characters displayed on the website?";
        currentCummulativeResults[currentSurveyQuestionName] = {};
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);

        // Survey Question 8
        currentSurveyQuestionName = "How would you rank the difficulty of signing up for an account on Airbnb?";
        currentCummulativeResults[currentSurveyQuestionName] = {};
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);

        // Survey Question 9
        currentSurveyQuestionName = "Suggestions about the user interface experience";
        currentCummulativeResults[currentSurveyQuestionName] = {};
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);

        writeData(currentCummulativeResults, DATABASE_FILENAME_PATH_SUMMARY);
    }
    else
    {
        // There is at least 1 survey already in the database.

        // Survey Question 1
        currentSurveyQuestionName = "Which budget range did the website advertise the most?"
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName)

        // Survey Question 2
        currentSurveyQuestionName = "What was your favourite feature of the website?";
        currentNewlySelectedFeatures = jsonSurveyResults[currentSurveyQuestionName];

        if (currentNewlySelectedFeatures == undefined)
        {
            // Do nothing as user has not selected any of the checkboxes.
        }
        else if (JSON.stringify(currentNewlySelectedFeatures).includes(","))
        {
            // More than 1 checkbox is selected
            var proxyJsonSurveyResults = {}
            for (var favoriteFeatureIndex in currentNewlySelectedFeatures)
            {
                var currentNewlySelectedFavouriteFeature = currentNewlySelectedFeatures[favoriteFeatureIndex];
                proxyJsonSurveyResults[currentSurveyQuestionName] = currentNewlySelectedFavouriteFeature;
                addNewSurveyQuestionResultToDatabase(proxyJsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);
            }            
        }
        else
        {
            // Only 1 checkbox selected.
            var proxyJsonSurveyResults = {};
            proxyJsonSurveyResults[currentSurveyQuestionName] = currentNewlySelectedFeatures;
            addNewSurveyQuestionResultToDatabase(proxyJsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);
        }


        // Survey Question 3
        currentSurveyQuestionName = "Airbnb Highlight Location";
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName) ;
        
        // Survey Question 4
        currentSurveyQuestionName = "How likely are you to recommend Airbnb to a friend or colleague?";
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);
                
        // Survey Question 5
        currentSurveyQuestionName = "How would you rate the overall appearance of the website?";
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);

        // Survey Question 6
        currentSurveyQuestionName = "How easy was it for you to find a place to stay in your destination of choice?";
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);
        
        // Survey Question 7
        currentSurveyQuestionName = "How readable are the characters displayed on the website?";
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);

        // Survey Question 8
        currentSurveyQuestionName = "How would you rank the difficulty of signing up for an account on Airbnb?";
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);

        // Survey Question 9
        currentSurveyQuestionName = "Suggestions about the user interface experience";
        addNewSurveyQuestionResultToDatabase(jsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName);

        writeData(currentCummulativeResults, DATABASE_FILENAME_PATH_SUMMARY);

    }


    function addNewSurveyQuestionResultToDatabase(newInputJSonSurveyResults, currentCummulativeAllSurveyResults, currentSurveyQuestionName)
    {
        // Grab the user's input for the current given question.
        var newSurveyQuestionInput = newInputJSonSurveyResults[currentSurveyQuestionName];

        // Grab the sum of all results for the current given question. 
        var cummulativeSurveyQuestionResults = currentCummulativeAllSurveyResults[currentSurveyQuestionName]; 
        
        // Search to see if the input provided by the user already exists in the database. If so, increment its counter.
        var valueFound = false;
        for (var surveyQuestionResult in cummulativeSurveyQuestionResults)
        {
            if (surveyQuestionResult == newSurveyQuestionInput)
            {
                // Increment its counter.
                cummulativeSurveyQuestionResults[surveyQuestionResult] = parseInt(cummulativeSurveyQuestionResults[surveyQuestionResult]) + 1;
                valueFound = true;
            }
        }

        if (!valueFound)
        {
            // This is a brand new entry. Start off at 1.
            cummulativeSurveyQuestionResults[newSurveyQuestionInput] = 1;
        }

        // Update the content of the database for the specific question with its values now having been updated.
        currentCummulativeAllSurveyResults[currentSurveyQuestionName] = cummulativeSurveyQuestionResults;        
    }
}

// Above this line is the JSON implementation of the database. Below this line is the SQL implementation of the database.

// create a connection to the database
var conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "group6"
});

conn.connect(function(error){
	if (error)
		throw error;	
	else{
		console.log("connected to database");
	}
});


function addSurveyResultsToDatabaseMySQL(jsonSurveyResults)
{
	console.log("jsonSurveyResults :");
	console.log(jsonSurveyResults);  

	var firstName = jsonSurveyResults["inputFirstName"];
	var lastName = jsonSurveyResults["inputLastName"];
	var email = jsonSurveyResults["inputEmail4"];
	var phoneNumber = jsonSurveyResults["inputPhoneNumber"];

	var sql = "INSERT INTO group6db.users (firstName, lastName, email, phoneNumber) VALUES ('"+firstName+"', '"+lastName+"', '"+email+"', '"+phoneNumber+"')";
	conn.query(sql, function(error, result) {
		if (error) {
			throw error;
        }
	}); 
    
    // Get the foreigh key userID from the latest entry
    var userID = -1;
    conn.query("SELECT MAX(userID) as userID FROM group6db.users", function (err, result, fields) {
        if (err) throw err;
        userID = result[0].userID;
        console.log("userID1 = " + userID);

        var budgetRange = jsonSurveyResults["Which budget range did the website advertise the most?"];
        var highlightLocation = jsonSurveyResults["Airbnb Highlight Location"];
        var readability = jsonSurveyResults["How readable are the characters displayed on the website?"];
        var recommendation = jsonSurveyResults["How likely are you to recommend Airbnb to a friend or colleague?"];
        var starRating = jsonSurveyResults["selected_rating"];
        var easinessLevel = jsonSurveyResults["How easy was it for you to find a place to stay in your destination of choice?"];
        var difficultyLevel = jsonSurveyResults["How would you rank the difficulty of signing up for an account on Airbnb?"];
        var suggestion = jsonSurveyResults["Suggestions about the user interface experience"];

        sql = "INSERT INTO group6db.surveyResults (budgetRange, highlightLocation, readability, recommendation, starRating, easinessLevel, difficultyLevel, suggestion, userID) \
            VALUES ('"+budgetRange+"', '"+highlightLocation+"', '"+readability+"', '"+recommendation+"', '"+starRating+"', '"+easinessLevel+"', \
            '"+difficultyLevel+"', '"+suggestion+"', '"+userID+"')";

            conn.query(sql, function(error, result) {
            if (error) {
                throw error;
            }
        }); 
    
        var currentNewlySelectedFeatures = jsonSurveyResults["What was your favourite feature of the website?"];
        console.log("currentNewlySelectedFeatures = " + currentNewlySelectedFeatures);

        var listOfFeaturesToAddToDB = [];

        if (currentNewlySelectedFeatures == undefined)
        {
            // Do nothing as user has not selected any of the checkboxes.
        }
        else if (JSON.stringify(currentNewlySelectedFeatures).includes(","))
        {
            // More than 1 checkbox is selected
            for (var favoriteFeatureIndex in currentNewlySelectedFeatures)
            {
                var currentNewlySelectedFavouriteFeature = currentNewlySelectedFeatures[favoriteFeatureIndex];
                listOfFeaturesToAddToDB.push(currentNewlySelectedFavouriteFeature);
            }            
        }
        else
        {
            // Only 1 checkbox selected.
            listOfFeaturesToAddToDB.push(currentNewlySelectedFeatures);
        }


        // Get the foreigh key surveyResultID from the latest entry
        var surveyResultID = -1;
        conn.query("SELECT MAX(surveyResultID) as surveyResultID FROM group6db.surveyResults", function (err, result, fields) {
            if (err) throw err;
            surveyResultID = result[0].surveyResultID;
            console.log("surveyResultID = " + surveyResultID);

            for (var i = 0; i<listOfFeaturesToAddToDB.length; i++)
            {
                var currentFeature = listOfFeaturesToAddToDB[i];

                sql = "INSERT INTO group6db.favouriteFeatures (favouriteFeatureResultChoice, surveyResultID) \
                VALUES ('"+currentFeature+"', '"+surveyResultID+"')";
            
                conn.query(sql, function(error, result) {
                    if (error) {
                        throw error;
                    }
                });             

            }
        });

      });
}

function obtainAndDisplayAllSurveyResultsFromMySQLDatabase()
{
	var sql = "SELECT * FROM group6db.surveyResults"; // NATURAL JOIN group6db.favouriteFeatures";
	conn.query(sql, function (error, result, fields) {
		if (error) {
			throw error;
        }

        //console.log("result = ");
        //console.log(result);

        currentCummulativeResultsJSON_X = convertDBResultsFromMySQLToJSON(result);
        console.log("currentCummulativeResultsJSON_X =");
        console.log(currentCummulativeResultsJSON_X);          

        return result;
	});  
    
}

function convertDBResultsFromMySQLToJSON(dbResultsSQL)
{
    var jsonEquivalentSurveyDisplayableResults = {};

    var alreadyEncounteredSurveryResultIDs = [];

    const sqlNamesToDisplayNamesMap = {
        'budgetRange': 'Which budget range did the website advertise the most?',
        'highlightLocation': 'Airbnb Highlight Location',
        'recommendation': 'How likely are you to recommend Airbnb to a friend or colleague?',
        'starRating': 'How would you rate the overall appearance of the website?',
        'easinessLevel': 'How easy was it for you to find a place to stay in your destination of choice?',
        'readability': 'How readable are the characters displayed on the website?',
        'difficultyLevel': 'How would you rank the difficulty of signing up for an account on Airbnb?',
        'suggestion': 'Suggestions about the user interface experience'
    };

    // JSON iteration solution obtained from https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
    // JSON stringification of RowDataPacket obtained from https://stackoverflow.com/questions/31221980/how-to-access-a-rowdatapacket-object

    console.log("dbResultsSQL = " + dbResultsSQL);
    var jsonEquivalentSurveyResultsString = JSON.stringify(dbResultsSQL);
    console.log("jsonEquivalentSurveyResultsString = " + jsonEquivalentSurveyResultsString);

    var jsonEquivalentSurveyResults =  JSON.parse(jsonEquivalentSurveyResultsString);

    console.log("jsonEquivalentSurveyResults = " + jsonEquivalentSurveyResults);
    console.log(jsonEquivalentSurveyResults);

    for (var jsonSurveyResultIndex in jsonEquivalentSurveyResults) {
        console.log("jsonEquivalentSurveyResult = ");
        console.log(jsonEquivalentSurveyResults[jsonSurveyResultIndex]);

        var currentDBSurveyResultJSONFormat = jsonEquivalentSurveyResults[jsonSurveyResultIndex];

        var surveyResultID = currentDBSurveyResultJSONFormat["surveyResultID"];

        /*if (alreadyEncounteredSurveryResultIDs.includes(surveyResultID))
        {
            // Skip since we do not want to double count - this happens because of the SQL JOIN operation (but that stuff is no more now, has been removed)
            continue;
        } 
        else
        {
            alreadyEncounteredSurveryResultIDs.push(surveyResultID);
        }      */ 

        for (var sqlNameKey in sqlNamesToDisplayNamesMap) 
        {   
            console.log("sqlNameKey = " + sqlNameKey);
            //console.log("sqlNamesToDisplayNamesMap.hasOwnProperty(sqlNameKey) = ");
            //console.log(sqlNamesToDisplayNamesMap.hasOwnProperty(sqlNameKey));

            var equivalentDisplayName = sqlNamesToDisplayNamesMap[sqlNameKey];

            if (currentDBSurveyResultJSONFormat.hasOwnProperty(sqlNameKey))
            {

                console.log("currentDBSurveyResultJSONFormat[surveyResultID] = " + currentDBSurveyResultJSONFormat["surveyResultID"]);

                // The current survey result does have an entry for the current survey question.
                if (!jsonEquivalentSurveyDisplayableResults.hasOwnProperty(equivalentDisplayName))
                {
                    // Initialize the setting for this field for our final result, if it does not already exist.
                    console.log("equivalentDisplayName = " + equivalentDisplayName);
                    jsonEquivalentSurveyDisplayableResults[equivalentDisplayName] = {}
                }

                var sqlDataValue = currentDBSurveyResultJSONFormat[sqlNameKey]; // for example, this could be '50-60$ / night'.
                if (!jsonEquivalentSurveyDisplayableResults[equivalentDisplayName].hasOwnProperty(sqlDataValue))
                {
                    jsonEquivalentSurveyDisplayableResults[equivalentDisplayName][sqlDataValue] = 1;
                }
                else
                {
                    // Increment its counter.
                    jsonEquivalentSurveyDisplayableResults[equivalentDisplayName][sqlDataValue] = parseInt(jsonEquivalentSurveyDisplayableResults[equivalentDisplayName][sqlDataValue]) + 1;                    
                }

            }

        }

    }

    /*
    for (var dbSurveyEntry of dbResultsSQL)
    {
        for (var sqlNameKey in sqlNamesToDisplayNamesMap) 
        {
            console.log("sqlNameKey = " + sqlNameKey);
        }
    }
    */

    return jsonEquivalentSurveyDisplayableResults;
}




// This is the controler per se, with the get/post
module.exports = function(app){

    // when a user goes to localhost:3000/surveyResults
    // serve a template (ejs file) to which we provide all the surver results from out database.
    app.get('/surveyResults', function(req, res){

        // Obtain all the survey results from our JSON database into a JSON object.
        var currentCummulativeResultsJSON = readData(DATABASE_FILENAME_PATH_SUMMARY);
        //console.log("currentCummulativeResultsJSON :");
        //console.log(currentCummulativeResultsJSON);


        obtainAndDisplayAllSurveyResultsFromMySQLDatabase();

        // Obtain all the survey results from our MySQL database into a JSON object.
        //var currentCummulativeResultsSQL = obtainAllSurveyResultsFromMySQLDatabase();
        //currentCummulativeResultsJSON_X = convertDBResultsFromMySQLToJSON(currentCummulativeResultsSQL);
        //console.log("currentCummulativeResultsJSON_X :");
        //console.log(currentCummulativeResultsJSON_X);        

               
        // Provide the complete database JSON object to the back-end server EJS file so it can render that data nicely on the server web page.
        res.render('surveyResultsPage', {allSurveyResults: currentCummulativeResultsJSON});
    });

    // when a user goes to localhost:3000/homepage
    // this just gets us the homepage on which the user can navigate to the survey page.
    app.get('/homepage', function(req, res){
        var currentDiectory = __dirname;
        res.sendFile(currentDiectory +'/FrontEnd/index.html');
    });

    // when a user goes to localhost:3000/survey
    // serve a static html (the survey page the user fills in)
    app.get('/survey', function(req, res){
        var currentDiectory = __dirname;
        res.sendFile(currentDiectory +'/FrontEnd/survey.html');
    });    

    
    // When a user pressed the submit button on the survey page on localhost:3000/survey 
    app.post('/survey', urlencodedParser, function(req, res){
        //Solution for [Object: null prototype] removal obtained from https://stackoverflow.com/questions/56298481/how-to-fix-object-null-prototype-title-product
        const surveyInputResults = JSON.parse(JSON.stringify(req.body)); // gets rid of the [Object: null prototype]
        // Add the survey input the user just provided to the database.
        addSurveyResultsToDatabaseJSON(surveyInputResults);
        addSurveyResultsToDatabaseMySQL(surveyInputResults);
    });
    

};
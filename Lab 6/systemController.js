// This module is adapted from the sample provided by Professor Caroline Barriere :// https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis


// This file stores the sum of all the survey results that have been entered into the system, by all users of the front-end web page.
DATABASE_FILENAME_PATH_SUMMARY = "./BackEnd/Database/cummulativeSurveyResults.json";

// The file stores every individual surver results one after the other, line by line (this will include names, emails, and phone numbers).
DATABASE_FILENAME_PATH_ALL_RESULTS = "./BackEnd/Database/individualSurveyResults.json";

// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

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

function addSurveyResultsToDatabase(jsonSurveyResults)
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

        var proxyJsonSurveyResults = {}
        for (var favoriteFeatureIndex in currentNewlySelectedFeatures)
        {
            var currentNewlySelectedFavouriteFeature = currentNewlySelectedFeatures[favoriteFeatureIndex];
            proxyJsonSurveyResults[currentSurveyQuestionName] = currentNewlySelectedFavouriteFeature;
            addNewSurveyQuestionResultToDatabase(proxyJsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName)
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

        var proxyJsonSurveyResults = {}
        for (var favoriteFeatureIndex in currentNewlySelectedFeatures)
        {
            var currentNewlySelectedFavouriteFeature = currentNewlySelectedFeatures[favoriteFeatureIndex];
            proxyJsonSurveyResults[currentSurveyQuestionName] = currentNewlySelectedFavouriteFeature;
            addNewSurveyQuestionResultToDatabase(proxyJsonSurveyResults, currentCummulativeResults, currentSurveyQuestionName)
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





// This is the controler per se, with the get/post
module.exports = function(app){

    // when a user goes to localhost:3000/surveyResults
    // serve a template (ejs file) to which we provide all the surver results from out database.
    app.get('/surveyResults', function(req, res){

        // Obtain all the surver results from our database into a JSON object.
        var currentCummulativeResults = readData(DATABASE_FILENAME_PATH_SUMMARY);
        console.log("currentCummulativeResults :");
        console.log(currentCummulativeResults);
        // Provide the complete database JSON object to the back-end server EJS file so it can render that data nicely on the server web page.
        res.render('surveyResultsPage', {allSurveyResults: currentCummulativeResults});
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
        addSurveyResultsToDatabase(surveyInputResults);
    });
    

};
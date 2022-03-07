// This module is adapted from the sample provided by Professor Caroline Barriere :// https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis


DATABASE_FILENAME_PATH_SUMMARY = "./BackEnd/Database/cummulativeSurveyResults.json";
DATABASE_FILENAME_PATH_ALL_RESULTS = "./BackEnd/Database/individualSurveyResults.json";


// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

// read the data file
function readData(fileName){
    let dataRead = fs.readFileSync(fileName);
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName){
    data = JSON.stringify(info);
    fs.writeFileSync(fileName, data);
}

// update the data file, I use "name" to be equal to fruit, or animal or color
// to match with the file names
// I assume we always just add 1 to a single item
function combineCounts(name, value){
    // console.log(value);
    info = readData(name);
     // will be useful for text entry, since the item typed in might not be in the list
    var found = 0;
    for (var i=0; i<info.length; i++){
        if (info[i][name] === value){
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0){
        info.push({[name] : value, count: 1});
    }
    writeData(info, name);
}

function appendData(jsonSurveyResults, dbFilePath)
{
    data = JSON.stringify(jsonSurveyResults);
    fs.appendFileSync(dbFilePath, "\n");
    fs.appendFileSync(dbFilePath, data);
}

function addSurveyResultsToDatabase(jsonSurveyResults)
{
    appendData(jsonSurveyResults, DATABASE_FILENAME_PATH_ALL_RESULTS);
    /*for (var key in jsonSurveyResults){
        //console.log(key + ": " + json[key]);
        // in the case of checkboxes, the user might check more than one
        if ((key === "What was your favourite feature of the website?") && (jsonSurveyResults[key].length > 1)){
            for (var item in jsonSurveyResults[key]){
                combineCounts(key, jsonSurveyResults[key][item]);
            }
        }
        else {
            combineCounts(key, jsonSurveyResults[key]);
        }
    }*/
}

// This is the controler per se, with the get/post
module.exports = function(app){

    // when a user goes to localhost:3000/analysis
    // serve a template (ejs file) which will include the data from the data files
    app.get('/surveyResults', function(req, res){
        //var color = readData("color");
        //var fruit = readData("fruit");
        //var animal = readData("animal");
        //res.render('showResults', {results: [color, fruit, animal]});
        console.log("on surveyResults");
    });

    // when a user goes to localhost:3000/survey
    // serve a static html (the survey itself to fill in)
    app.get('/homepage', function(req, res){
        console.log("__dirname = " + __dirname);
        var currentDiectory = __dirname;
        // Drop the last 2 directories to take the path up to the main directory. Solution obtained from https://stackoverflow.com/questions/16750524/remove-last-directory-in-url
        //var mainDirectory = currentDiectory.substring(0, currentDiectory.lastIndexOf('\\'));
        //mainDirectory = mainDirectory.substring(0, mainDirectory.lastIndexOf('\\'));
        //console.log("mainDirectory = " + mainDirectory);
        res.sendFile(currentDiectory +'/FrontEnd/index.html');
    });


    app.get('/survey', function(req, res){
        console.log("__dirname = " + __dirname);
        var currentDiectory = __dirname;
        // Drop the last 2 directories to take the path up to the main directory. Solution obtained from https://stackoverflow.com/questions/16750524/remove-last-directory-in-url
        //var mainDirectory = currentDiectory.substring(0, currentDiectory.lastIndexOf('\\'));
        //mainDirectory = mainDirectory.substring(0, mainDirectory.lastIndexOf('\\'));
        //console.log("mainDirectory = " + mainDirectory);
        res.sendFile(currentDiectory +'/FrontEnd/survey.html');
    });    

    
    // when a user types SUBMIT in localhost:3000/survey 
    app.post('/survey', urlencodedParser, function(req, res){
        //Solution for [Object: null prototype] removal obtained from https://stackoverflow.com/questions/56298481/how-to-fix-object-null-prototype-title-product
        const surveyInputResults = JSON.parse(JSON.stringify(req.body));
        console.log(surveyInputResults);

        addSurveyResultsToDatabase(surveyInputResults);
        
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        //res.sendFile(__dirname + "/views/niceSurvey.html");
    });
    

};
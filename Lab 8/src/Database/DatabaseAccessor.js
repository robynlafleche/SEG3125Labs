const Mysql = require('sync-mysql'); 


const connection = new Mysql({ 
	host: "209.209.40.92",
    port: "17921",
	user: "admin",
	password: "CoyKBkrM",
    database:'escape6db'
}); 



function getAllRoomsInfo()
{
    var sql = "SELECT * FROM EscapeRoom";
    var queryResult = connection.query(sql);
    //console.log(queryResult);

    return queryResult
}


//getAllRoomsInfo();



// This is the controler per se, with the get/post
module.exports = function(app){

    // when a user goes to localhost:3001/getAllRoomsInfo
    // serve a template (ejs file) to which we provide all the surver results from out database.
    app.get('/getAllRoomsInfo', function(req, res){

        console.log(req);
        console.log("Received");
        //res = getAllRoomsInfo();
        var allRoomsInfo = getAllRoomsInfo();
        console.log("type of :")
        console.log(allRoomsInfo)
        console.log(typeof allRoomsInfo);
        console.log("type of end")

        myObj = {"name":"John", "age":30, "car":null};
        res.send(allRoomsInfo);

        // Obtain all the survey results from our JSON database into a JSON object.
        //var currentCummulativeResultsJSON = readData(DATABASE_FILENAME_PATH_SUMMARY);
        //console.log("currentCummulativeResultsJSON :");
        //console.log(currentCummulativeResultsJSON);

        // Get the data from the new SQL database instead of the old JSON database.
        //obtainAndDisplayAllSurveyResultsFromMySQLDatabase(res);
               
        // Provide the complete database JSON object to the back-end server EJS file so it can render that data nicely on the server web page.
        // This is no longer being used, the SQL database is used now instead of the JSON database.
        //res.render('surveyResultsPage', {allSurveyResults: currentCummulativeResultsJSON});
    });

    app.post('/getAllRoomsInfo', async (req, res) => {

        console.log(req);
        console.log("POST Received");
        // Obtain all the survey results from our JSON database into a JSON object.
        //var currentCummulativeResultsJSON = readData(DATABASE_FILENAME_PATH_SUMMARY);
        //console.log("currentCummulativeResultsJSON :");
        //console.log(currentCummulativeResultsJSON);

        // Get the data from the new SQL database instead of the old JSON database.
        //obtainAndDisplayAllSurveyResultsFromMySQLDatabase(res);
               
        // Provide the complete database JSON object to the back-end server EJS file so it can render that data nicely on the server web page.
        // This is no longer being used, the SQL database is used now instead of the JSON database.
        //res.render('surveyResultsPage', {allSurveyResults: currentCummulativeResultsJSON});
    })    

    /*app.get('/dbServer', function(req, res){
        res.json({ message: "DB Server up and running" });
    });*/
    


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
    /*app.post('/survey', urlencodedParser, function(req, res){
        //Solution for [Object: null prototype] removal obtained from https://stackoverflow.com/questions/56298481/how-to-fix-object-null-prototype-title-product
        const surveyInputResults = JSON.parse(JSON.stringify(req.body)); // gets rid of the [Object: null prototype]
        // Add the survey input the user just provided to the database.
        addSurveyResultsToDatabaseJSON(surveyInputResults);
        addSurveyResultsToDatabaseMySQL(surveyInputResults);
    });*/
    

};
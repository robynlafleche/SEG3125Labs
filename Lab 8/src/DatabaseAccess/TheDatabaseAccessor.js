
var fs = require('fs');

var DATABASE_FILENAME_PATH_FAQ = "../Database/FAQ.json";



// Read a data file.
function readData(fileName){
    let dataRead = fs.readFileSync(fileName);

    if (dataRead.length === 0)
    {
        return ""
    }
    // Convert the text into a JSON object.
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}


function getAllFAQ()
{
    var allFAQs = readData(DATABASE_FILENAME_PATH_FAQ)

    console.log(allFAQs)
}

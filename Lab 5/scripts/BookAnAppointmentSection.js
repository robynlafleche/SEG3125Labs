
// Global entities
var haircuttersToServicesOfferedMap = new Map([]);
// All haircutters are capable of doing cuts of any size (short, medium, and large).

// Haircut styles for Amanda O'Neill
const oNeilStyles = ["partialFoilCheckbox", "tonerCheckbox", "upDoCheckbox", "bridalUpDoCheckbox",            "shortCutCheckbox", "mediumCutCheckbox", "longCutCheckbox"];
const boucherStyles = ["balayageCheckbox", "upDoCheckbox", "bridalUpDoCheckbox",                       "shortCutCheckbox", "mediumCutCheckbox", "longCutCheckbox"];
const macleanStyles = ["tonerCheckbox", "balayageCheckbox", "formalStyleCheckbox",                       "shortCutCheckbox", "mediumCutCheckbox", "longCutCheckbox"];
const rocanStyles = ["partialFoilCheckbox", "formalStyleCheckbox", "upDoCheckbox", "bridalUpDoCheckbox",     "shortCutCheckbox", "mediumCutCheckbox", "longCutCheckbox"];

var stylistIdToListOfServicesMap = new Map([]);
stylistIdToListOfServicesMap.set("ONeil", oNeilStyles);
stylistIdToListOfServicesMap.set("Boucher", boucherStyles);
stylistIdToListOfServicesMap.set("Maclean", macleanStyles);
stylistIdToListOfServicesMap.set("Rocan", rocanStyles);

const mutuallyExclusiveSetsOfCheckboxed = [ ["shortCutCheckbox", "mediumCutCheckbox", "longCutCheckbox"], 
                                                    ["partialFoilCheckbox", "tonerCheckbox", "balayageCheckbox"],   
                                                    ["upDoCheckbox", "formalStyleCheckbox", "bridalUpDoCheckbox"] ];







$(document).ready(function(){

  
  /* Change detection obtained from https://www.codegrepper.com/code-examples/javascript/jquery+checkbox+change+event */
  $('input[type="checkbox"]').change(function() {

    if (this.checked)
    {
      // A checkbox just got checked, must uncheck all checkboxes in the same group.
      for (var i = 0; i < mutuallyExclusiveSetsOfCheckboxed.length; i++) {
       
        var currentMEGroup = mutuallyExclusiveSetsOfCheckboxed[i];

        var IDFound = false;
        for (var j = 0; j < currentMEGroup.length; j++)
        {
          if (currentMEGroup[j] == this.id)
          {
            IDFound = true;            
          }
        }

        if (IDFound)
        {
          // Uncheck all the other checkboxes in the current group.
          for (var j = 0; j < currentMEGroup.length; j++)
          {
            //console.log("\n");
            //console.log("currentMEGroup[j] = " + currentMEGroup[j]);
            //console.log("this.id = " + this.id);
            var toCheck = currentMEGroup[j] == this.id;
            //console.log("toCheck = " + toCheck);
            // Solution to check/uncheck obtained from https://stackoverflow.com/questions/17420534/check-uncheck-checkbox-using-jquery
            $("#"+ currentMEGroup[j]).prop('checked', toCheck);
          }          
        }
      }      
    }

    updateStylistAvailableComboBox();

    //alert ("The element with id " + this.id + " changed : " + this.checked);
});







  $("#BookAnAppointmentButton").click(function(){
    
    // 1) Start by verifying the first name field.
    var firstNameEntered = $("#firstNameBookingFormInput").val();
    var firstNameRegexp = /^[a-zA-Z ]*$/;

    if (firstNameEntered == "")
    {
      alert("The first name field is required.");
      return;
    }
    else if (!firstNameRegexp.test(firstNameEntered))
    {
      alert("The first name field can only contain characters and spaced.");
    }


    // 2) The last name field.
    var lastNameEntered = $("#firstNameBookingFormInput").val();
    var lastNameRegexp = /^[a-zA-Z ]*$/;

    if (lastNameEntered == "")
    {
      alert("The last name field is required.");
      return;
    }
    else if (!lastNameRegexp.test(lastNameEntered))
    {
      alert("The last name field can only contain characters and spaced.");
    }

    // 3) The phone number field.
    var phoneNumberEntered = $("#phoneNumberInput").val();
    // Validation regular expression for phone number was obtained from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
    var phoneNumberRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phoneNumberEntered == "")
    {
      alert("The phone number field is required.");
      return;
    }
    else if (!phoneNumberRegExp.test(phoneNumberEntered))
    {
      alert("Please enter a valid phone number in the form of XXX-XXX-XXXX.");
    }
    
    // 4) The email field.    
    var emailEntered = $("#emailBookingFormInput").val();
    var emailAddressRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailEntered == "")
    {
      alert("The email field is required");
      return;
    }
    else if (!emailAddressRegexp.test(emailEntered)) 
    {
      alert("Please enter a valid email address.");
      return ;
    } 
  });


});


function getAllSelectedServices()
{
  var listOfSelectedServices = [];

  for (var i = 0; i < mutuallyExclusiveSetsOfCheckboxed.length; i++)
  {
    var currentMEGroup = mutuallyExclusiveSetsOfCheckboxed[i];

    for (var j = 0; j < currentMEGroup.length; j++)
    {
      if($("#" + currentMEGroup[j]).is(':checked'))
      {
        listOfSelectedServices.push(currentMEGroup[j]);
      }
    } 
  }

  return listOfSelectedServices;
}


function obtainAllStylistForSelectedServices(pListOfSelectedServices)
{

  console.log("pListOfSelectedServices = " + pListOfSelectedServices);

  var listOfMatchedStylists = [];

  stylistIdToListOfServicesMap.forEach (function(listOfServicesOfferedByStylist, stylistID) {
  
  var numberOfServicesMatched = 0;
  for (var i = 0; i < pListOfSelectedServices.length; i++)
  {
    for (var j = 0; j < listOfServicesOfferedByStylist.length; j++)
    {
      if (pListOfSelectedServices[i] == listOfServicesOfferedByStylist[j])
      {
        numberOfServicesMatched = numberOfServicesMatched + 1;
      }
    } 
  }

  if (numberOfServicesMatched == pListOfSelectedServices.length)
  {
    listOfMatchedStylists.push(stylistID);

  }

  })
  
  return listOfMatchedStylists;
}


function updateStylistAvailableComboBox() 
{
  var listOfSelectedServices = getAllSelectedServices();

  var stylistSelectionAvailable = listOfSelectedServices.length == 0;
  $("#dropdownMenuButtonForStylists").prop('disabled', stylistSelectionAvailable);

  availableStylists = obtainAllStylistForSelectedServices(listOfSelectedServices);


}



/*
function bookAppointment() {

      var firstNameEntered = document.getElementById("firstNameBookingFormInput").value;
    if (firstNameEntered == "")
    {
      alert("The first name field is required");
      return;
    } 
  
    var lastNameEntered = document.getElementById("lastNameBookingFormInput").value;
    if (lastNameEntered == "")
    {
      alert("The last name field is required");
      return;
    }   
    
    var phoneNumberEntered = document.getElementById("phoneNumberInput").value;
    if (phoneNumberEntered == "")
    {
      alert("The phone number field is required");
      return;
    }      
  

    var emailEntered = document.getElementById("emailBookingFormInput").value;
    if (emailEntered == "")
    {
      alert("The email field is required");
      return;
    }
    // Must validate the email address entered
    // Validation regular was expression obtained from https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
    var emailAddressRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailAddressRegexp.test(emailEntered)) 
    {
      alert('The email address entered is invalid.');
      return ;
    } 
    

    var serviceSelected = document.getElementById("dropdownMenuButtonForServices").value;
    if (serviceSelected == "Select a service")
    {
      alert("The service is required");
      return;
    }

    var stylistSelected = document.getElementById("dropdownMenuButtonForStylists").value;
    if (stylistSelected == "Select a stylist")
    {
      alert("The stylist is required");
      return;
    }    


    var dateSelected = document.getElementById("dateInput").value;
    if (dateSelected == "")
    {
      alert("The date is required");
      return;
    }   
    
    var timeSelected = document.getElementById("timeInput").value;
    if (timeSelected == "")
    {
      alert("The time is required");
      return;
    }     

    
    alert("You have succesfully booked an appointment");
}

*/
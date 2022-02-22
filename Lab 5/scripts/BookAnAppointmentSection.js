
// Global entities
var haircuttersToServicesOfferedMap = new Map([]);
// All haircutters are capable of doing cuts of any size (short, medium, and large).

// Haircut styles for stylists
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


// Availabilities for stylists
// The keys are the days of the week and the values are list of time slots for each day.
const oNeilTimeSlots = new Map([]); 
oNeilTimeSlots.set("Monday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                        "12:00 pm - 12:30 pm", "12:30 pm - 1:00 pm", "1:00 pm - 1:30 pm", "1:30 pm - 2:00 pm", "2:00 pm - 2:30 pm", "2:30 pm - 3:00 pm", 
                        "3:00 pm - 3:30 pm", "3:30 pm - 4:00 pm"]);

oNeilTimeSlots.set("Wednesday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                        "12:00 pm - 12:30 pm", "12:30 pm - 1:00 pm", "1:00 pm - 1:30 pm", "1:30 pm - 2:00 pm", "2:00 pm - 2:30 pm", "2:30 pm - 3:00 pm", 
                          "3:00 pm - 3:30 pm", "3:30 pm - 4:00 pm"]);

oNeilTimeSlots.set("Friday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                      "12:00 pm - 12:30 pm", "12:30 pm - 1:00 pm", "1:00 pm - 1:30 pm", "1:30 pm - 2:00 pm", "2:00 pm - 2:30 pm", "2:30 pm - 3:00 pm", 
                        "3:00 pm - 3:30 pm", "3:30 pm - 4:00 pm"]);                          

                        
const boucherTimeSlots = new Map([]);
boucherTimeSlots.set("Monday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                        "12:00 pm - 12:30 pm"]);
boucherTimeSlots.set("Tuesday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                        "12:00 pm - 12:30 pm"]);
boucherTimeSlots.set("Wednesday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                        "12:00 pm - 12:30 pm"]);    
boucherTimeSlots.set("Thursday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                        "12:00 pm - 12:30 pm"]);      
boucherTimeSlots.set("Friday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                      "12:00 pm - 12:30 pm"]);  
                      
                      
const macleanTimeSlots = new Map([]); 
macleanTimeSlots.set("Monday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                  "12:00 pm - 12:30 pm", "12:30 pm - 1:00 pm", "1:00 pm - 1:30 pm", "1:30 pm - 2:00 pm", "2:00 pm - 2:30 pm", "2:30 pm - 3:00 pm", 
                  "3:00 pm - 3:30 pm", "3:30 pm - 4:00 pm"]);
macleanTimeSlots.set("Tuesday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                  "12:00 pm - 12:30 pm", "12:30 pm - 1:00 pm", "1:00 pm - 1:30 pm", "1:30 pm - 2:00 pm", "2:00 pm - 2:30 pm", "2:30 pm - 3:00 pm", 
                  "3:00 pm - 3:30 pm", "3:30 pm - 4:00 pm"]);  
macleanTimeSlots.set("Thursday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                  "12:00 pm - 12:30 pm"]);      
macleanTimeSlots.set("Friday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                  "12:00 pm - 12:30 pm"]);
                  
                  
const rocanTimeSlots = new Map([]); 
rocanTimeSlots.set("Tuesday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                  "12:00 pm - 12:30 pm", "12:30 pm - 1:00 pm", "1:00 pm - 1:30 pm", "1:30 pm - 2:00 pm", "2:00 pm - 2:30 pm", "2:30 pm - 3:00 pm", 
                  "3:00 pm - 3:30 pm", "3:30 pm - 4:00 pm"]);  
rocanTimeSlots.set("Thursday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                  "12:00 pm - 12:30 pm", "12:30 pm - 1:00 pm", "1:00 pm - 1:30 pm", "1:30 pm - 2:00 pm", "2:00 pm - 2:30 pm", "2:30 pm - 3:00 pm", 
                  "3:00 pm - 3:30 pm", "3:30 pm - 4:00 pm"]);    
rocanTimeSlots.set("Friday", ["8:00 am - 8:30 am", "8:30 am - 9:00 am", "9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am",
                  "12:00 pm - 12:30 pm", "12:30 pm - 1:00 pm", "1:00 pm - 1:30 pm", "1:30 pm - 2:00 pm", "2:00 pm - 2:30 pm", "2:30 pm - 3:00 pm", 
                  "3:00 pm - 3:30 pm", "3:30 pm - 4:00 pm"]); 

var stylistIdToMapofAvailabilitiesMap = new Map([]);
stylistIdToMapofAvailabilitiesMap.set("ONeil", oNeilTimeSlots);
stylistIdToMapofAvailabilitiesMap.set("Boucher", boucherTimeSlots);
stylistIdToMapofAvailabilitiesMap.set("Maclean", macleanTimeSlots);
stylistIdToMapofAvailabilitiesMap.set("Rocan", rocanTimeSlots);

var currentStylistAvailableDays = [];

const integerToDayOfTheWeekMap = new Map();
integerToDayOfTheWeekMap.set(0, "Sunday");
integerToDayOfTheWeekMap.set(1, "Monday");
integerToDayOfTheWeekMap.set(2, "Tuesday");
integerToDayOfTheWeekMap.set(3, "Wednesday");
integerToDayOfTheWeekMap.set(4, "Thursday");
integerToDayOfTheWeekMap.set(5, "Friday");
integerToDayOfTheWeekMap.set(6, "Saturday");

//var currentlySelectedDayOfTheWeek = ""



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


// Disabling specific dates "unavailableDate(date)" function was obtained and adapted from https://stackoverflow.com/questions/9742289/jquery-ui-date-picker-disabling-specific-dates
function unavailableDate(date) {
  dayOfTheWeek = integerToDayOfTheWeekMap.get(date.getDay());
  if ($.inArray(dayOfTheWeek, currentStylistAvailableDays) != -1) 
  {
      return [true, ""];
  } else {
      return [false, "", "Unavailable"];
  }
}



  $("#dropdownMenuButtonForStylists").change(function(){

    console.log("dropdownMenuButtonForStylists this.val = " + this.value);
    var selectedStylistID = this.value; // Forthe options, the value and the ids are the same in this case.

    $("#dateInput").prop('disabled', selectedStylistID == 0);
    $("#timeInput").prop('disabled', selectedStylistID == 0);

  });


  $("#dateInput").change(function(){

    var dateSelectedText = $("#dateInput").val();
    var yearSelected = dateSelectedText.split("-")[0];
    var monthSelected = dateSelectedText.split("-")[1];
    var daySelected = dateSelectedText.split("-")[2];
    console.log("yearSelected : " + yearSelected);
    console.log("monthSelected : " + monthSelected);
    console.log("daySelected : " + daySelected);        

    var dateSelected = new Date();
    dateSelected.setFullYear(yearSelected);
    dateSelected.setMonth(monthSelected-1); // Subtract 1 since month seem to be 0-based not 1-based.
    dateSelected.setDate(daySelected);

    console.log("dateSelected getDay() : " + dateSelected.toDateString());

    $("#dateInput").val(dateSelected.toDateString()); 

    var currentlySelectedDayOfTheWeek = integerToDayOfTheWeekMap.get(dateSelected.getDay());

    removeAllUnavailableTimeSlots(currentlySelectedDayOfTheWeek);

  });

  $("#dateInput").click(function(){

    var dateToday = new Date();

    var dateNextYear = new Date();
    var currentYear = dateNextYear.getFullYear();
    dateNextYear.setFullYear(currentYear+1);

    setAllUnavailableDates();
    
    $('#dateInput').datepicker({
      showButtonPanel: false,
      minDate: dateToday,
      maxDate: dateNextYear,
      dateFormat : "yy-mm-dd",
      beforeShowDay: unavailableDate,
    });
  });


});



function setAllUnavailableDates()
{
  var currentStylistID = $("#dropdownMenuButtonForStylists").val();

  if (currentStylistID == "0")
  {
    // "Select a stylist" option.
    return;
  }

  var currrentStylistTimeslots = stylistIdToMapofAvailabilitiesMap.get(currentStylistID);

  currentStylistAvailableDays = [];

  currrentStylistTimeslots.forEach (function(availableTimeSlots, dayOfTheWeek) {
    currentStylistAvailableDays.push(dayOfTheWeek);
   });

}


function convertTimeSlotToIDFormat(timeSlotWithSpacesAndColons)
{
  // 8:30 am - 9:00 am
  return "A" + timeSlotWithSpacesAndColons.replace(/ /g, "").replace(/:/g, ""); 
}

function removeAllUnavailableTimeSlots(dayOfTheWeekChosen)
{
  var currentStylistID = $("#dropdownMenuButtonForStylists").val();
  if (currentStylistID == "0")
  {
    // "Select a stylist" option.
    return;
  }

  console.log("dayOfTheWeekChosen : " + dayOfTheWeekChosen);


  var currrentStylistTimeslots = stylistIdToMapofAvailabilitiesMap.get(currentStylistID);

  //console.log("currrentStylistTimeslots : " + currrentStylistTimeslots);

  // Iteration solution btained from https://stackoverflow.com/questions/590163/how-to-get-all-options-of-a-select-using-jquery
  $("#timeInput option").each(function(timeslot)
  {
    console.log("$(this).val() : " + $(this).val());
    timeslot = $(this).val();
    // Start by hiding every timeslot option.
    $("#" + timeslot).hide();
  });
  
  var timeSlotsAvailable = currrentStylistTimeslots.get(dayOfTheWeekChosen);

  //console.log("timeSlotsAvailable : " + timeSlotsAvailable);

  // Now show only the ones available.
  for (var i = 0; i < timeSlotsAvailable.length; i++)
  {
    var currentTimeSlotAvailable = timeSlotsAvailable[i];
    var IDTimeslot = convertTimeSlotToIDFormat(currentTimeSlotAvailable);
    //console.log("IDTimeslot : " + IDTimeslot);
    $("#" + IDTimeslot).show();
  }

}


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

  //console.log("pListOfSelectedServices = " + pListOfSelectedServices);

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

  availableStylistIDs = obtainAllStylistForSelectedServices(listOfSelectedServices);

  console.log("availableStylists = " + availableStylistIDs);

  // Set back to default option.
  $("#dropdownMenuButtonForStylists").val(0);

  stylistIdToListOfServicesMap.forEach (function(listOfServicesOfferedByStylist, stylistID) {

    var stylistIDFound = false;
    for (var i = 0; i < availableStylistIDs.length; i++)
    {
      if(availableStylistIDs[i] == stylistID)
      {
        stylistIDFound = true;
      }
    }

    if (stylistIDFound)
    {
      $("#" + stylistID).show();
    }
    else
    {
      $("#" + stylistID).hide();
    }
  })
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
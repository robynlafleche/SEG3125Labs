
// Global variables
var currentTab = 0;
var totalNumberOfTabs; 


$(document).ready(function(){

  updateCurrentTab();
  updateStepIndicator();

  totalNumberOfTabs = document.getElementsByClassName("tab").length;

  $("#nextBtn").click(function(){
    
    if (currentTab == totalNumberOfTabs - 1)
    {
      // We are on the last tab, so the user just pressed the submit button.
      submitCompletedSurvey();
      alert("Thank you for completing the survey.");
      // Go back to the home page.
      window.location.href = "index.html";
      return;
    }

    if(!validateCurrentForm())
    {
      // There is a problem with at least one of the inputs so we cannot move on to the next tab.
      return;
    }

    var allTabs = document.getElementsByClassName("tab");

    //Hide the current tab
    allTabs.item(currentTab).style.display = "none";

    // Move to the next tab.
    currentTab = currentTab + 1;
    updateCurrentTab();

    updateStepIndicator();

  });


  $("#prevBtn").click(function(){

    var allTabs = document.getElementsByClassName("tab");

    //Hide the current tab
    allTabs.item(currentTab).style.display = "none";

    // Move to the next tab.
    currentTab = currentTab + -1;
    updateCurrentTab();

    updateStepIndicator();

  });  


});



function updateCurrentTab() {

  var allTabs = document.getElementsByClassName("tab");

  // Bring the current tab to the front.
  allTabs.item(currentTab).style.display = "block";
  
  // Show/Hide the previous button.
  if (currentTab == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  // The Next button becomes a submit button on the last tab. 
  if (currentTab == (allTabs.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }  

}


function updateStepIndicator()
{
  var allSteps = document.getElementsByClassName("step");

  // Begin by clearing all indicator styles
  for (var i = 0; i < allSteps.length; i++) 
  {
    allSteps.item(i).className = allSteps.item(i).className.replace(" active", "");
    allSteps.item(i).className = allSteps.item(i).className.replace(" finish", "");
  }

  // Mark all the completed tabs as complete.
  for (var i = 0; i < currentTab; i++) 
  {
    allSteps.item(i).className += " finish";
  }  

  // Mark the current tab as active.
  allSteps.item(currentTab).className += " active";
  
}


function validateCurrentForm()
{

  var noErrorFound = true;

  if (currentTab == 0) // Personal Information Page
  {
    // 1) Start by verifying the first name field.
    var firstNameEntered = $("#inputFirstName").val();
    var firstNameRegexp = /^[a-zA-Z ]*$/;

    if (firstNameEntered == "")
    {
      $("#FirstNameFeedbackSlot").text("The first name field is required.");
      noErrorFound = false;
    }
    else if (!firstNameRegexp.test(firstNameEntered))
    {
      $("#FirstNameFeedbackSlot").text("The first name field can only contain characters and spaced.");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#FirstNameFeedbackSlot").text("");        
    }
    

    // 2) The last name field.
    var lastNameEntered = $("#inputLastName").val();
    var lastNameRegexp = /^[a-zA-Z ]*$/;

    if (lastNameEntered == "")
    {
      $("#LastNameFeedbackSlot").text("The last name field is required.");
      noErrorFound = false;
    }
    else if (!lastNameRegexp.test(lastNameEntered))
    {
      $("#LastNameFeedbackSlot").text("The last name field can only contain characters and spaced.");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#LastNameFeedbackSlot").text("");        
    }      


    // 3) The phone number field.
    var phoneNumberEntered = $("#inputPhoneNumber").val();
    // Validation regular expression for phone number was obtained from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
    var phoneNumberRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
    if (phoneNumberEntered == "")
    {
      $("#PhoneNumberFeedbackSlot").text("The phone number field is required.");
      noErrorFound = false;
    }
    else if (!phoneNumberRegExp.test(phoneNumberEntered))
    {
      $("#PhoneNumberFeedbackSlot").text("Please enter a valid phone number in the form of XXX-XXX-XXXX.");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#PhoneNumberFeedbackSlot").text("");        
    }       
    
    
    // 4) The email field.    
    var emailEntered = $("#inputEmail4").val();
    var emailAddressRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailEntered == "")
    {
      $("#EmailFeedbackSlot").text("The email field is required.");
      return;
    }
    else if (!emailAddressRegexp.test(emailEntered)) 
    {
      $("#EmailFeedbackSlot").text("Please enter a valid email address.");
      return ;
    }
    else
    {
      // Clear the warnings.
      $("#EmailFeedbackSlot").text("");        
    }       

    return noErrorFound;

  }


  if (currentTab == 1) // Budget and favourite feature
  {
    var budgetRangeSelected = $("#budget").val();

    if (budgetRangeSelected == "")
    {
      $("#BudgetFeedbackSlot").text("Please select a budget range.");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#BudgetFeedbackSlot").text("");        
    }    

    return noErrorFound;

  }

  if (currentTab == 2) // Location and readable characters
  {
    // 1) Location
    var locationEntered = $("#location").val();
    if (locationEntered == "")
    {
      $("#LocationFeedbackSlot").text("Please enter a location.");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#LocationFeedbackSlot").text("");        
    }   


    //2) Readable characters
    var numberOfReadableSelected = getNumberOfSelection("How readable are the characters displayed on the website?"); // $("[name='How readable are the characters displayed on the website?']");
    
    if (numberOfReadableSelected == "")
    {
      $("#ReadableFeedbackSlot").text("Please a readability characteristic");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#ReadableFeedbackSlot").text("");        
    }    

    return noErrorFound;

  }  


  if (currentTab == 3) // Recommend and overall appearance
  {

    // Recommendation level
    var recommendationSelected = $("#recommendation").val();

    if (recommendationSelected == "")
    {
      $("#RecommendationFeedbackSlot").text("Please select a recommendation level.");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#RecommendationFeedbackSlot").text("");        
    }  


    // Overall appearance
    var appearanceRatingValue = $("#selected_rating").val();

    console.log("appearanceRatingValue");
    console.log(appearanceRatingValue);

    if (appearanceRatingValue == 0)
    {
      $("#OverallRatingFeedbackSlot").text("Please select an overall appearance rating.");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#OverallRatingFeedbackSlot").text("");        
    }      



    return noErrorFound;
  }


  if (currentTab == 4) // Easy to find and signing up
  {

    // Easy to find
    var easyToFindSelected = $("#easyfind").val();

    if (easyToFindSelected == "")
    {
      $("#EasyToFindFeedbackSlot").text("Please select an easiness level.");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#EasyToFindFeedbackSlot").text("");        
    }    


    // Signing up
    var signingUpSelected = $("#difficulty").val();

    if (signingUpSelected == "")
    {
      $("#SigningUpFeedbackSlot").text("Please select an difficulty level.");
      noErrorFound = false;
    }
    else
    {
      // Clear the warnings.
      $("#SigningUpFeedbackSlot").text("");        
    }     



    return noErrorFound;    


  }

  return false;

}



function getNumberOfSelection(buttonsGroupName)
{
  var buttonsGroup = $("[name='" + buttonsGroupName + "']");

  counter = 0;
  for (var i = 0; i<buttonsGroup.length; i++)
  {
    if (buttonsGroup[i].checked)
    {
      counter = counter + 1;
    }
  }

  return counter;
}



function submitCompletedSurvey()
{
  // jQuery that will "listen" to the html survey.html
  // This is adapted from the sample provided by Professor Caroline Barriere :// https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis
  
  var surveyForm = $('#surveyForm');

  $.ajax({
    type: 'POST',
    url: '/survey',
    data: surveyForm.serializeArray(),
    // Send the serialize (JSON formatted data over to the system controller)
    success: function(data){
    }
  });

  return false;  

}















function showTab(n) {
    var tabs = document.getElementsByClassName("tab");
    tabs.item(currentTab).style.display = "block";
    console.log(tabs.item(currentTab))
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    // if (n == (tabs.length - 1)) {
    //   document.getElementById("nextBtn").innerHTML = "Submit";
    // } else {
    //   document.getElementById("nextBtn").innerHTML = "Next";
    // }
    fixStepIndicator(n)
  }

  function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x.item(i).className = x.item(i).className.replace(" active", "");
    }
    x.item(n).className += " active";
  }


  function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    var validity = validateForm();
    if (n == 1 && validity == false) return false;
    x.item(currentTab).style.display = "none";
    currentTab = currentTab + n;
    
    // if (currentTab >= x.length) {
    //   document.getElementById("regForm").submit();
    //   return false;
    // }

    showTab(currentTab);
  }





  function validateForm() {
   
    var tabs, textFields, selectionFields, valid = true;
    tabs = document.getElementsByClassName("tab");
    textFields = tabs.item(currentTab).getElementsByTagName("input");
    selectionFields = tabs.item(currentTab).getElementsByTagName("select");

    for (i = 0; i < textFields.length; i++) {
        //for selection box 
        /* if (y.item(i).name == "What was your favourite feature of the website?") {
            var getSelectedCheckboxValue = document.querySelectorAll(   
                'input[name="What was your favourite feature of the website?"].checked'); 
                alert(getSelectedCheckboxValue.length)
            if(getSelectedCheckboxValue == null) { 
                //alert("Please make a selection")
            } 
        } */

        //for radio slection
        /* if (y.item(i).name == "How readable are the characters displayed on the website?") {
            var getSelectedRadioValue = document.querySelector(   
                'input[name="How readable are the characters displayed on the website?"].checked'); 
            if(getSelectedRadioValue == null) { 
                //alert("Please make a selection")
            } 
        } */

        //for all input tags including ones above
        if (textFields.item(i).value == "") {
        textFields.item(i).className += " invalid";
        valid = false;
      }
    }
    //for all select tags
    for (j = 0; j < selectionFields.length; j++) {

  
        if (selectionFields.item(j).value == "") {
          alert("Please select a selection");
          valid = false;
        }
    }

    if (valid) {
      document.getElementsByClassName("step").item(currentTab).className += " finish";
    }
    return valid; 
  }



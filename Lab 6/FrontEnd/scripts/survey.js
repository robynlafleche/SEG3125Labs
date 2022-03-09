
// Global variables
var currentTab = 0; 


$(document).ready(function(){

  updateCurrentTab();








});

function updateCurrentTab(n) {

  var allTabs = document.getElementsByClassName("tab");

  // Bring the current tab to the front.
  allTabs.item(currentTab).style.display = "block";



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



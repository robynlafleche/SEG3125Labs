const mutuallyExclusiveSWPSetsOfCheckboxes = [ ["shortCutCheckboxSWP", "mediumCutCheckboxSWP", "longCutCheckboxSWP"], 
                                                    ["partialFoilCheckboxSWP", "tonerCheckboxSWP", "balayageCheckboxSWP"],   
                                                    ["upDoCheckboxSWP", "formalStyleCheckboxSWP", "bridalUpDoCheckboxSWP"] ];


$(document).ready(function(){
  
  /* Change detection obtained from https://www.codegrepper.com/code-examples/javascript/jquery+checkbox+change+event */
  $('.servicesWeProvideCheckBox').change(function() {

    onServicesWeProvideSelectionChanged(this.checked, this.id);

    var checkboxStatus = new ServiceTypeCheckBoxStatus(this.id, this.checked);
    publishMessage("ServicesWeProvideCheckboxStatusChangeTopic", checkboxStatus);

  });  

}); 

function updateSWPBookNowButtonSensitivity()
{
  // code inspired from https://stackoverflow.com/a/47449031/15518664
  var servicesWeProvideCheckboxes = document.querySelectorAll('.servicesWeProvideCheckBox');
  var checkedOne = Array.prototype.slice.call(servicesWeProvideCheckboxes).some(x => x.checked);

  document.querySelectorAll('#theDisabledBookingButtonInServices')[0].disabled = true;
  if (checkedOne) {
    document.querySelectorAll('#theDisabledBookingButtonInServices')[0].disabled = false;
  }    
}


function onServicesWeProvideSelectionChanged(pChecked, pCheckBoxId)
{

  updateSWPBookNowButtonSensitivity();

  //$("#shortCutCheckbox").prop('checked', true);
  //onBookingCheckboxSelectionChanged(true, "shortCutCheckbox");

  if (pChecked)
  {
    // A checkbox just got checked, must uncheck all checkboxes in the same group.
    for (var i = 0; i < mutuallyExclusiveSWPSetsOfCheckboxes.length; i++) {
      
      var currentMEGroup = mutuallyExclusiveSWPSetsOfCheckboxes[i];

      var IDFound = false;
      for (var j = 0; j < currentMEGroup.length; j++)
      {
        if (currentMEGroup[j] == pCheckBoxId)
        {
          IDFound = true;            
        }
      }

      if (IDFound)
      {
        // Uncheck all the other checkboxes in the current group.
        for (var j = 0; j < currentMEGroup.length; j++)
        {
          var toCheck = currentMEGroup[j] == pCheckBoxId;
          // Solution to check/uncheck obtained from https://stackoverflow.com/questions/17420534/check-uncheck-checkbox-using-jquery
          $("#"+ currentMEGroup[j]).prop('checked', toCheck);
        }          
      }
    }      
  }    

}


function onBookingCheckboxStatusChange(pCheckboxStatus)
{

  // Add the SWP suffix to get the services we provide counterpart ID.
  var checkBoxId = pCheckboxStatus.checkboxId + "SWP";
  $("#" + checkBoxId).prop('checked', pCheckboxStatus.isChecked);

  onServicesWeProvideSelectionChanged(pCheckboxStatus.isChecked, checkBoxId);
}


function clearAllServicesCheckboxes(resetAllFields)
{
  if (resetAllFields)
  {
    for (var i = 0; i < mutuallyExclusiveSWPSetsOfCheckboxes.length; i++) {
       
      var currentMEGroup = mutuallyExclusiveSWPSetsOfCheckboxes[i];
  
      for (var j = 0; j < currentMEGroup.length; j++)
      {
        var checkBoxId = currentMEGroup[j];
  
        $("#" + checkBoxId).prop('checked', false);
      } 
    } 
  }
  
  updateSWPBookNowButtonSensitivity();
}

subscribeToTopic("BookingCheckboxStatusChangeTopic", onBookingCheckboxStatusChange);
subscribeToTopic("PaymentSectionFinishedTopic", clearAllServicesCheckboxes);

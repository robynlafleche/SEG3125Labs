
function clearLoginAndSignUpInputs()
{
  var allCustomerInputTextFields = document.getElementsByClassName("customerInputTextField");

  for (var i = 0; i < allCustomerInputTextFields.length; i++) {
    allCustomerInputTextFields[i].value = "";
  }
}

function onLoginCancel()
{
  document.getElementById("LogInSubSection").style.display = "none";
}


function onDisplayLoginPageTopic(show)
{
    clearLoginAndSignUpInputs();

    if (show)
    {
        document.getElementById("LogInSubSection").style.display = "block";
    }
    else
    {
        document.getElementById("LogInSubSection").style.display = "none";
    }
}




subscribeToTopic("DisplayLoginPageTopic", onDisplayLoginPageTopic);



    

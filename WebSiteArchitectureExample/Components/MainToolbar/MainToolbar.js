




function onUserPreferencesButtonClicked()
{
  // Publish message to have Log in page displayed.
  publishMessage("DisplayLoginPageTopic", true);
}


function onviewCartButtonClicked()
{
  document.getElementById('srch').value = "";
  publishMessage("DisplaySignUpPageTopic", true);
}


function onNewCustomerRegisterTopic(newCustomerProfile)
{
  document.getElementById('srch').value = newCustomerProfile.firstName + " " + newCustomerProfile.lastName;
}






subscribeToTopic("NewCustomerRegisterTopic", onNewCustomerRegisterTopic);

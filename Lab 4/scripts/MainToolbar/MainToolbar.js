




function onUserPreferencesButtonClicked()
{
  // Publish message to have Log in page displayed.
  publishMessage("DisplayLoginPageTopic", true);
}


function onviewCartButtonClicked()
{
  publishMessage("DisplaySignUpPageTopic", true);
}


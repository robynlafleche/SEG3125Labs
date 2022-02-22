function submitContactForm() {

  var firstNameEntered = document.getElementById("firstNameContactUsInput").value;
  if (firstNameEntered == "")
  {
    alert("The first name field is required");
    return;
  } 

  var lastNameEntered = document.getElementById("lastNameContactUsInput").value;
  if (lastNameEntered == "")
  {
    alert("The last name field is required");
    return;
  }   

  var emailEntered = document.getElementById("emailContactUsInput").value;
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


  var concernsEntered = document.getElementById("specialInstructionsInput").text;
  if (concernsEntered == "")
  {
    alert("Please indicate your concerns.");
    return;
  } 


  alert("Thank you for your feedback " + firstNameEntered + " " + lastNameEntered + ".");
}



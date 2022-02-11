function onSignupCancel()
{
  document.getElementById("SignUpSubSection").style.display = "none";
}

function registerCustomer()
{
  var firstNameEntered = document.getElementById("firstNameInputSignUp").value;
  if (firstNameEntered == "")
  {
    alert("The first name field is required");
    return;
  } 

  var lastNameEntered = document.getElementById("lastNameInputSignUp").value;
  if (lastNameEntered == "")
  {
    alert("The last name field is required");
    return;
  }   

  var emailEntered = document.getElementById("emailInputSignUp").value;
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

  var passwordEntered = document.getElementById("passwordInputSignUp").value;
  if (passwordEntered == "")
  {
    alert("The password field is required");
    return;
  }

  var passwordConfirmEntered = document.getElementById("confirmPasswordInputSignUp").value;
  if (passwordConfirmEntered != passwordEntered)
  {
    alert("The password confirmation does not match the password entered.");
    return;
  }

  // The inputs are valid, so the customer can now be registered into the system.
  var newCustomer = new CustomerProfile(firstNameEntered, lastNameEntered, emailEntered, passwordEntered);
  alert("Your account has been created. Welcome " + newCustomer.firstName + " " + newCustomer.lastName + ".");
  document.getElementById("SignUpSubSection").style.display = "none";

}



function onDisplaySignUpPageTopic(show)
{
    clearLoginAndSignUpInputs();

    if (show)
    {
      document.getElementById("SignUpSubSection").style.display = "block";
    }
    else
    {
      document.getElementById("SignUpSubSection").style.display = "none";
    }
}




subscribeToTopic("DisplaySignUpPageTopic", onDisplaySignUpPageTopic);



    

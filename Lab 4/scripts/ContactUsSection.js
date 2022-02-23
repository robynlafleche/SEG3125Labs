
$(document).ready(function(){

  $("#SubmitFormButton").click(function(){
      
    // 1) Start by verifying the first name field.
    var firstNameEntered = $("#firstNameContactUsInput").val();
    var firstNameRegexp = /^[a-zA-Z ]*$/;

    if (firstNameEntered == "")
    {
      alert("The first name field is required.");
      return;
    }
    else if (!firstNameRegexp.test(firstNameEntered))
    {
      alert("The first name field can only contain characters and spaced.");
      return;
    }


    // 2) The last name field.
    var lastNameEntered = $("#lastNameContactUsInput").val();
    var lastNameRegexp = /^[a-zA-Z ]*$/;

    if (lastNameEntered == "")
    {
      alert("The last name field is required.");
      return;
    }
    else if (!lastNameRegexp.test(lastNameEntered))
    {
      alert("The last name field can only contain characters and spaced.");
      return;
    }

    // 3) The email field.    
    var emailEntered = $("#emailContactUsInput").val();
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

    var customerMessage = $("#contactMessageInput").val();

    if (customerMessage == "")
    {
      alert("Please include a message.");
      return;
    }

    alert("Thank you for your feedback " + firstNameEntered + " " + lastNameEntered + "."); 

    // Now clear every field.
    $("#firstNameContactUsInput").val("");
    $("#lastNameContactUsInput").val("");
    $("#emailContactUsInput").val("");
    $("#contactMessageInput").val("");

  });  

});  
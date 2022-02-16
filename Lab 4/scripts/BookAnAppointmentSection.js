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






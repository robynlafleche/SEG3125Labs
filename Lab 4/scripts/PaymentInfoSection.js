
$(document).ready(function(){

  $("#creditCardForm").hide();

  $("#CompleteBookingButton").click(function(){
      
    // 1) Start by verifying the first name field.
    var NameEntered = $("#nameOnCardInput").val();
    var NameEnteredRegExp = /^[a-zA-Z ]*$/;

    if (NameEntered == "")
    {
      alert("The name field is required.");
      return;
    }
    else if (!NameEnteredRegExp.test(NameEntered))
    {
      alert("The name field can only contain characters and spaced.");
      return;
    }


    // 2) The last name field.
    var creditCardNumberEntered = $("#cardNumberInput").val();
    creditCardNumberEntered = creditCardNumberEntered.replace(/ /g, "").replace(/-/g, "");
    var cardNumberRegexp = /^[0-9]{16}$/;

    if (creditCardNumberEntered == "")
    {
      alert("Please enter a 16-digit credit card number in the following format XXXX-XXXX-XXXX-XXXX.");
      return;
    }
    else if (!cardNumberRegexp.test(creditCardNumberEntered))
    {
      alert("Please enter a 16-digit credit card number in the following format XXXX-XXXX-XXXX-XXXX.");
      return;
    }

    // 3) The email field.    
    var expiryDate = $("#expiryDateInput").val();
    var expiryDateRegexp = /^[0-9]{4}$/;
    if (expiryDate == "")
    {
      alert("Please enter the credit card expiry date in the following format MM/YY.");
      return;
    }
    else if (!expiryDateRegexp.test(expiryDate)) 
    {
      alert("Please enter the credit card expiry date in the following format MM/YY.");
      return ;
    }

    alert("Your booking is now complete. We look forward to seeing you soon."); 

    // Now clear every field.
    $("#nameOnCardInput").val("");
    $("#cardNumberInput").val("");
    $("#expiryDateInput").val("");

    $("#creditCardForm").hide();

    publishMessage("PaymentSectionFinishedTopic", true);

  });  


  $("#CompleteBookingCancelButton").click(function() {

    // Clear every field.

    $("#nameOnCardInput").val("");
    $("#cardNumberInput").val("");
    $("#expiryDateInput").val("");

    $("#creditCardForm").hide();
    
    publishMessage("PaymentSectionFinishedTopic", false);

  });

 

});  



function onDisplayPaymentSectionTopic(emptyString)
{
  $("#creditCardForm").show();
}




subscribeToTopic("DisplayPaymentSectionTopic", onDisplayPaymentSectionTopic);

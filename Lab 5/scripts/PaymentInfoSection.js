
$(document).ready(function(){

  $("#creditCardForm").hide();

  $("#CompleteBookingButton").click(function(){
      
    // 1) Start by verifying the full name field.
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


    // 2) The credit card number field.
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

    // 3) The expiry date field. Solution for f=slah replacement https://stackoverflow.com/questions/4566771/how-to-globally-replace-a-forward-slash-in-a-javascript-string
    var expiryDateEntered = $("#expiryDateInput").val();
    var expiryDate = expiryDateEntered.replace(/ /g, "").replace(/\//g, ""); 
    var expiryDateRegexp = /^[0-9]{4}$/;
    if (expiryDate == "")
    {
      alert("Please enter a credit card expiry date.");
      return;
    }
    else if (!expiryDateRegexp.test(expiryDate)) 
    {
      alert("Please enter the credit card expiry date in the following format MM/YY.");
      return ;
    }
    else
    {
      var dateToday = new Date();
      var minimumExpiryMonth = dateToday.getMonth() + 1; // + 1 since months are 0-based and since credit cards are valid throughout expiry month.
      var minimumExpiryYear = dateToday.getFullYear() - 2000; 

      // substring and parseInt solutions obtained from : https://www.w3schools.com/jsref/jsref_substring.asp, https://www.w3schools.com/jsref/jsref_parseint.asp
      var expiryMonthEntered = parseInt(expiryDate.substring(0,2));
      var expiryYearEntered = parseInt(expiryDate.substring(2,4));

      var yearEnteredInPast = expiryYearEntered < minimumExpiryYear;
      var monthEnteredPast = (expiryYearEntered == minimumExpiryYear) && (expiryMonthEntered < minimumExpiryMonth);
      var monthZero = expiryMonthEntered == 0;

      if (monthZero)
      {
        alert("The credit card expiry month cannot be 0.");
        return;       
      }

      if (yearEnteredInPast || monthEnteredPast)
      {
        alert("The credit card entered is expired.");
        return;
      }
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



console.log("subscribeToTopic = " + "DisplayPaymentSectionTopic");
subscribeToTopic("DisplayPaymentSectionTopic", onDisplayPaymentSectionTopic);
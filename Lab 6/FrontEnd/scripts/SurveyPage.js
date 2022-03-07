// jQuery that will "listen" to the html survey.html
// This is adapted from the sample provided by Professor Caroline Barriere :// https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module6-SurveyAnalysis


$(document).ready(function(){

  $("#surveySubmitButton").click(function(){

    console.log("Submit Clicked");

    var surveyForm = $('#surveyForm');

    $.ajax({
      type: 'POST',
      url: '/survey',
      data: surveyForm.serializeArray(),
      success: function(data){
        // do something with the data via front-end framework
        // Make the submit button red, disabled and saying Thank you
        //$("#bb").css("background-color", "red");
        //$("#bb").prop("disabled", "true");
        //$("#bb").text("Thank you!");
      }
    });
    return false;    

  });

  
  /*
  $('form').on('submit', function(){
      
      // var item = $('form input');
      // console.log(item.serializeArray());

      console.log("On Submit")

      $.ajax({
        type: 'POST',
        url: '/survey',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button red, disabled and saying Thank you
          //$("#bb").css("background-color", "red");
          //$("#bb").prop("disabled", "true");
          //$("#bb").text("Thank you!");
        }
      });
      return false;
  });
  */
  

});
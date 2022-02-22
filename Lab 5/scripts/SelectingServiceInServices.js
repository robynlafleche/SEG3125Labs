// code inspired from https://stackoverflow.com/a/47449031/15518664
function callFunction() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
  
    document.querySelectorAll('#theDisabledBookingButtonInServices')[0].disabled = true;
    if (checkedOne) {
      document.querySelectorAll('#theDisabledBookingButtonInServices')[0].disabled = false;
    }
  }

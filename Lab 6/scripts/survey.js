var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
    var tabs = document.getElementsByClassName("tab");
    tabs.item(currentTab).style.display = "block";
    console.log(tabs.item(currentTab))
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (tabs.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n)
  }

  function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x.item(i).className = x.item(i).className.replace(" active", "");
    }
    x.item(n).className += " active";
  }

  function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    
    if (currentTab >= x.length) {
      document.getElementById("regForm").submit();
      return false;
    }
    showTab(currentTab);
  }

  function validateForm() {
    var valid = true;
    
    return valid; 
  }
//code for getPage function inspired from https://stackoverflow.com/a/56111513/15518664 and  by professor Caroline Barriere
//https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery  
function getPage(elem,hide1,hide2) {
    let value = ""
    let page = document.getElementById(elem);
    document.getElementById(hide1).style.display = "none"
    document.getElementById(hide2).style.display = "none"
    if (page.style.display == "")
        value = "none";

    page.style.display = value;
}

/*code inspired from youtube tutorial https://www.google.com/search?q=add+to+cart+button+html+and+javascript&oq=&aqs=chrome.0.35i39i362l8.147681j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_Mrz1Yc3LF5-aptQP1NC7uA820
products is an array containing the names of the products added to the cart
cartTotal is the total after all the items are added to the cart*/

var products = []
var cartTotal = 0

/*Adds the items selected by the user to the cart*/
function cartedItems(name) { 
  products.push(name)
  var priceName = name + "Price"
  var quantityName = name + "Quantity"
  var price = parseFloat(document.getElementById(priceName).innerHTML.replace('$', '')) * document.getElementById(quantityName).value
  updateCartTotal(price);
}


function displayCart() {
    var div = document.getElementById("Cart");
    var html = "";
    for (var i = 0; i < products.length; i++) {
        html += "<input type='checkbox' name='" + products[i] + "' quantity='" + i + "' onClick=\"setValue(this.quantity);\">" + products[i] + "<br>";
    }

    div.innerHTML = html;
}

/*Updates the cart total with the prices of each item multipled by their quantities*/
function updateCartTotal(price) {
  cartTotal += price
  alert(cartTotal)
}


const allFiltersToApply = [];
var organicFilterChoice = "";

function updateDiateryCharacteristicsFilters(filterType, filterOn) {

  var elementIndex = -1

  // Search to see if this filter type is already on the filter list.
  for (var i = 0; i < allFiltersToApply.length; i++) {
    if (allFiltersToApply[i] == filterType)
    {
      // The element has been found.
      elementIndex = i;
      break;
    }
  }

  if (elementIndex == -1 && filterOn)
  {
    // The filter type is not in the filter list and it should be, so add it.
    allFiltersToApply.push(filterType);
  }
  else if (elementIndex != -1 && !filterOn)
  {
    // The filter type is in the filter list and it must be removed.
    for (var i = elementIndex; i < allFiltersToApply.length - 1; i++) {
      allFiltersToApply[i] = allFiltersToApply[i+1]; // shift every other element down
    }

    // Delete the last element to complete the shift.
    allFiltersToApply.pop();
  }


  filterProductsPage();
}

function updateOrganicFilters(choice) {

  organicFilterChoice = choice

  filterProductsPage();
}

function filterProductsPage() {

  var allProducts = document.getElementsByClassName("product-box");

  /* go through each product and determine if it should be displayed or not.*/
  for (var i = 0; i < allProducts.length; i++) {

    // Show the product by default
    allProducts[i].style.display = "flex";

    // First apply the filters for diatery characteristics.
    for (var j = 0; j < allFiltersToApply.length; j++) {
      var matchedProducts = allProducts[i].getElementsByClassName(allFiltersToApply[j]);
      if (matchedProducts.length != 0)
      {
        // Hide the product since it contains the characteristic the user doe not want.
        allProducts[i].style.display = "none";
      }
    }

    // Now apply the filter for the organic choice.
    if (organicFilterChoice == "noOrganicFilter")
    {
      // Do nothing since the user has indicated no preference between organic and non-organic.
      continue;
    }

    // Determine if the product is organic or not
    var matchedProducts = allProducts[i].getElementsByClassName('organic');
    var isOrganic = matchedProducts.length != 0;

    if (organicFilterChoice == "organicOnly" && !isOrganic)
    {
      // The user wants organic products only and the current product is not organic.
      allProducts[i].style.display = "none"; // Hide the product
    }

    else if (organicFilterChoice == "nonOrganicOnly" && isOrganic)
    {
      // The user wants non-organic products only and the current product is organic.
      allProducts[i].style.display = "none"; // Hide the product
    }
  }
}



//code for getPage function inspired from https://stackoverflow.com/a/56111513/15518664 and  by professor Caroline Barriere
//https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery  
function getPage(elem,hide1,hide2) {
    let value = ""
    let page = document.getElementById(elem);
    document.getElementById(hide1).style.display = "none"
    document.getElementById(hide2).style.display = "none"
    if (page.style.display == "")
    {
      value = "none";
      disabledZoomFeatures(true, true)
    }
    else
    {
      disabledZoomFeatures(zoomedIn, !zoomedIn)
    }

    page.style.display = value;


}

/*code inspired from youtube tutorial https://www.google.com/search?q=add+to+cart+button+html+and+javascript&oq=&aqs=chrome.0.35i39i362l8.147681j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_Mrz1Yc3LF5-aptQP1NC7uA820
products is an array containing the names of the products added to the cart
cartTotal is the total after all the items are added to the cart*/

{
	var products = new Map([]);
	var cartTotal = 0;
  var zoomedIn = false;
}

/*Adds the items selected by the user to the cart*/
function cartedItems(productName) {

  var priceName = productName + "Price"
  var quantityName = productName + "Quantity"
  var productPrice = document.getElementById(priceName).innerHTML.replace('$', '')
  var productQuantity = document.getElementById(quantityName).value
  var additionalPrice = parseFloat(productPrice) * productQuantity
  updateCartTotal(additionalPrice, productQuantity, productName);

  if (products.has(productName))
  {
    // Product is already in the cart, update its quantity.
    var currentQuantity = products.get(productName)
    var newQuantity = parseInt(currentQuantity) + parseInt(productQuantity)
    products.set(productName, newQuantity);
  }
  else
  {
    // New product, add an entry to the cart.
    products.set(productName, productQuantity);
  }


  updateCartDisplay()
  addLines();
  getCartTotal();
}


/* Map usage and iteration inspired from https://www.w3schools.com/js/js_object_maps.asp*/
function updateCartDisplay()
{
  document.getElementById("cart").setAttribute('style', 'white-space: pre;');
  //adding table code inspired from https://www.w3schools.com/jsref/met_table_insertrow.asp

  let flag = true
  // Clear the cart display text
  document.getElementById("cart").textContent = "Here are the contents of your cart:\n\n";

 

  // Now display each item in the cart one by one.
  products.forEach (function(productQuantity, productName)
  {
  
  
    var priceName = productName + "Price"
    var productPrice = document.getElementById(priceName).innerHTML.replace('$', '')
    var additionalPrice = parseFloat(productPrice) * productQuantity
   //

    document.getElementById("cart").textContent += " " + productName + " [" + productQuantity + "] = " + "$" + additionalPrice.toFixed(2) + "\r\n";

  })
}


// function to add line spaces
function addLines() {
	document.getElementById("cartTotal").setAttribute('style', 'white-space: pre;');
	for (var i = 0; i < 1; i++) {
		 document.getElementById("cart").textContent += "\r\n";
	}
}

/*Updates the cart total with the prices of each item multiplied by their quantities*/
function updateCartTotal(price, quantity, name) {
  cartTotal += price;

  var itemString = "item"
  if (quantity > 1)
  {
    itemString = "items"
  }
  alert("Added " + quantity + " " + name + " " + itemString + " to cart.\nYour cart total is $" + cartTotal.toFixed(2))
}

function getCartTotal() {
	document.getElementById("cartTotal").textContent = " Total price: $" + cartTotal.toFixed(2);
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

/*Creates an object for the id of the parent class and it's price*/
function idPrice(id, price) {
  this.id = id
  this.price = price
}

var dataArray = []
/*array of the prices for each item*/
var prices = [1, 1.5, 2.5, 1.5, 2.75, 4.5, 3.75, 4, 3, 2, 1.75, 1, 8, 9, 9.5]

/*Sorts the prices either from low-high or high-low depending on user's selection*/
/*After the prices are sorted, parentclass for each price is referenced by id and appended to the original container in the sorted order*/
function sortPrices(value) {
  for (var i = 0; i < prices.length; i++) {
    dataArray[i] = new idPrice(i+1, prices[i])
  }
  for (var i = 0; i < dataArray.length; i++) {
    for (var j = 0; j < dataArray.length; j++) {
      if (dataArray[i].price < dataArray[j].price) {
        var temp = dataArray[i]
        dataArray[i] = dataArray[j]
        dataArray[j] = temp
      }
    }
  }
  if (value=="high") {
  dataArray.reverse()
  }
  var container = document.getElementById("container")
  for (var i = 0; i < prices.length; i++) {
  var node1 = document.getElementById(dataArray[i].id)
  console.log(dataArray[0].id)
  container.append(node1)
}
}


//  code for the zoom feature inspired from https://stackoverflow.com/a/56546498/15518664 -->
//code for applying style to several elements inspired from https://stackoverflow.com/a/66797497/15518664
function zoomIn(el) {
  var fields = document.getElementsByClassName(el);
  for(let field of fields){
    field.style.fontSize = "22px"
    
  }
  
}

function zoomInH2(el) {
  var fields = document.getElementsByClassName(el);
  for(let field of fields){
    field.style.fontSize = "28px"
    
  }
  
}

//  code for the zoom feature inspired from https://stackoverflow.com/a/56546498/15518664 -->
//code for applying style to several elements inspired from https://stackoverflow.com/a/66797497/15518664

function zoomOut(el) {
  var fields = document.getElementsByClassName(el);
  for(let field of fields){
    field.style.fontSize = "16px"
    
  }
  
}

function zoomOuth3(el) {
  var fields = document.getElementsByClassName(el);
  for(let field of fields){
    // found default h3 font size from https://stackoverflow.com/a/70720104
    field.style.fontSize = "18.72px"
    
  }
  
}


function zoomOuth2(el) {
  var fields = document.getElementsByClassName(el);
  for(let field of fields){
    if (field.className === "zoomh4") {
      //found the number for font size by trial and error
      field.style.fontSize = "13.3px"
    }
    else {
      field.style.fontSize = "24px"
    }
    
    console.log("field",field)
    
  }
}

function disabledZoomFeatures(zoomInDisabled, ZoomOutDisabled)
{
  document.getElementById("zoomInButton").disabled = zoomInDisabled;
  document.getElementById("zoomOutButton").disabled = ZoomOutDisabled;
}

function updateZoomInButtonSensitivities(isZoomedIn)
{
  zoomedIn = isZoomedIn
  document.getElementById("zoomInButton").disabled = zoomedIn; // Zoom-in button only available when zoomed-out
  document.getElementById("zoomOutButton").disabled = !zoomedIn; // Zoom-out button only available when zoomed-in
}


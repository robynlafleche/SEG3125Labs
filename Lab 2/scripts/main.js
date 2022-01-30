

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

/*Updates the cart total with the prices of each item multipled by their quantities*/
function updateCartTotal(price) {
  cartTotal += price
  alert(cartTotal)
}

/*Displays only the items selected by the user*/
function displayProducts(value) {
    var className = document.getElementsByClassName(value)
    for (var i = 0; i < className.length; i++) {
        className[i].style.display = "none"
    }
    }
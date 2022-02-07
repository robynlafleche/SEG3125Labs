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


class CustomerProfile {
  constructor(firstName, lastName, emailAddress, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.password = password;
    this.cartContent = new Map([]); // Map where keys are the product IDs and values are the quantities.
    this.diaterycharacteristicChoices =  new Map([
      ["meat", false],
      ["gluten", false],
      ["diabetic", false],
      ["lactose", false]
    ]);
    this.organicSelection = "noOrganicFilter"; // ALl products (organicChoice-3) by default 
    this.isZoomedIn = false;
  }
}






/*code inspired from youtube tutorial https://www.google.com/search?q=add+to+cart+button+html+and+javascript&oq=&aqs=chrome.0.35i39i362l8.147681j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_Mrz1Yc3LF5-aptQP1NC7uA820
products is an array containing the names of the products added to the cart
cartTotal is the total after all the items are added to the cart*/

{
	var products = new Map([]); // keys are the product names and the values are the quantity currently in the cart.
	var cartTotal = 0;
  var zoomedIn = false;
  var isLoggedIn = false; // false when in guest-user mode, and true when logged in.
  var customerProfiles = new Map([]); // The keys are the email addresses and the values are the customer profiles.
  var currentCustomerEmail; // The email address of the customer that is currently logged in.
  var currentCustomerProfile;

  // Sample customer
  var sampleCustomer = new CustomerProfile("Karim", "Dahel", "k", "p"); //"kdahe094@hotmail.com", "password");
  sampleCustomer.cartContent.set("Organic banana", 1);
  sampleCustomer.cartContent.set("Milk", 2);
  sampleCustomer.cartContent.set("Poultry", 4);
  sampleCustomer.cartContent.set("Fish", 1);
  //sampleCustomer.diaterycharacteristicChoices.set("meat", true);
  sampleCustomer.organicSelection = "organicOnly"; // Organic Products Only 
  sampleCustomer.isZoomedIn = true;

  customerProfiles.set("k", sampleCustomer);
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
  if (cartTotal > 0)
  {
    document.getElementById("cartTotal").textContent = " Total price: $" + cartTotal.toFixed(2);
  }
  else
  {
    document.getElementById("cartTotal").textContent = "";
  }
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

function clearAllSettings() 
{
  clearAllFilters();
  cartTotal = 0;
  products.clear();

  // Must reset the zoom settiings as well
  zoomedIn = false;

  triggerZoomUpddateToWidgets();
  
}

function triggerZoomUpddateToWidgets()
{
  if (zoomedIn)
  {
    zoomIn("zoomtext");  zoomInH2("zoomh2");  zoomInH2("zoomh3");  zoomInH2("zoomh4"); updateZoomInButtonSensitivities(true)
  }
  else
  {
    zoomOut("zoomtext"); zoomOuth2("zoomh2");  zoomOuth3("zoomh3");  zoomOuth2("zoomh4"); updateZoomInButtonSensitivities(false)
  }  
}

function clearLoginAndSignUpInputs()
{
  //document.getElementById("emailInput").value = "";
  //document.getElementById("passwordInput").value = "";

  var allCustomerInputTextFields = document.getElementsByClassName("customerInputTextField");

  for (var i = 0; i < allCustomerInputTextFields.length; i++) {
    allCustomerInputTextFields[i].value = "";
  }
}

function clearAllFilters() 
{

  var diateryCharacteristicCheckboxes = document.getElementsByClassName("diateryCharacteristicCheckbox");

  for (var i = 0; i < diateryCharacteristicCheckboxes.length; i++) {
    diateryCharacteristicCheckboxes[i].checked = false;
  }

  document.getElementById("noOrganicFilter").checked = true;
  updateOrganicFilters("noOrganicFilter");

  resetAllProductQuantities();

}

function resetAllProductQuantities() 
{
  // Still requires implementation.
}


function loadCustomerSetting(customerProfile)
{
  clearAllSettings();

  customerProfile.cartContent.forEach (function(productQuantity, productName) {

   products.set(productName, productQuantity);
   var priceName = productName + "Price"
   var productPrice = document.getElementById(priceName).innerHTML.replace('$', '')
   console.log(productPrice)
   console.log(productQuantity);
   var additionalPrice = parseFloat(productPrice) * parseFloat(productQuantity)
   console.log(additionalPrice);
   cartTotal += additionalPrice;
   console.log(cartTotal);
  })

  zoomedIn = customerProfile.isZoomedIn;    

  customerProfile.diaterycharacteristicChoices.forEach (function(ischaracteristicFilterOn, characteristicID)
  {
    document.getElementById(characteristicID).checked = ischaracteristicFilterOn;
    updateDiateryCharacteristicsFilters(characteristicID, ischaracteristicFilterOn)
  })  

  updateOrganicFilters(customerProfile.organicSelection)
  document.getElementById(customerProfile.organicSelection).checked = true


}


function copySettingsToCustomerProfile()
{

  currentCustomerProfile.cartContent.clear();

  products.forEach (function(productQuantity, productName) {
    currentCustomerProfile.cartContent.set(productName, productQuantity);
   })

   currentCustomerProfile.isZoomedIn = zoomedIn;

  var diateryCharacteristicCheckboxes = document.getElementsByClassName("diateryCharacteristicCheckbox");

  for (var i = 0; i < diateryCharacteristicCheckboxes.length; i++) {
    currentCustomerProfile.diaterycharacteristicChoices.set(diateryCharacteristicCheckboxes[i].id, diateryCharacteristicCheckboxes[i].checked);
  }

  var organicChoiceRadioboxes = document.getElementsByClassName("organicChoiceRadioBox");
  for (var i = 0; i < organicChoiceRadioboxes.length; i++) {
    if (organicChoiceRadioboxes[i].checked)
    {
      currentCustomerProfile.organicSelection = organicChoiceRadioboxes[i].id;
      break
    }
  }

}


/*


class CustomerProfile {
  constructor(firstName, lastName, emailAddress, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.password = password;
    this.cartContent = new Map([]); // Map where keys are the product IDs and values are the quantities.
    this.cartTotal = 0;
    this.vegetarian = false;
    this.allergicToGlutent = false;
    this.lactoseIntolerant = false;
    this.organicSelection = organicChoice-3; // ALl products (organicChoice-3) by default 
    this.isZoomedIn = false;
  }
}




*/


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



function onLoginButton()
{
  clearLoginAndSignUpInputs();
  document.getElementById("LogInSubSection").style.display = "block";
}

function onLoginCancel()
{
  document.getElementById("LogInSubSection").style.display = "none";
}

function onSignupCancel()
{
  document.getElementById("SignUpSubSection").style.display = "none";
}

function onSignUpButton()
{
  clearLoginAndSignUpInputs();
  document.getElementById("SignUpSubSection").style.display = "block";

  /*
  let input = document.getElementById('fileAcessor');
  input.addEventListener('change', () => {
      let files = input.files;
      if(files.length == 0) return;
      const file = files[0];
      let reader = new FileReader();
      reader.onload = (e) => {
          const fileContent = e.target.result;
          //const lines = file.split(/\r\n|\n/);
          document.write(fileContent)
      };
      reader.onerror = (e) => alert(e.target.error.name);
      reader.readAsText(file); 
      
  });
  
  input.onchange
  */

}

function registerCustomer()
{

}



function authenticateUser()
{
  var emailEntered = document.getElementById("emailInput").value;
  if (emailEntered == "")
  {
    alert("The email field is required");
    return;
  }

  var passwordEntered = document.getElementById("passwordInput").value;
  if (passwordEntered == "")
  {
    alert("The password field is required");
    return;
  }  



  /*let reader = new FileReader();
  reader.onload = (e) => {console.log(e.target.result); document.write(e.target.result)}

  var file = new File([""], "C:/Users/Home/Desktop/SEG3125/Labs/GitHub Code Development/robynlafleche.github.io/Lab 3/scripts/Karim Dahel - kdahe094@hotmail.com.txt");
  reader.readAsText(file);*/

  //readTextFile("file://C:/Users/Home/Desktop/SEG3125/Labs/GitHub Code Development/robynlafleche.github.io/Lab 3/scripts/Karim Dahel - kdahe094@hotmail.com.txt")

  /*fetch('C:/Users/Home/Desktop/SEG3125/Labs/GitHub Code Development/robynlafleche.github.io/Lab 3/scripts/Karim Dahel - kdahe094@hotmail.com.txt')
  .then(response => response.text())
  .then(text => console.log(text))*/ 
  
  //document.write(customerProfiles.size);

  var matchFound = false

  console.log("customerProfiles.size")
  console.log(customerProfiles.size)

  customerProfiles.forEach (function(customerProfile, customerEmail)
  {
    console.log(emailEntered)
    console.log(passwordEntered)
    console.log(customerEmail)
    console.log(passwordEntered)
    console.log(emailEntered == customerEmail)
    console.log(passwordEntered == customerProfile.password) 
    if (emailEntered == customerEmail && passwordEntered == customerProfile.password)
    {
      // Found user
      loadCustomerSetting(customerProfile);
      updateCartDisplay()
      addLines();
      getCartTotal();
      triggerZoomUpddateToWidgets();

      currentCustomerProfile = customerProfile;
      matchFound = true;

      alert("Login sucessful. Welcome " + currentCustomerProfile.firstName + " " + currentCustomerProfile.lastName + ".");
      document.getElementById("LogInSubSection").style.display = "none";
      isLoggedIn = true;
      updateLoginWidgetStatus();      
    }
  })  

  if (!matchFound)
  {
    alert("Email address and password entered do not match any records.");
  }
}


function onLogoutButton() 
{
  // First confirm the user wants to logout.
  // Confirmation dialog adapted form https://www.w3schools.com/jsref/met_win_confirm.asp .

  var userConfirmation = confirm("Are you sure you want to log out?");

  if (userConfirmation)
  {
      copySettingsToCustomerProfile();
      // Must reset all the settings.
      clearAllSettings();
      updateCartDisplay();
      clearLoginAndSignUpInputs();
      getCartTotal();

      alert("Thank you for shopping with us " + currentCustomerProfile.firstName + " " + currentCustomerProfile.lastName + ". You have now been logged out.");
      currentCustomerProfile = null;

      isLoggedIn = false;
      updateLoginWidgetStatus();
  }
}


function updateLoginWidgetStatus() {
  if (isLoggedIn)
  {
    document.getElementById("LoginButtonMain").style.display = "none";
    document.getElementById("SignUpButton").style.display = "none";
    document.getElementById("LogoutButton").style.display = "block";
  }
  else
  {
    document.getElementById("SignUpButton").style.display = "block";
    document.getElementById("LoginButtonMain").style.display = "block";
    document.getElementById("SignUpButton").style.float = "right";
    document.getElementById("LoginButtonMain").style.float = "right";
    

    document.getElementById("LogoutButton").style.display = "none";
  }

  document.getElementById("Client").style.display = "none"
  document.getElementById("Product").style.display = "none"
  document.getElementById("Cart").style.display = "none"
  disabledZoomFeatures(true, true)
}




function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
//code for getPage function inspired from https://stackoverflow.com/a/56111513/15518664 and  by professor Caroline Barriere
//https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery  
//name of all the tabs
let allTabNames = ["Client","Product","Cart","About","SignUp","Search"]

let fruits = ["apple","kiwi"]
function returnSearch(){
  for(let i = 0; i < fruits.length; i++){
    if(document.getElementById('srch').value === fruits[i]){
      console.log(fruits[i],"found it")
      document.getElementById('searchResults').innerHTML =fruits[i] ;

    }
  }
  
}

function getPage(elem) {
  // deletes previous search results if the current page is not the search page
 if(elem != "Search") {
  document.getElementById("search-container").innerHTML = "";
}
  let value = ""
  let page = document.getElementById(elem);
  let j 
  for (let i = 0; i < allTabNames.length; i++) {
    j = document.getElementById(allTabNames[i])
    console.log("i is",allTabNames[i])
    console.log("elem is ",elem)
    if (j != page){
      j.style.display = "none"
    }
  }
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
    // let value = ""
    // let page = document.getElementById(elem);
    // document.getElementById(hide1).style.display = "none"
    // document.getElementById(hide2).style.display = "none"
    // document.getElementById(hide3).style.display = "none"
    // if (page.style.display == "")
    // {
    //   value = "none";
    //   disabledZoomFeatures(true, true)
    // }
    // else
    // {
    //   disabledZoomFeatures(zoomedIn, !zoomedIn)
    // }

    // page.style.display = value;
  
    removeAll()
    displayAllProducts()
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
    this.organicSelection = "organicOnly";
    this.isZoomedIn = true;
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

  // A sample customer so the system already has 1 customer at the very begining.
  var sampleCustomer = new CustomerProfile("Karim", "Dahel", "kdahe094@hotmail.com", "password");
  sampleCustomer.cartContent.set("organic banana", 1);
  sampleCustomer.cartContent.set("salmon", 2);
  sampleCustomer.cartContent.set("poultry", 4);
  sampleCustomer.cartContent.set("milk", 1);

  sampleCustomer.organicSelection = "organicOnly"; // Organic Products Only 
  sampleCustomer.isZoomedIn = true;

  // Add the sample customer to the custumer map.
  customerProfiles.set("kdahe094@hotmail.com", sampleCustomer);
}

/*code inspired from youtube tutorial https://www.google.com/search?q=add+to+cart+button+html+and+javascript&oq=&aqs=chrome.0.35i39i362l8.147681j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_Mrz1Yc3LF5-aptQP1NC7uA820
products is an array containing the names of the products added to the cart
cartTotal is the total after all the items are added to the cart*/

{
	var products = new Map([]);
	var cartTotal = 0;
  var zoomedIn = false;
}
var productQuantity = 1;


/*function that sets the value for productQuantity*/
function setProductQuantity(quantity) {
  productQuantity = quantity
}

/*Adds the items selected by the user to the cart*/
function cartedItems(productButtonId) {

  productName = productButtonId.replace("_button", ""); // replace solution obtained from https://stackoverflow.com/questions/10398931/how-to-remove-text-from-a-string
  var productPrice = getProductPrice(productName);

  var quantity_id = productName + "_quantity";
  var productQuantity = document.getElementById(quantity_id).value
  
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


  //updateCartDisplay()
  //addLines();
  //getCartTotal();

}


function clearCartDisplay()
{
  products.forEach (function(productQuantity, productName) {
    deletedButton = productName + "del";
    removeItemFromCart(deletedButton);
   })
  
}


/* Map usage and iteration inspired from https://www.w3schools.com/js/js_object_maps.asp*/
function updateCartDisplay(price, quantity, name)
{
  var table = document.getElementById("table")
  var row = table.insertRow()
  row.id = name + "row"

  var img = document.createElement('img')
  for (var i = 0; i < 15; i++) {
    if (all_products_in_store[i].name == name) {
      img.src = all_products_in_store[i].imageSrc
    }
  } 
  img.getAnimations

  img.style.width = "50px"
  img.style.height = "50px"

  var del = document.createElement('button')
	del.id = name + "del"
	del.class = "deleteBtn"
	del.setAttribute('onclick', 'removeItemFromCart(this.id);') 
	del.innerText = "🗑"

  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  var cell4 = row.insertCell(3)
  var cell5 = row.insertCell(4)
  var cell6 = row.insertCell(5)

  cell1.append(del)
  cell2.innerHTML = name
  cell3.append(img)
  cell4.innerHTML = "$"+price
  cell5.innerHTML = quantity
  cell6.innerHTML = "$"+price*quantity

  cartTotalDisplay()

  //document.getElementById("cart").setAttribute('style', 'white-space: pre;');
  //adding table code inspired from https://www.w3schools.com/jsref/met_table_insertrow.asp

  //let flag = true
  // Clear the cart display text
  //document.getElementById("cart").textContent = "Here are the contents of your cart:\n\n";

 

  // // Now display each item in the cart one by one.
  // products.forEach (function(productQuantity, productName)
  // {
  //   var productButtonId = productName + "_button"
  //   var productPrice = getProductPrice(productName);
  //   var additionalPrice = parseFloat(productPrice) * productQuantity
  //   document.getElementById("cart").textContent += " " + productName + " [" + productQuantity + "] = " + "$" + additionalPrice.toFixed(2) + "\r\n";

  // })
}

//function that displays the cart total
function cartTotalDisplay() {
  var display = document.getElementById("totalDisplay")
  display.innerHTML = "$"+cartTotal
}

//function that removes items from cart
function removeItemFromCart(delId) {
  
  var rowId = delId.replace("del", "row")
  var row = document.getElementById(rowId)
  var price = row.cells[3].innerHTML.replace("$", "")
  var quantity = row.cells[4].innerHTML
  cartTotal = cartTotal - price*quantity
  cartTotalDisplay()
  
  row.parentNode.removeChild(row)

}


// function to add line spaces
// function addLines() {
// 	document.getElementById("cartTotal").setAttribute('style', 'white-space: pre;');
// 	for (var i = 0; i < 1; i++) {
// 		 document.getElementById("cart").textContent += "\r\n";
// 	}
// }

/*Updates the cart total with the prices of each item multiplied by their quantities*/
function updateCartTotal(price, quantity, name) {
  cartTotal += price;
  //alert(cartTotal)

  var itemString = "item"
  if (quantity > 1)
  {
    itemString = "items"
  }
  alert("Added " + quantity + " " + name + " " + itemString + " to cart.\nYour cart total is $" + cartTotal.toFixed(2))
  updateCartDisplay(price,quantity, name)
}

// function getCartTotal() {

//   if (cartTotal > 0)
//   {
//     document.getElementById("cartTotal").textContent = " Total price: $" + cartTotal.toFixed(2);
//   }
//   else
//   {
//     document.getElementById("cartTotal").textContent = "";
//   }


// }

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


function clearAllSettings() 
{
  clearAllFilters();
  cartTotal = 0;
  products.clear();

  // Must reset the zoom settiings as well
  zoomedIn = false;

  triggerZoomUpddateToWidgets();
 
  document.getElementById("customerName").style.display = "none"  

}

function clearAllFilters() 
{

  var diateryCharacteristicCheckboxes = document.getElementsByClassName("diateryCharacteristicCheckbox");

  for (var i = 0; i < diateryCharacteristicCheckboxes.length; i++) {
    diateryCharacteristicCheckboxes[i].checked = false;
  }

  document.getElementById("organicSelectionComboBox").value = "noOrganicFilter";
  updateOrganicFilters("noOrganicFilter");

}



function triggerZoomUpddateToWidgets()
{
  if (zoomedIn)
  {
    zoomIn("zoomtext");  zoomInH2("zoomh2");  zoomInH2("zoomh3");  zoomInH2("zoomh4"); updateZoomInButtonSensitivities(true);  updateProductSize();
  }
  else
  {
    zoomOut("zoomtext"); zoomOuth2("zoomh2");  zoomOuth3("zoomh3");  zoomOuth2("zoomh4"); updateZoomInButtonSensitivities(false);  resetProductSize();
  }  
}


function clearLoginAndSignUpInputs()
{
  var allCustomerInputTextFields = document.getElementsByClassName("customerInputTextField");

  for (var i = 0; i < allCustomerInputTextFields.length; i++) {
    allCustomerInputTextFields[i].value = "";
  }
}


function updateLoginWidgetStatus() {

  if (isLoggedIn)
  {
    document.getElementById("LoginButtonMain").textContent  = "Log Out";
    document.getElementById("SignUpButton").disabled = true;
  }
  else
  {
    document.getElementById("LoginButtonMain").textContent  = "Log In";
    document.getElementById("SignUpButton").disabled = false;
  }
  

  document.getElementById("Client").style.display = "none"
  document.getElementById("Product").style.display = "none"
  document.getElementById("Cart").style.display = "none"
  disabledZoomFeatures(true, true)
}


function onLoginButton()
{
  if (!isLoggedIn)
  {
    // The button text is "Log In", the user wants to log into their account.
    clearLoginAndSignUpInputs();
    document.getElementById("LogInSubSection").style.display = "block";
  }
  else
  {    
    // The button text is "Log Out", the user wants to log off of their account.

    // First confirm the user wants to logout.
    // Confirmation dialog adapted form https://www.w3schools.com/jsref/met_win_confirm.asp .

    var userConfirmation = confirm("Are you sure you want to log out?");

    if (userConfirmation)
    {
        copySettingsToCustomerProfile();
  
        alert("Thank you for shopping with us " + currentCustomerProfile.firstName + " " + currentCustomerProfile.lastName + ". You have now been logged out.");
        // Must reset all the settings.
        clearCartDisplay();
        clearAllSettings();
        //updateCartDisplay();
        
        
        //getCartTotal();

        clearLoginAndSignUpInputs();
        currentCustomerProfile = null;
  
        isLoggedIn = false;
        updateLoginWidgetStatus();
    }    
  }

}



function onLoginCancel()
{
  document.getElementById("LogInSubSection").style.display = "none";
}


function onSignUpButton()
{
  clearLoginAndSignUpInputs();
  document.getElementById("SignUpSubSection").style.display = "block";
}

function onSignupCancel()
{
  document.getElementById("SignUpSubSection").style.display = "none";
}


function authenticateUser()
{
  var emailEntered = document.getElementById("emailInputLogIn").value;
  if (emailEntered == "")
  {
    alert("The email field is required");
    return;
  }

  var passwordEntered = document.getElementById("passwordInputLogIn").value;
  if (passwordEntered == "")
  {
    alert("The password field is required");
    return;
  }  

  var matchFound = false

  customerProfiles.forEach (function(customerProfile, customerEmail)
  {
    if (emailEntered == customerEmail && passwordEntered == customerProfile.password)
    {
      // Found a user with the credentials entered.
      loadCustomerSetting(customerProfile);
      //updateCartDisplay()
      //addLines();
      //getCartTotal();
      triggerZoomUpddateToWidgets();

      currentCustomerProfile = customerProfile;
      matchFound = true;

      alert("Login sucessful. Welcome " + currentCustomerProfile.firstName + " " + currentCustomerProfile.lastName + ".");
      document.getElementById("LogInSubSection").style.display = "none";
      isLoggedIn = true;
      updateLoginWidgetStatus(); 
      
      // Include the customer's name in the top right indicating he or she is logged in.
      document.getElementById("customerName").style.display = "flex";
      document.getElementById("customerName").innerHTML = "Welcome " + customerProfile.firstName + " " + customerProfile.lastName;      
    }
  })  

  if (!matchFound)
  {
    alert("Email address and password entered do not match any records.");
  }
}


function loadCustomerSetting(customerProfile)
{
  clearAllSettings();

  customerProfile.cartContent.forEach (function(productQuantity, productName) {

   products.set(productName, productQuantity);
   var productPrice = getProductPrice(productName);
   var additionalPrice = parseFloat(productPrice) * parseFloat(productQuantity)
   cartTotal += additionalPrice;

   updateCartDisplay(productPrice, productQuantity, productName);
  })

  zoomedIn = customerProfile.isZoomedIn;    

  customerProfile.diaterycharacteristicChoices.forEach (function(ischaracteristicFilterOn, characteristicID)
  {
    document.getElementById(characteristicID).checked = ischaracteristicFilterOn;
    updateDiateryCharacteristicsFilters(characteristicID, ischaracteristicFilterOn)
  })  

  updateOrganicFilters(customerProfile.organicSelection)
  document.getElementById("organicSelectionComboBox").value = customerProfile.organicSelection
}

function registerCustomer()
{
  var firstNameEntered = document.getElementById("firstNameInputSignUp").value;
  if (firstNameEntered == "")
  {
    alert("The first name field is required");
    return;
  } 

  var lastNameEntered = document.getElementById("lastNameInputSignUp").value;
  if (lastNameEntered == "")
  {
    alert("The last name field is required");
    return;
  }   

  var emailEntered = document.getElementById("emailInputSignUp").value;
  if (emailEntered == "")
  {
    alert("The email field is required");
    return;
  }
  if (isEmailAlreadyInUse(emailEntered))
  {
    console.log("An account already exists with the email " + emailEntered);
    alert("An account already exists with the email " + emailEntered);
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

  var passwordEntered = document.getElementById("passwordInputSignUp").value;
  if (passwordEntered == "")
  {
    alert("The password field is required");
    return;
  }

  var passwordConfirmEntered = document.getElementById("confirmPasswordInputSignUp").value;
  if (passwordConfirmEntered != passwordEntered)
  {
    alert("The password confirmation does not match the password entered.");
    return;
  }

  // The inputs are valid, so the customer can now be registered into the system.
  var newCustomer = new CustomerProfile(firstNameEntered, lastNameEntered, emailEntered, passwordEntered); //"kdahe094@hotmail.com", "password");
  customerProfiles.set(emailEntered, newCustomer);

  alert("Your account has been created. Welcome " + newCustomer.firstName + " " + newCustomer.lastName + ".");
  document.getElementById("SignUpSubSection").style.display = "none";

}

function isEmailAlreadyInUse(newEmailAddress)
{
  console.log("newEmailAddress = " + newEmailAddress)
  var matchFound = false;
  customerProfiles.forEach (function(customerProfile, customerEmail)
  {
    console.log("customerEmail = " + customerEmail)
    console.log("newEmailAddress == customerEmail = " + newEmailAddress == customerEmail)
    if (newEmailAddress == customerEmail)
    {
      console.log("same");
      //console.log(customerProfile)
      matchFound = true;
      return matchFound
    }
  })
  return matchFound;
}


function copySettingsToCustomerProfile()
{
  // Update the customer profile for the currently logged in customer as he or she is about to be logged out.
  
  currentCustomerProfile.cartContent.clear();

  // Copy the current cart over to the customer's cart.
  products.forEach (function(productQuantity, productName) {
    currentCustomerProfile.cartContent.set(productName, productQuantity);
   })

   currentCustomerProfile.isZoomedIn = zoomedIn;

  var diateryCharacteristicCheckboxes = document.getElementsByClassName("diateryCharacteristicCheckbox");

  for (var i = 0; i < diateryCharacteristicCheckboxes.length; i++) {
    currentCustomerProfile.diaterycharacteristicChoices.set(diateryCharacteristicCheckboxes[i].id, diateryCharacteristicCheckboxes[i].checked);
  }

  currentCustomerProfile.organicSelection = document.getElementById("organicSelectionComboBox").value;

}
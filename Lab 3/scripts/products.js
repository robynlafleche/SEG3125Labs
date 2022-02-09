// code inspired by https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery

// array of products contained in our store, along with their categories

var products = [
	{
		name: "organic banana",
		imageSrc: "images/banana.png",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruits-veg",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 1.00,
		quantity: 0
	},
	
	{
		name: "organic apple",
		imageSrc: "images/apple.png",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruits-veg",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 1.50,
		quantity: 0
	},
	
	{
		name: "organic strawberry",
		imageSrc: "images/strawberry.png",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruits-veg",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 2.50,
		quantity: 0
	},
	
	{
		name: "white bread",
		imageSrc: "images/bread.png",
		vegetarian: true,
		diabeticSafe: false,
		foodCategory: "bakery",
		glutenFree: false,
		dairyFree: true,
		organic: false,
		price: 1.50,
		quantity: 0
	},
		
	{
		name: "tortillas",
		imageSrc: "images/tortillas.png",
		vegetarian: true,
		diabeticSafe: false,
		foodCategory: "bakery",
		glutenFree: false,
		dairyFree: true,
		organic: false,
		price: 2.75,
		quantity: 0
	},
	
	{
		name: "muffins",
		imageSrc: "images/muffins.png",
		vegetarian: true,
		diabeticSafe: false,
		foodCategory: "bakery",
		glutenFree: false,
		dairyFree: false,
		organic: false,
		price: 4.50,
		quantity: 0
	},
	
	{
		name: "butter",
		imageSrc: "images/butter.png",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "dairy",
		glutenFree: true,
		dairyFree: false,
		organic: false,
		price: 3.75,
		quantity: 0
	},
	
	{
		name: "milk",
		imageSrc: "images/milk.png",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "dairy",
		glutenFree: true,
		dairyFree: false,
		organic: false,
		price: 4.00,
		quantity: 0
	},
	
	{
		name: "cheese",
		imageSrc: "images/cheese.png",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "dairy",
		glutenFree: true,
		dairyFree: false,
		organic: false,
		price: 3.00,
		quantity: 0
	},
	
	{
		name: "organic kale",
		imageSrc: "images/kale.png",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruits-veg",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 2.00,
		quantity: 0
	},
	
	{
		name: "organic peppers",
		imageSrc: "images/peppers.png",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruits-veg",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 1.75,
		quantity: 0
	},
	
	{
		name: "organic tomatoes",
		imageSrc: "images/tomato.png",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruits-veg",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 1.00,
		quantity: 0
	},
	
	{
		name: "pork",
		imageSrc: "images/pork.png",
		vegetarian: false,
		diabeticSafe: true,
		foodCategory: "meat",
		glutenFree: true,
		dairyFree: true,
		organic: false,
		price: 8.00,
		quantity: 0
	},
	
	{
		name: "poultry",
		imageSrc: "images/poultry.png",
		vegetarian: false,
		diabeticSafe: true,
		foodCategory: "meat",
		glutenFree: true,
		dairyFree: true,
		organic: false,
		price: 9.00,
		quantity: 0
	},
	
	{
		name: "fish",
		imageSrc: "images/fish.png",
		vegetarian: false,
		diabeticSafe: true,
		foodCategory: "meat",
		glutenFree: true,
		dairyFree: true,
		organic: false,
		price: 9.50,
		quantity: 0
	},
	
	{
		name: "beef",
		imageSrc: "images/beef.png",
		vegetarian: false,
		diabeticSafe: true,
		foodCategory: "meat",
		glutenFree: true,
		dairyFree: true,
		organic: false,
		price: 11.00,
		quantity: 0
	},

];


function displayAllProducts() {

	var container = document.getElementById("product-container")  

	for (let i = 0; i < 15; i++) {
	var div = document.createElement('div')

	div.id = products[i].name

	var pNamePara = document.createElement('p')
	pNamePara.class = "zoomtext"
	pNamePara.innerHTML = products[i].name
	var pPricePara = document.createElement('p')
	pPricePara.class = "price"
	pPricePara.innerHTML = "$" + products[i].price
	var img = document.createElement('img')
	img.src = products[i].imageSrc
  
	img.style.width = "100px"
  	img.style.height = "100px"

	var quantity = document.createElement('input')
	quantity.id = products[i].name + " quantity"
	quantity.class = "quantity"
	quantity.max = "10"
	quantity.min = "1"
	quantity.type = "number"
	quantity.value = "1"
	quantity.setAttribute('onclick', 'setProductQuantity(this.value);') 

	var btn = document.createElement('button')
	btn.id = products[i].name+" button"
	btn.class = "addCartBtn"
	btn.setAttribute('onclick', 'cartedItems(this.id);') 
	btn.innerText = "Add product to cart"
	


	div.append(pNamePara)
	div.append(img)
	div.append(pPricePara)
	div.append(quantity)
	div.append(btn)

	container.appendChild(div)
		

	
	}
	

}

//removes all children from the product page
function removeAll() {
	var container = document.getElementById("product-container") 
	container.innerHTML = ""
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
}

function updateOrganicFilters(choice) {

  organicFilterChoice = choice

}

function filterProductsPage (selection) {

	if (selection == 'all') {
		removeAll()
		displayAllProducts()
	}
	else if (selection == 'restrictions') {
		var container =  document.getElementById("product-container")
		removeAll()
		displayAllProducts()
		var productsToRemove = restrictProducts()
		for (var i = 0; i < productsToRemove.length; i++) {
			// Remove the products that need to be filtered.
			console.log("productsToRemove[i] = " + productsToRemove[i])
			container.removeChild(document.getElementById(productsToRemove[i]))
		}
	}
	else if (selection == 'fruits-veg') {
		var container =  document.getElementById("product-container")
		removeAll()
		displayAllProducts()
		var productsToRemove = [];
		for (var i = 0; i < 15; i++) {
			if (products[i].foodCategory != selection) {
				productsToRemove.push(products[i].name)
			}
		}

		for (var i = 0; i < productsToRemove.length; i++) {
			container.removeChild(document.getElementById(productsToRemove[i]))
		}
	}

	else if (selection == 'meat') {
		var container =  document.getElementById("product-container")
		removeAll()
		displayAllProducts()
		var productsToRemove = [];
		for (var i = 0; i < 15; i++) {
			if (products[i].foodCategory != selection) {
				productsToRemove.push(products[i].name)
			}
		}

		for (var i = 0; i < productsToRemove.length; i++) {
			container.removeChild(document.getElementById(productsToRemove[i]))
		}
	}

	else if (selection == 'dairy') {
		var container =  document.getElementById("product-container")
		removeAll()
		displayAllProducts()
		var productsToRemove = [];
		for (var i = 0; i < 15; i++) {
			if (products[i].foodCategory != selection) {
				productsToRemove.push(products[i].name)
			}
		}

		for (var i = 0; i < productsToRemove.length; i++) {
			container.removeChild(document.getElementById(productsToRemove[i]))
		}
	}

	else if (selection == 'bakery') {
		var container =  document.getElementById("product-container")
		removeAll()
		displayAllProducts()
		var productsToRemove = [];
		for (var i = 0; i < 15; i++) {
			if (products[i].foodCategory != selection) {
				productsToRemove.push(products[i].name)
			}
		}

		for (var i = 0; i < productsToRemove.length; i++) {
			container.removeChild(document.getElementById(productsToRemove[i]))
		}
	}

}

// based on user's dietary restrictions provided, return a list of products not to be displayed

function restrictProducts() {

	let product_names_to_filter_dietary = [];

	if (allFiltersToApply.length != 0) {
		for (var i = 0; i < allFiltersToApply.length; i++) {
			for (var j = 0; j < 15; j++) {
				if ((allFiltersToApply[i] == "vegetarian") && (products[j].vegetarian != true)){
					product_names_to_filter_dietary.push(products[j].name);
				}
				else if ((allFiltersToApply[i] == "glutenFree") && (products[j].glutenFree != true)){
					product_names_to_filter_dietary.push(products[j].name);
				}
				else if ((allFiltersToApply[i] == "diabeticSafe") && (products[j].diabeticSafe != true)){
					product_names_to_filter_dietary.push(products[j].name);
				}
				else if ((allFiltersToApply[i] == "dairyFree") && (products[j].dairyFree != true)){
					product_names_to_filter_dietary.push(products[j].name);
				}
			}
		}
	}


	let product_names_to_filter_organic = [];

	for (var j = 0; j < 15; j++)
	{
		if (organicFilterChoice == "organicOnly" && !products[j].organic)
		{
			product_names_to_filter_organic.push(products[j].name);
		}
		else if (organicFilterChoice == "nonOrganicOnly" && products[j].organic)
		{
			product_names_to_filter_organic.push(products[j].name);
		}
	}

	// Must get the union of the two lists
	let all_product_names_to_filter = [];
	for (var i = 0; i < product_names_to_filter_dietary.length; i++) {
		all_product_names_to_filter.push(product_names_to_filter_dietary[i])
	}
	for (var i = 0; i < product_names_to_filter_organic.length; i++) {
		all_product_names_to_filter.push(product_names_to_filter_organic[i])
	}

	let filtered_union_names_to_remove = new Set(all_product_names_to_filter);

	console.log("filtered_union_names_to_remove")
	console.log(filtered_union_names_to_remove)

	let all_product_names_to_filter_final = []
	filtered_union_names_to_remove.forEach(function(product_name)
	{
		all_product_names_to_filter_final.push(product_name);
	})

	console.log("all_product_names_to_filter_final")
	console.log(all_product_names_to_filter_final)	

	return all_product_names_to_filter_final;
}


/*Creates an object for the id of the parent class and it's price*/
function idPrice(id, price) {
  this.id = id
  this.price = price
}

var dataArray = []

/*Sorts the prices either from low-high or high-low depending on user's selection*/
/*After the prices are sorted, parentclass for each price is referenced by id and appended to the original container in the sorted order*/
function sortPrices(value) {
  for (var i = 0; i < 15; i++) {
    dataArray[i] = new idPrice(products[i].name, products[i].price)
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
  var container = document.getElementById("product-container")
  for (var i = 0; i < 15; i++) {
  var node1 = document.getElementById(dataArray[i].id)
  console.log(dataArray[0].id)
  container.append(node1)
}
}

// calculate the total price of selected items, given a list of products 
function getTotalPrice(prods) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i++) {
		if (prods.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
function displaySearch() {
	document.getElementById('search-container').innerHTML = ''
	// document.getElementById("Search").style.visibility = 'visible'
	//document.getElementById("Search").style.display = ''
	console.log(document.getElementById("srch").value)
	let val = document.getElementById("srch").value.trim().toLowerCase()
	let counter = 0
	console.log("val = " + val)

	if (val == "")
	{
		// Do nothing if no text is in the search field
		console.log("val is empty")
		//return;
	}

	if (document.getElementById("Search").style.display = "none")
	{
		getPage("Search");
	}
	

	var container = document.getElementById("search-container")  
	container.display 
	let storedNames = []
	for (let i = 0; i < 15; i++) {
	var div = document.createElement('div')
	console.log("count",products)
	// includes function inspired from https://stackoverflow.com/a/1789952/15518664
	if(products[i].name.includes(val) ){
		counter ++
	div.id = products[i].name
	storedNames.push(products[i].name)
	console.log("products[i].name",products[i].name)

	var pNamePara = document.createElement('p')
	pNamePara.innerHTML = products[i].name
	var pPricePara = document.createElement('p')
	pPricePara.class = "price"
	pPricePara.innerHTML = "$" + products[i].price
	var img = document.createElement('img')
	img.src = products[i].imageSrc

	img.style.width = "100px"
  	img.style.height = "100px"

	var quantity = document.createElement('input')
	quantity.id = products[i].name + "quantity"
	quantity.class = "quantity"
	quantity.max = 10
	quantity.min = 1
	quantity.type = Number
	quantity.value = 1

	var btn = document.createElement('button')
	btn.id = products[i].name+"button"
	btn.class = "addCartBtn"
	//btn.onclick = cartedItems(this.id)
	btn.innerText = "Add product to cart"



	div.append(pNamePara)
	div.append(img)
	div.append(pPricePara)
	div.append(quantity)
	div.append(btn)

	container.appendChild(div)

	}

	}
	if(counter === 0) {
		var message = document.createElement('div')
		// emoji from https://www.science.co.il/internet/html/Smileys.php
		message.innerHTML = "We couldn't find any results for your search😔"
		message.style.textAlign = "center"
		document.getElementById("search-container").appendChild(message)
	}

}
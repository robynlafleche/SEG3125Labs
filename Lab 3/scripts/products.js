// code inspired by https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery

// array of products contained in our store, along with their categories

var products = [
	{
		name: "organic banana",
		imageSrc: "images/banana.jpg",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruit",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 1.00
	},
	
	{
		name: "organic apple",
		imageSrc: "images/apple.jpg",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruit",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 1.50,
	},
	
	{
		name: "organic strawberry",
		imageSrc: "images/strawberry.jpg",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruit",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 2.50,
	},
	
	{
		name: "white bread",
		imageSrc: "images/bread.jpg",
		vegetarian: true,
		diabeticSafe: false,
		foodCategory: "bread",
		glutenFree: false,
		dairyFree: true,
		organic: false,
		price: 1.50
	},
		
	{
		name: "tortillas",
		imageSrc: "images/tortillas.jpg",
		vegetarian: true,
		diabeticSafe: false,
		foodCategory: "bread",
		glutenFree: false,
		dairyFree: true,
		organic: false,
		price: 2.75
	},
	
	{
		name: "muffins",
		imageSrc: "images/muffins.jpg",
		vegetarian: true,
		diabeticSafe: false,
		foodCategory: "bakery",
		glutenFree: false,
		dairyFree: false,
		organic: false,
		price: 4.50
	},
	
	{
		name: "butter",
		imageSrc: "images/butter.jpg",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "dairy",
		glutenFree: true,
		dairyFree: false,
		organic: false,
		price: 3.75
	},
	
	{
		name: "milk",
		imageSrc: "images/milk.jpg",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "dairy",
		glutenFree: true,
		dairyFree: false,
		organic: false,
		price: 4.00
	},
	
	{
		name: "cheese",
		imageSrc: "images/cheese.jpg",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "dairy",
		glutenFree: true,
		dairyFree: false,
		organic: false,
		price: 3.00
	},
	
	{
		name: "organic kale",
		imageSrc: "images/kale.jpg",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "vegetable",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 2.00
	},
	
	{
		name: "organic peppers",
		imageSrc: "images/peppers.jpg",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "vegetable",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 1.75
	},
	
	{
		name: "organic tomatoes",
		imageSrc: "images/tomato.jpg",
		vegetarian: true,
		diabeticSafe: true,
		foodCategory: "fruit",
		glutenFree: true,
		dairyFree: true,
		organic: true,
		price: 1.00
	},
	
	{
		name: "pork",
		imageSrc: "images/pork.jpg",
		vegetarian: false,
		diabeticSafe: true,
		foodCategory: "meat",
		glutenFree: true,
		dairyFree: true,
		organic: false,
		price: 8.00
	},
	
	{
		name: "poultry",
		imageSrc: "images/poultry.jpg",
		vegetarian: false,
		diabeticSafe: true,
		foodCategory: "meat",
		glutenFree: true,
		dairyFree: true,
		organic: false,
		price: 9.00
	},
	
	{
		name: "salmon",
		imageSrc: "images/fish.jpg",
		vegetarian: false,
		diabeticSafe: true,
		foodCategory: "fish",
		glutenFree: true,
		dairyFree: true,
		organic: false,
		price: 9.50
	},

];

function displayAllProducts() {

	var container = document.getElementById("product-container")  

	for (let i = 0; i < 15; i++) {
	var div = document.createElement('div')

	div.id = products[i].name

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

// based on user's dietary restrictions provided, return a reduced list of products

function restrictProducts(prod, rule) {
	let product_names = [];
	for (let i = 0; i < prod.length; i++) {
		if ((rule == "Vegetarian") && (prod[i].vegetarian == true)){
			product_names.push(prod[i].name);
		}
		else if ((rule == "Allergic to gluten") && (prod[i].glutenFree == true)){
			product_names.push(prod[i].name);
		}
		else if ((rule == "Diabetic") && (prod[i].diabeticSafe == true)){
			product_names.push(prod[i].name);
		}
		else if ((rule == "Lactose intolerant") && (prod[i].dairyFree == true)){
			product_names.push(prod[i].name);
		}
		else if (rule == "None"){
			product_names.push(prod[i].name);
		}
	}
	return product_names;
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
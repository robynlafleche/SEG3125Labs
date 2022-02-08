// code inspired by https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery

// array of products contained in our store, along with their categories

var products = [
		{
			name: "organic banana",
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: fruit,
			glutenFree: true,
			dairyFree: true,
			organic: true,
			price: 1.00
		},
		
		{
			name: "organic apple",
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: fruit,
			glutenFree: true,
			dairyFree: true,
			organic: true,
			price: 1.50,
		},
		
		{
			name: "organic strawberry",
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: fruit,
			glutenFree: true,
			dairyFree: true,
			organic: true,
			price: 2.50,
		},
		
		{
			name: "white bread"
			vegetarian: true,
			diabeticSafe: false,
			foodCategory: bread,
			glutenFree: false,
			dairyFree: true,
			organic: false,
			price: 1.50
		},
		
		{
			name: "whole wheat bread"
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: bread,
			glutenFree: false,
			dairyFree: true,
			organic: false,
			price: 2.00
		},
		
		{
			name: "tortillas"
			vegetarian: true,
			diabeticSafe: false,
			foodCategory: bread,
			glutenFree: false,
			dairyFree: true,
			organic: false,
			price: 2.75
		},
		
		{
			name: "muffins"
			vegetarian: true,
			diabeticSafe: false,
			foodCategory: bakery,
			glutenFree: false,
			dairyFree: false,
			organic: false,
			price: 4.50
		},
		
		{
			name: "butter"
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: dairy,
			glutenFree: true,
			dairyFree: false,
			organic: false,
			price: 3.75
		},
		
		{
			name: "milk"
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: dairy,
			glutenFree: true,
			dairyFree: false,
			organic: false,
			price: 4.00
		},
		
		{
			name: "cheese"
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: dairy,
			glutenFree: true,
			dairyFree: false,
			organic: false,
			price: 3.00
		},
		
		{
			name: "organic kale"
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: vegetable,
			glutenFree: true,
			dairyFree: true,
			organic: true,
			price: 2.00
		},
		
		{
			name: "organic peppers"
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: vegetable,
			glutenFree: true,
			dairyFree: true,
			organic: true,
			price: 1.75
		},
		
		{
			name: "organic tomatoes"
			vegetarian: true,
			diabeticSafe: true,
			foodCategory: fruit,
			glutenFree: true,
			dairyFree: true,
			organic: true,
			price: 1.00
		},
		
		{
			name: "pork"
			vegetarian: false,
			diabeticSafe: true,
			foodCategory: meat,
			glutenFree: true,
			dairyFree: true,
			organic: false,
			price: 8.00
		},
		
		{
			name: "beef"
			vegetarian: false,
			diabeticSafe: true,
			foodCategory: meat,
			glutenFree: true,
			dairyFree: true,
			organic: false,
			price: 12.00
		},
		
		{
			name: "poultry"
			vegetarian: false,
			diabeticSafe: true,
			foodCategory: meat,
			glutenFree: true,
			dairyFree: true,
			organic: false,
			price: 9.00
		},
		
		{
			name: "salmon"
			vegetarian: false,
			diabeticSafe: true,
			foodCategory: fish,
			glutenFree: true,
			dairyFree: true,
			organic: false,
			price: 9.50
		},

];
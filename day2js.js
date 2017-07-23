//objects 

var myFavoriteRecipes = [
	 {recipeTitle: 'Avocado Salami Sandwich',
	 ingredients: ['1 Whole Avocado', '4-6 slices of Salami',
	 '1 oz  of Roasted Tomato', '2 Sandwich sized Ciabatta bread'],
	 servings: 2},

	{recipeTitle: 'Fruit Salad',
	 ingredients: ['1/2 cup of Strawberries', '1/4 cups of Blueberris',
	 			  '1/4 cup of Blackberries'],
	 servings: 2
	 }

];

for (var i = 0; i < myFavoriteRecipes.length; i++) {
	var giveMeRecipe = myFavoriteRecipes[i];
	console.log(giveMeRecipe.recipeTitle);

	console.log('\n');

	console.log('Serving Size: ' + giveMeRecipe.servings);
	console.log('Ingredients:');
	console.log('\n');

	for (var j = 0; j < myFavoriteRecipes[i].ingredients.length; j++) {
		var myIngredients = myFavoriteRecipes[i].ingredients[j];
		console.log(myIngredients);
	}

	console.log('\n');
}

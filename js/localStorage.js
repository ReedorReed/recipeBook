let recipes;

let recipeArray;

if (localStorage.getItem('recipes')) {
	recipeArray = JSON.parse(localStorage.getItem('recipes'));
} else {
	recipeArray = [];
}
console.log(recipeArray);

submitRecipe.addEventListener('click', function (event) {
	event.preventDefault();

	//Get the recipe array
	let recipeArray = JSON.parse(localStorage.getItem('recipes')) || [];

	//See if in edit mode
	const editIndex = this.dataset.editIndex;

	if (editIndex !== undefined) {
		//Update recipe
		recipeArray[editIndex] = recipeContent.innerHTML;
	} else {
		//add new recipe
		recipeArray.push(recipeContent.innerHTML);
	}

	//Save to localstorage
	localStorage.setItem('recipes', JSON.stringify(recipeArray));

	//Reset form
	recipeTitle.value = '';
	recipeContentTitle.innerHTML = '';
	ingredients.value = '';
	directions.value = '';
	ingredientCheckboxes.innerHTML = '';
	addStepList.innerHTML = '';

	//Reset submit button
	submitRecipe.innerText = 'Gem opskrift';
	delete submitRecipe.dataset.editIndex;
});

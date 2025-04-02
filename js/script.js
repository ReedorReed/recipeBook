//Realtime text function
recipeTitle.addEventListener('keyup', function () {
	recipeContentTitle.innerHTML = recipeTitle.value;
});

//Add ingredient with checkbox function
addIngrdient.addEventListener('click', function (event) {
	event.preventDefault();

	const checkBox = document.createElement('input');
	const label = document.createElement('label');
	checkBox.type = 'checkbox';
	label.classList.add('ingredientLabels');
	const textContent = document.createTextNode(ingredients.value);
	label.appendChild(checkBox);
	label.appendChild(textContent);

	ingredientCheckboxes.appendChild(label);

	ingredients.value = '';
});

//Add list items to ordered list function
addStep.addEventListener('click', function (event) {
	event.preventDefault();

	const listItem = document.createElement('li');
	const text = document.createTextNode(directions.value);
	listItem.classList.add('listItemsClass');
	listItem.appendChild(text);
	addStepList.appendChild(listItem);

	directions.value = '';
});

//Delete everything and reset form
resetForm.addEventListener('click', () => {
	recipeTitle.value = '';
	recipeContentTitle.innerHTML = '';
	ingredients.value = '';
	directions.value = '';
	ingredientCheckboxes.innerHTML = '';
	addStepList.innerHTML = '';
});

//Edit recipes
document.addEventListener('DOMContentLoaded', function () {
	const urlParams = new URLSearchParams(window.location.search);
	const editIndex = urlParams.get('edit');

	if (editIndex !== null) {
		//Get recipe to edit
		let recipeArray = JSON.parse(localStorage.getItem('recipes')) || [];
		if (recipeArray[editIndex]) {
			const recipeHTML = recipeArray[editIndex];

			//div too parse HTML
			const tempDiv = document.createElement('div');
			tempDiv.innerHTML = recipeHTML;

			//Get title and fill form
			const titleElement = tempDiv.querySelector('#recipe-title');
			if (titleElement) {
				recipeTitle.value = titleElement.innerText;
				recipeContentTitle.innerHTML = titleElement.innerText;
			}

			//Get ingredients
			const checkboxes = tempDiv.querySelectorAll('.ingredientLabels');
			checkboxes.forEach(function (checkbox) {
				const clone = checkbox.cloneNode(true);
				ingredientCheckboxes.appendChild(clone);
			});

			//Get directions
			const steps = tempDiv.querySelectorAll('#add-step-list li');
			steps.forEach(function (step) {
				const clone = step.cloneNode(true);
				addStepList.appendChild(clone);
			});

			//Update submit button text
			submitRecipe.innerText = 'Opdater opskrift';

			//Save the edit
			submitRecipe.dataset.editIndex = editIndex;
		}
	}
});

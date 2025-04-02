document.addEventListener('DOMContentLoaded', loadRecipes);

function loadRecipes() {
	//Get recipes from localstorage
	let recipeArray = [];
	if (localStorage.getItem('recipes')) {
		recipeArray = JSON.parse(localStorage.getItem('recipes'));
	}
	//Clear any existing content
	recipeCard.innerHTML = '';

	//Check if there is any data in localstorage
	if (recipeArray.length === 0) {
		recipeCard.innerHTML = '<p>Ingen opskrifter fundet.</p>';
		return;
	}

	//Create div for each recipe
	recipeArray.forEach(function (recipeHTML, index) {
		const recipeElement = document.createElement('div');
		recipeElement.className = 'recipe-item';
		recipeElement.dataset.index = index;

		//Recipe card content
		recipeElement.innerHTML = recipeHTML;

		//Edit and delete buttons
		const buttonContainer = document.createElement('div');
		buttonContainer.className = 'recipe-buttons';

		const editBtn = document.createElement('button');
		editBtn.innerText = 'Rediger';
		editBtn.className = 'edit-btn';
		editBtn.onclick = function () {
			editRecipe(index);
		};

		const deleteBtn = document.createElement('button');
		deleteBtn.innerText = 'Slet opskrift';
		deleteBtn.className = 'delete-btn';
		deleteBtn.onclick = function () {
			deleteRecipe(index);
		};

		buttonContainer.appendChild(editBtn);
		buttonContainer.appendChild(deleteBtn);

		recipeElement.appendChild(buttonContainer);
		recipeCard.appendChild(recipeElement);
	});
}

//Delete recipe function
function deleteRecipe(index) {
	let recipeArray = JSON.parse(localStorage.getItem('recipes')) || [];

	//div to parse the HTML to
	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = recipeArray[index];

	//Get recipe title
	const titleElement = tempDiv.querySelector('#recipe-title');
	const title = titleElement ? titleElement.innerText : 'this recipe';

	//confirm deletion of recipe
	if (confirm(`Er du sikker på du vil slette opskrift "${title}"?`)) {
		recipeArray.splice(index, 1);

		//Update localstorage with changes
		localStorage.setItem('recipes', JSON.stringify(recipeArray));

		//Reload recipes to show changes
		loadRecipes();
	}
}

//Edit recipe function
function editRecipe(index) {
	let recipeArray = JSON.parse(localStorage.getItem('recipes')) || [];
	const recipeHTML = recipeArray[index];

	//div to parse the HTML to
	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = recipeHTML;

	//Get title
	const titleElement = tempDiv.querySelector('#recipe-title');
	const title = titleElement ? titleElement.innerText : '';

	//Form to re-direct to index.html to edit recipe
	if (confirm(`Vil du redigere "${title}"?`)) {
		window.location.href = 'index.html?edit=' + index;
	}
}

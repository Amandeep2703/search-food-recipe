const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');

let searchQuery = '';

//random recipe call start ------------


function getRandomRecipes(number, apiKey) {
  console.log("calling the getRandomRecipes function")
  fetch(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // Handle the data, such as displaying recipes or further processing
          console.log(data.recipes);

          
    
          // Loop through each recipe object in the results
          data.recipes.slice(0, 10).forEach(recipe => { // Limit to first 10 recipes
            // Create a div element with class "item"
            const div = document.createElement('div');
            div.className = 'item';
    
            // Create an img element with src and alt attributes
            const img = document.createElement('img');
            img.src =  recipe.image; // Set the image source from the recipe data
            img.alt = 'loading image...';
    
            // Create a div element with class "flex-container"
            const flexContainer = document.createElement('div');
            flexContainer.className = 'flex-container';
    
            // Create an h1 element with class "title"
            const title = document.createElement('h1');
            title.className = 'title';
            title.textContent = recipe.title; // Assuming recipe object has a 'title' property
    
            // Create an a element with href attribute
            const link = document.createElement('a');
            link.href = recipe.sourceUrl; // Assuming recipe object has a 'sourceUrl' property
            link.textContent = 'details';
    
            // Create a p element with class "item-data"
            const itemData = document.createElement('p');
            itemData.className = 'item-data';
            // itemData.textContent = `calories: ${recipe.calories || 'N/A'}`; // Assuming recipe object has a 'calories' property
    
            // Append img, title, and link to the flexContainer div
            flexContainer.appendChild(title);
            flexContainer.appendChild(link);
    
            // Append img, flexContainer, and itemData to the div with class "item"
            div.appendChild(img);
            div.appendChild(flexContainer);
            div.appendChild(itemData);
    
            // Append the created div to the document body
            document.getElementById('output-div').appendChild(div);
          });
        })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
}



// Usage example
const apiKey = '0de6db7814d14a5fb909acc997ac4e1d';
const numberOfRecipes = 10; // Number of random recipes you want to fetch
getRandomRecipes(numberOfRecipes, apiKey);

//random recipe call end-------------


//on serach results ----------

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  console.log(searchQuery);
  document.getElementById('output-div').innerHTML = '';


  // API call
  const apiKey = '0de6db7814d14a5fb909acc997ac4e1d';
  const query = searchQuery; // Your search query
  

 

  fetch(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the data, such as displaying recipes or further processing
      console.log(data.results);

      // Loop through each recipe object in the results
      data.results.slice(0, 10).forEach(recipe => { // Limit to first 10 recipes
        // Create a div element with class "item"
        const div = document.createElement('div');
        div.className = 'item';

        // Create an img element with src and alt attributes
        const img = document.createElement('img');
        img.src = "https://img.spoonacular.com/recipes/" + recipe.image; // Set the image source from the recipe data
        img.alt = 'loading image...';

        // Create a div element with class "flex-container"
        const flexContainer = document.createElement('div');
        flexContainer.className = 'flex-container';

        // Create an h1 element with class "title"
        const title = document.createElement('h1');
        title.className = 'title';
        title.textContent = recipe.title; // Assuming recipe object has a 'title' property

        // Create an a element with href attribute
        const link = document.createElement('a');
        link.href = recipe.sourceUrl; // Assuming recipe object has a 'sourceUrl' property
        link.textContent = 'details';

        // Create a p element with class "item-data"
        const itemData = document.createElement('p');
        itemData.className = 'item-data';
        // itemData.textContent = `calories: ${recipe.calories || 'N/A'}`; // Assuming recipe object has a 'calories' property

        // Append img, title, and link to the flexContainer div
        flexContainer.appendChild(title);
        flexContainer.appendChild(link);

        // Append img, flexContainer, and itemData to the div with class "item"
        div.appendChild(img);
        div.appendChild(flexContainer);
        div.appendChild(itemData);

        // Append the created div to the document body
        document.getElementById('output-div').appendChild(div);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

})

//------additional facilites

//--sg-btn

let sgBtn = document.getElementById("sg-btn");
sgBtn.addEventListener('click',()=>{
  // console.log("suggestion button beginning")
  // let elm = document.createElement('h1');
  // elm.textContent = "Some of the most viewed items are...";
  // let parent = document.getElementById('container-1');
  // parent.appendChild(elm);
  document.getElementById('output-div').innerHTML = '';
  console.log('sgBtn got clicked');
  getRandomRecipes(numberOfRecipes,apiKey);
});



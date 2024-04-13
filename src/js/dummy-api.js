import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/recipes';

export async function getAllRecipes(url, options = {}) {
  const response = await axios(url, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

getAllRecipes(BASE_URL)
  .then(recipes =>
    container.insertAdjacentHTML('beforeend', createMarkup(recipes))
  )
  .catch(error => console.log(error));

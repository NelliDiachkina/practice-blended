import axios from 'axios';

export async function getAllRecipes() {
  const { data } = await axios('https://dummyjson.com/recipes');
  return data;
}

export async function getRecipeById(id) {
  const { data } = await axios(`https://dummyjson.com/recipes/${id}`);
  return data;
}

// async function getData() {
//   try {
//     const recipes = await fetchRecipes();
//   } catch (error) {}
// }

// getData();

import axios from 'axios';

export async function getAllRecipes() {
  const { data } = await axios('https://dummyjson.com/recipes');
  return data;
}

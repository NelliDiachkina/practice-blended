import { getAllRecipes } from './js/dummy-api';
import { renderRecipeMarkup } from './js/render-functions';

document.addEventListener('DOMContentLoaded', async () => {
  const { recipes } = await getAllRecipes();
  console.log(recipes);
  renderRecipeMarkup(recipes);
});

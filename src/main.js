import { getAllRecipes } from './js/dummy-api';

document.addEventListener('DOMContentLoaded', async () => {
  console.log(await getAllRecipes());
});

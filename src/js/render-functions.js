import { refs } from './refs';

export function renderRecipeMarkup(recepies) {
  const markup = recepies
    .map(
      ({ image }) => `<li class="recipe-card">
  <img src="${image}" alt="">
</li>`
    )
    .join(``);
  refs.recipeList.insertAdjacentHTML('beforeend', markup);
}

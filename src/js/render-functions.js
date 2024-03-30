import { refs } from './refs';

export function renderRecipeMarkup(recepies) {
  const markup = recepies
    .map(
      ({ image }) => `<li>
  <img src="${image}" alt="">
</li>`
    )
    .join(``);
  refs.recipeList.insertAdjacentHTML('beforeend', markup);
}

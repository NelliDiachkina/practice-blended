import { refs } from './refs';

export function renderRecipeMarkup(recepies) {
  const markup = recepies
    .map(
      ({ image, id }) => `<li class="recipe-card">
  <img src="${image}" alt="" data-id="${id}">
</li>`
    )
    .join(``);
  refs.recipeList.insertAdjacentHTML('beforeend', markup);
}

export function renderModalRecipeMarkup(
  {
    name,
    ingredients,
    instructions,
    cookTimeMinutes,
    servings,
    difficulty,
    image,
  },
  element
) {
  const markup = `<div>
  <img src="${image}" alt="${name}" />
  <div>
    <h3>Name: ${name}</h3>
    <p>Ingredints:</p>
    <ul>${ingredients.map(el => `<li>${el}</li>`).join(``)}</ul>
    <p>Instructions:</p>
    <ul>${instructions.map(el => `<li>${el}</li>`).join(``)}</ul>
    <span> Cook Time: ${cookTimeMinutes} </span>
    <span>Servings: ${servings}</span>
    <span>Difficulty: ${difficulty}</span>
  </div>
</div>`;
  element.innerHTML = markup;
}

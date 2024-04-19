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
  const markup = `<div class="modal">
  <div class="modal-img"><img src="${image}" alt="${name}" /></div>
  <div class="modal-description">
    <h3 class="modal-title">Name: ${name}</h3>
    <p class="modal-chapter">Ingredients:</p>
    <ul class="modal-chapter-text">${ingredients
      .map(el => `<li>${el}</li>`)
      .join(``)}</ul>
    <p class="modal-chapter">Instructions:</p>
    <ul class="modal-chapter-text">${instructions
      .map(el => `<li>${el}</li>`)
      .join(``)}</ul>
    <span> Cook Time: ${cookTimeMinutes} </span>
    <span>Servings: ${servings}</span>
    <span>Difficulty: ${difficulty}</span>
  </div>
</div>`;
  element.innerHTML = markup;
}

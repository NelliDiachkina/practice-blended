import { getRecipeById } from './dummy-api';
import { closeModal, openModal } from './modal';
import { refs } from './refs';
import { renderModalRecipeMarkup } from './render-functions';

export async function onRecipeItemClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  openModal();
  const recipeId = e.target.dataset.id;
  const recipe = await getRecipeById(recipeId);
  renderModalRecipeMarkup(recipe, refs.modal);
}
export function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

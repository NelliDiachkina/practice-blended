import { closeModal, openModal } from './modal';

export function onRecipeItemClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  openModal();
}
export function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

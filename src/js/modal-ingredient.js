import { refs } from './refs';
import { fetchCocktail } from '..';
import Notiflix from 'notiflix';
import * as iconsModal from '../images/icons-modal.svg';
import { addToFavoriteIngrModal } from './addToFavourite';
import data from './object';
export async function onIngredientClick(e) {
  try {
    if (e.target.dataset.btn_ingr !== 'ingredient') return;

    const ingredientName = e.target.dataset.ingredient_name;
    const res = await fetchCocktail.getIngredientByName(ingredientName);
    const ingredient = res.data.ingredients[0];
    if (ingredientName.toLowerCase() !== ingredient.strIngredient.toLowerCase())
      return;
    openModalIngredient(ingredient, data);
  } catch (error) {
    return Notiflix.Notify.failure('Error!', error.message);
  }
}

export function openModalIngredient(ingredient, data) {
  toggleModal();
  document.body.style.overflow = 'hidden';

  createModalIngredientMarkup(ingredient, data);
  const modalCloseBtn = document.querySelector('[data-modal-close-ingr]');
  modalCloseBtn.addEventListener('click', toggleModal);
  const modIng = document.querySelector('.ingredients-modal-btn');
  modIng.addEventListener('click', addToFavoriteIngrModal);
}

export function createModalIngredientMarkup(ingredient, data) {
  refs.modalIngredient.innerHTML = '';
  const { strIngredient, strDescription, strType, strAlcohol, idIngredient } =
    ingredient;
  const markupModalIngredient = /*html*/ `<div class="ingr-modal-wrapper"><div class="ingr-modal-title-wrapper">
  <h3 class="ingredients-modal-title">${strIngredient}</h3>
  <h4 class="ingredients-modal-subtitle">
    ${strType === null ? 'Sorry, not specified' : strType}
  </h4>
</div>
 <button type="button" class="modal-ingredients-close-btn" data-modal-close-ingr>
     <svg class="icon-modal-ingredients" height="32" width="32">
    <use href="${iconsModal}#icon-close-modal-cocktail"></use>
  </svg>
  </button>
</div>
<div class="modal-ingredients-desc">

  
<p class="ingredients-modal-text">
  ${strDescription === null ? 'Sorry, not specified' : strDescription}
</p>
<ul class="ingredients-modal-list">
  <li class="ingredients-modal-item">
    ✶ Type: ${strType === null ? 'Sorry, not specified' : strType}
  </li>
  <li class="ingredients-modal-item">
    ✶ Country of origin: Sorry, not specified
  </li>
  <li class="ingredients-modal-item">✶ Alcohol : ${strAlcohol}</li>
  <li class="ingredients-modal-item">
    ✶ Flavour: Sorry, not specified
  </li>
</ul>
<button
id=${idIngredient}
  type="button"
  class="ingredients-modal-btn"
  
>
  ${
    data.ingredients.includes(idIngredient)
      ? 'Remove from favorite'
      : 'Add to favorite'
  }
</button></div>`;
  refs.modalIngredient.insertAdjacentHTML('beforeend', markupModalIngredient);
}

function toggleModal() {
  refs.modalIngredient.classList.toggle('is-hidden');
  refs.modalCocktail.classList.toggle('is-hidden');
  document.body.style.overflow = 'visible';
}

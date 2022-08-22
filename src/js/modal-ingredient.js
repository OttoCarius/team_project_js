import { refs } from './refs';
import { fetchCocktail } from '..';
import Notiflix from 'notiflix';
import * as iconsModal from '../images/icons-modal.svg';

export async function onIngredientClick(e) {
  try {
    if (e.target.dataset.btn_ingr !== 'ingredient') return;

    const ingredientName = e.target.dataset.ingredient_name;
    const res = await fetchCocktail.getIngredientByName(ingredientName);
    const ingredient = res.data.ingredients[0];
    if (ingredientName.toLowerCase() !== ingredient.strIngredient.toLowerCase())
      return;
    // refs.modalCocktail.classList.add('is-hidden');

    openModalIngredient(ingredient);
  } catch (error) {
    return Notiflix.Notify.failure('Error!', error.message);
  }
}

function openModalIngredient(ingredient) {
  toggleModal();
  createModalIngredientMarkup(ingredient);
  const modalCloseBtn = document.querySelector('[data-modal-close-ingr]');
  modalCloseBtn.addEventListener('click', toggleModal);
}

function createModalIngredientMarkup(ingredient) {
  refs.modalIngredient.innerHTML = '';
  const { strIngredient, strDescription, strType, strAlcohol, idIngredient } =
    ingredient;
  const markupModalIngredient = /*html*/ `<div class="ingr-modal-wrapper"><div class="ingr-modal-title-wrapper">
  <h3 class="ingredients-modal-title">${strIngredient}</h3>
  <h4 class="ingredients-modal-subtitle">
    ${strType === null ? 'Sorry, not specified' : strType}
  </h4>
</div>
 <button type="button" class="modal-cocktail-close-btn" data-modal-close>
     <svg class="icon-modal-cocktail" height="32" width="32">
    <use href="${iconsModal}#icon-close-modal-cocktail"></use>
  </svg>
  </button>
  </div>
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
  type="button"
  class="ingredients-modal-btn"
  data-modal-close-ingr
>
  Add to favorite
</button>`;
  // console.log(markupModalIngredient);
  refs.modalIngredient.insertAdjacentHTML('beforeend', markupModalIngredient);
}

function toggleModal() {
  refs.modalIngredient.classList.toggle('is-hidden');
  refs.modalCocktail.classList.toggle('is-hidden');
}

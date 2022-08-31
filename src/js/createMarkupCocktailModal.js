import { refs } from './refs';
import { fetchCocktail } from '..';
import Notiflix from 'notiflix';
import { onIngredientClick } from './modal-ingredient';
import * as iconsModal from '../images/icons-modal.svg';
import { addToFavouriteModal } from './addToFavourite';
import data from './object';

export async function onloadMoreClick(e) {
  try {
    if (e.target.dataset.btn_more !== 'learn-more') return;
    const id = e.target.parentNode.id;
    const res = await fetchCocktail.getResultsById(id);
    openModalCocktail(res);
    data.cocktails;
  } catch (error) {
    return Notiflix.Notify.failure('Error!', error.message);
  }
}

export function openModalCocktail(res) {
  toggleModal();
  document.body.style.overflow = 'hidden';

  createMarkupCocktailModal(res, data);

  const cocktailModalIngredientsList = document.querySelector(
    '.cocktail-desc-list'
  );
  const markupIngredientsList =
    createMarkupCocktailForModalListIngredients(res);
  cocktailModalIngredientsList.innerHTML = '';
  cocktailModalIngredientsList.innerHTML = markupIngredientsList;
  cocktailModalIngredientsList.addEventListener('click', onIngredientClick);
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  modalCloseBtn.addEventListener('click', toggleModal);
  const addToFavouriteModalCocktail = document.querySelector(
    '.cocktails-modal-btn'
  );
  addToFavouriteModalCocktail.addEventListener('click', addToFavouriteModal);
}

function createMarkupCocktailForModalListIngredients(res) {
  const drink = res.data.drinks[0];
  const ingredients = [];

  for (let i = 1; i <= 15; i += 1) {
    let ingredient = drink['strIngredient' + i];
    if (!ingredient) break;
    ingredients.push(ingredient);
  }
  return ingredients
    .map(ingredient => {
      return /*html*/ `<li><button data-btn_ingr="ingredient" data-ingredient_name="${ingredient}" class="cocktail-ingredient-btn">${ingredient}</button></li>`;
    })
    .join('');
}

function createMarkupCocktailModal(res, data) {
  refs.modalCocktail.innerHTML = '';
  const { strDrinkThumb, strDrink, strInstructions, idDrink } =
    res.data.drinks[0];

  const markupModalCocktail = /*html*/ `<div class="modal-cocktail-wrapper"><img
        class="modal-cocktail-img"
        src="${strDrinkThumb}"
        alt="${strDrink}"
        width="288"
      />
      <div class="cocktail-desc">
        <h3 class="cocktail-desc-name">${strDrink}</h3>
        <h4 class="cocktail-desc-ingredients">INGREDIENTS</h4>
        <p class="cocktail-desc-subtitle">Per cocktail</p>
        <ul class="cocktail-desc-list"></ul>
        </div>
        <button type="button" class="modal-cocktail-close-btn" data-modal-close>
    <svg class="icon-modal-cocktail" height="32" width="32">
    <use href="${iconsModal}#icon-close-modal-cocktail"></use>
  </svg>
  </button>
      </div>
      <div class="cocktail-instruction">
        <h3 class="instruction-name">Instractions:</h3>
        <p class="instruction-text">${strInstructions}</p>
      </div>
      <button id="${idDrink}" type="button" class="cocktails-modal-btn">
      ${
        data.cocktails.includes(idDrink)
          ? 'Remove from favorite'
          : 'Add to favorite'
      }
      </button>
  `;
  refs.modalCocktail.insertAdjacentHTML('beforeend', markupModalCocktail);
}

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  document.body.style.overflow = 'visible';
}

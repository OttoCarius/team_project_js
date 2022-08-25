import { refs } from './refs';
import {
  createIngredientsMarkup,
  filterQuantityItems,
  renderMarkup,
} from './markup';
// import data from './object';
import { fetchCocktail } from '..';
import { FAVORITE_INGREDIENTS } from './addToFavourite';
import { createModalIngredientMarkup } from './modal-ingredient';
import { addToFavoriteEngredients } from './addToFavourite';

export async function onPageFavIngredients() {
  refs.heroSection.style.display = 'none';
  refs.cocktailTitle.textContent = 'Favorite ingredients';
  refs.cocktailTitle.parentNode.style.marginTop = '60px';
  refs.listCocktail.innerHTML = '';
  refs.listCocktail.classList.add('list-ing');
  refs.listCocktail.classList.add('card-set');

  refs.listCocktail.classList.remove('modal-ingredients__list');

  const parsedArray = JSON.parse(localStorage.getItem(FAVORITE_INGREDIENTS));
  if (!parsedArray) {
    return;
  }
  const array = parsedArray.map(id => {
    return fetchCocktail.getIngredientsById(id);
  });
  const res = await Promise.all(array);
  const markup = createIngredientsMarkup(res);
  const ingredients = filterQuantityItems(markup);

  renderMarkup(refs.listCocktail, ingredients);
}

export async function onloadMoreIngr(e) {
  if (e.target.dataset.ing_more !== 'ing_more') return;
  console.log(e.target.dataset.ing_id);
  const id = e.target.dataset.ing_id;
  const res = await fetchCocktail.getIngredientsById(id);
  const ingredient = res.data.ingredients[0];
  toggleModal();
  openModalIngr(ingredient);
}

function openModalIngr(ingredient) {
  createModalIngredientMarkup(ingredient);
  const modalCloseBtn = document.querySelector('[data-modal-close-ingr]');
  modalCloseBtn.addEventListener('click', toggleModal);
  const modIng = document.querySelector('.ingredients-modal-btn');
  modIng.textContent = 'Remove from favorite';
  modIng.addEventListener('click', addToFavoriteEngredients);
}

function toggleModal() {
  console.log(1111);
  refs.modal.classList.toggle('is-hidden');
  refs.modalIngredient.classList.toggle('is-hidden');
  refs.modalCocktail.classList.toggle('is-hidden');
}

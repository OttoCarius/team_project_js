import { refs } from './refs';
import {
  createIngredientsMarkup,
  renderMarkup,
  filterQuantityItems,
} from './markup';
import { fetchCocktail } from '..';
import { FAVORITE_INGREDIENTS } from './addToFavourite';
import { createModalIngredientMarkup } from './modal-ingredient';
import { addToFavoriteIngrModal } from './addToFavourite';
import data from './object';
import { LinksTheme, onMenuBtnClick } from './header';

export function getResultsIngredients() {
  const parsedArray = JSON.parse(localStorage.getItem(FAVORITE_INGREDIENTS));

  if (!parsedArray) {
    refs.textFavoritePage.removeAttribute('hidden');
    return;
  }
}

getResultsIngredients();

export async function onPageFavIngredients() {
  onMenuBtnClick();
  refs.textFavoritePage.style.display = 'none';
  document.body.style.minHeight = '100vh';
  document.body.style.display = 'flex';
  document.body.style.flexDirection = 'column';
  document.body.style.justifyContent = 'space-between';

  LinksTheme.classList.toggle('favorite-wrapper__close');
  refs.loadMore.classList.remove('pagecocktails');
  refs.heroSection.style.display = 'none';
  refs.cocktailTitle.textContent = 'Favorite ingredients';
  refs.cocktailTitle.parentNode.style.marginTop = '60px';
  refs.listCocktail.innerHTML = '';
  refs.listCocktail.classList.add('list-ing');
  refs.listCocktail.classList.add('card-set');
  refs.listCocktail.classList.remove('modal-ingredients__list');

  const parsedArray = JSON.parse(localStorage.getItem(FAVORITE_INGREDIENTS));
  if (parsedArray.length === 0) {
    refs.textFavoritePage.textContent = 'No ingredients added yet!';
    refs.textFavoritePage.style.display = 'block';
    return;
  }

  const array = parsedArray.map(id => {
    return fetchCocktail.getIngredientsById(id);
  });
  const res = await Promise.all(array);

  const markup = createIngredientsMarkup(res, data);
  const ingr = filterQuantityItems(markup);

  renderMarkup(refs.listCocktail, ingr);
}

export async function onloadMoreIngr(e) {
  if (e.target.dataset.ing_more !== 'ing_more') return;
  const id = e.target.dataset.ing_id;
  const res = await fetchCocktail.getIngredientsById(id);
  const ingredient = res.data.ingredients[0];
  toggleModal();
  document.body.style.overflow = 'hidden';

  openModalIngr(ingredient);
}

function openModalIngr(ingredient) {
  createModalIngredientMarkup(ingredient, data);
  const modalCloseBtn = document.querySelector('[data-modal-close-ingr]');
  modalCloseBtn.addEventListener('click', toggleModal);
  const modIng = document.querySelector('.ingredients-modal-btn');
  modIng.addEventListener('click', addToFavoriteIngrModal);
}

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.modalIngredient.classList.toggle('is-hidden');
  refs.modalCocktail.classList.toggle('is-hidden');
  document.body.style.overflow = 'visible';
}

export function onRemoveIngr(e) {
  if (e.target.dataset.ing_remove !== 'ing_remove') return;
  const id = e.target.dataset.ingr_id;
  data.ingredients = id;
}

import { refs } from './refs';
import {
  createRandomMarkup,
  renderMarkup,
  filterQuantityItems,
} from './markup';
import data from './object';
import { fetchCocktail } from '..';
import { FAVOURITE_KEY } from './addToFavourite';

export function getResultsCocktails() {
  const parsedArray = JSON.parse(localStorage.getItem(FAVOURITE_KEY));

  if (!parsedArray) {
    return;
  }
}

getResultsCocktails();

export async function onPageFavCocktails() {
  refs.heroSection.style.display = 'none';
  refs.cocktailTitle.textContent = 'Favorite cocktails';
  refs.cocktailTitle.parentNode.style.marginTop = '60px';
  refs.listCocktail.innerHTML = '';
  refs.listCocktail.classList.remove('list-ing');
  refs.listCocktail.classList.remove('card-set');
  refs.listCocktail.classList.add('modal-ingredients__list');

  const parsedArray = JSON.parse(localStorage.getItem(FAVOURITE_KEY));
  if (!parsedArray) {
    return;
  }
  const array = parsedArray.map(id => {
    return fetchCocktail.getResultsById(id);
  });
  const res = await Promise.all(array);

  const markup = createRandomMarkup(res, data);
  renderMarkup(refs.listCocktail, markup.join(''));
  const arrBtnAddTo = document.querySelectorAll('.btn-add-to-favorite');
  arrBtnAddTo.forEach(element => {
    element.textContent = 'Remove';
  });
}

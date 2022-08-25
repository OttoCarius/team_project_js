import { refs } from './refs';
import { createRandomMarkup, renderMarkup } from './markup';
import data from './object';
import { fetchCocktail } from '..';
import { FAVOURITE_KEY } from './addToFavourite';

export async function onPageFavCocktails() {
  refs.heroSection.style.display = 'none';
  refs.cocktailTitle.textContent = 'Favorite cocktails';
  refs.cocktailTitle.parentNode.style.marginTop = '60px';
  refs.listCocktail.innerHTML = '';

  const parsedArray = JSON.parse(localStorage.getItem(FAVOURITE_KEY));
  if (!parsedArray) {
    return;
  }
  const array = parsedArray.map(id => {
    return fetchCocktail.getResultsById(id);
  });
  const res = await Promise.all(array);

  const markup = createRandomMarkup(res, data);
  renderMarkup(refs.listCocktail, markup);
  const arrBtnAddTo = document.querySelectorAll('.btn-add-to-favorite');
  arrBtnAddTo.forEach(element => {
    element.textContent = 'Remove';
  });
}

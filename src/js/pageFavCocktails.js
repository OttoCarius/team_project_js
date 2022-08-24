import { refs } from './refs';
import {
  createRandomMarkup,
  filterQuantityItems,
  renderMarkup,
} from './markup';
// import { storageCocktailByLetter } from './storageCocktails';
import data from './object';
import { fetchCocktail } from '..';
import { FAVOURITE_KEY } from './addToFavourite';

export async function onPageFavCocktails() {
  refs.heroSection.style.display = 'none';
  //   console.log(refs.cocktailTitle);
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
  //   console.log('res', res);

  //   console.log('data', data);
  const markup = createRandomMarkup(res, data);
  //   console.log(markup);

  const drinks = filterQuantityItems(markup);
  renderMarkup(refs.listCocktail, drinks);

  //   storageCocktailByLetter();
}

import { refs } from './refs';
import { dataCocktail, FAVOURITE_KEY } from './addToFavourite';
import { fetchCocktail } from '../index';
import { createMarkup, renderMarkup, filterQuantityItems } from './markup';

export function getResultsCocktails() {
  const parsedArray = JSON.parse(localStorage.getItem(FAVOURITE_KEY));
  // console.log(parsedArray);

  if (!parsedArray) {
    return;
  }

  //   const arr = parsedArray.map(id => {
  //     return fetchCocktail.getResultsById(id);
  //   });
  //   Promise.all(arr).then(response => {
  //     console.log(response);
  //   });

  //   const markup = createMarkup(arr);
  //   const drinks = filterQuantityItems(markup);
  //   renderMarkup(refs.listFavoriteCocktails, drinks);
  //   console.log(drinks);
}

getResultsCocktails();

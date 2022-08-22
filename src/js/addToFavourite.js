import { refs } from './refs';

refs.listCocktail.addEventListener('click', addToFavourite);
const dataCocktail = [];
const FAVOURITE_KEY = 'storage-favourite';

export function addToFavourite(e) {
  e.target.classList.toggle('is-add');

  if (e.target.dataset.action) {
    if (dataCocktail.includes(e.target.id)) {
      // console.log(dataCocktail);
      // console.log(e.target.id);
      const positionIndex = dataCocktail.indexOf(e.target.id);
      // console.log(dataCocktail.indexOf(e.target.id));
      dataCocktail.splice(positionIndex, 1);
      // console.log(dataCocktail);
      return localStorage.setItem(FAVOURITE_KEY, JSON.stringify(dataCocktail));
    }

    dataCocktail.push(e.target.id);
    localStorage.setItem(FAVOURITE_KEY, JSON.stringify(dataCocktail));
  } else {
    return;
  }
}

import { refs } from './refs';

refs.listCocktail.addEventListener('click', addToFavourite);
const dataCocktail = [];
const FAVOURITE_KEY = 'storage-favourite';

export function addToFavourite(e) {
  if (e.target.dataset.action || e.target.nodeName === 'svg') {
    if (dataCocktail.includes(e.target.id)) {
      return;
    }

    // e.target.dataset.action.classList.toggle('toggle');
    dataCocktail.push(e.target.id);
    localStorage.setItem(FAVOURITE_KEY, JSON.stringify(dataCocktail));
  } else {
    return;
  }
}

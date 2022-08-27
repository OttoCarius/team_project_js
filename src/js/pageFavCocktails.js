import { refs } from './refs';
import {
  createRandomMarkup,
  renderMarkup,
  filterQuantityItems,
  createIngredientsMarkup,
} from './markup';
import data from './object';
import { fetchCocktail } from '..';
import {
  FAVOURITE_KEY,
  FAVORITE_INGREDIENTS,
  checkResult,
} from './addToFavourite';
import { LinksTheme } from './header';
import { onLoadMoreFavIngr } from './pageFavIngredients';
// import { onLoadMoreFavCock } from './loadMorePage';

refs.loadMore.addEventListener('click', onLoadMoreFavCock);

export function getResultsCocktails() {
  const parsedArray = JSON.parse(localStorage.getItem(FAVOURITE_KEY));

  if (!parsedArray) {
    return;
  }
}
getResultsCocktails();

export async function onPageFavCocktails() {
  LinksTheme.classList.toggle('favorite-wrapper__close');
  refs.loadMore.classList.add('pagecocktails');
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
  const drinks = filterQuantityItems(markup);

  // console.log('markup-->', markup);
  // console.log('drinks-->', drinks);
  renderMarkup(refs.listCocktail, drinks);
  const arrBtnAddTo = document.querySelectorAll('.btn-add-to-favorite');
  arrBtnAddTo.forEach(element => {
    element.textContent = 'Remove';
  });
}

// export async function onLoadMoreFavCock() {
//   refs.loadMore.removeEventListener('click', onLoadMoreFavIngr);
//   refs.loadMore.style.display = 'none';
//   const parsedArray = JSON.parse(localStorage.getItem(FAVOURITE_KEY));
//   if (!parsedArray) {
//     return;
//   }
//   const array = parsedArray.map(id => {
//     return fetchCocktail.getResultsById(id);
//   });
//   const res = await Promise.all(array);

//   const markup = createRandomMarkup(res, data).join('');
//   renderMarkup(refs.listCocktail, markup);
//   const arrBtnAddTo = document.querySelectorAll('.btn-add-to-favorite');
//   arrBtnAddTo.forEach(element => {
//     element.textContent = 'Remove';
//   });
// }

export async function onLoadMoreFavCock(e) {
  refs.loadMore.style.display = 'none';
  if (refs.loadMore.classList.contains('pagecocktails')) {
    const parsedArray = JSON.parse(localStorage.getItem(FAVOURITE_KEY));
    if (!parsedArray) {
      return;
    }
    const array = parsedArray.map(id => {
      return fetchCocktail.getResultsById(id);
    });
    const res = await Promise.all(array);

    const markup = createRandomMarkup(res, data).join('');
    renderMarkup(refs.listCocktail, markup);
    const arrBtnAddTo = document.querySelectorAll('.btn-add-to-favorite');
    arrBtnAddTo.forEach(element => {
      element.textContent = 'Remove';
    });
  } else {
    const parsedArray = JSON.parse(localStorage.getItem(FAVORITE_INGREDIENTS));
    if (!parsedArray) {
      return;
    }
    const array = parsedArray.map(id => {
      return fetchCocktail.getIngredientsById(id);
    });
    const res = await Promise.all(array);
    console.log(res);
    const markup = createIngredientsMarkup(res, data);

    renderMarkup(refs.listCocktail, markup.join(''));
  }
}

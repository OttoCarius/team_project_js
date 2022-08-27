// import { refs } from './refs';
// import {
//   createRandomMarkup,
//   renderMarkup,
//   //   filterQuantityItems,
// } from './markup';
// import data from './object';
// import { fetchCocktail } from '../index';
// // import {
// //   FAVOURITE_KEY,
// //   FAVORITE_INGREDIENTS,
// //   checkResult,
// // } from './addToFavourite';

// refs.loadMore.addEventListener('click', onLoadMoreFavCock);

// export async function onLoadMoreFavCock(key) {
//   refs.loadMore.style.display = 'none';
//   const parsedArray = JSON.parse(localStorage.getItem(key));
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

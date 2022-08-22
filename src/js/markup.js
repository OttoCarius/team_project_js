import { refs } from './refs';
import { onLoadMore } from './storageCocktails';
import * as emptyheart from '../images/empty-heart.svg';

//Functions
export function createMarkup(arr) {
  refs.sectionSorry.classList.add('is-hidden');
  refs.cocktailSection.classList.remove('is-hidden');

  if (!arr.data.drinks) {
    refs.sectionSorry.classList.remove('is-hidden');
    refs.cocktailSection.classList.add('is-hidden');
    return;
  }
  return arr.data.drinks.map(({ strDrink, strDrinkThumb, idDrink }) => {
    return /*html*/ `<li  class='card-list'><div class="card-thumb"><img class="img-cocktail" src=${strDrinkThumb} alt=${strDrink} width='395' height='395' /><h2 class="title-card">${strDrink}</h2><div class="btn-wrapper" id="${idDrink}"><button id="${idDrink}" class='btn-cocktail btn-learn-more' type='button' data-btn_more="learn-more">Learn more</button><button id="${idDrink}" class='btn-cocktail btn-add-to-favorite' type='button' data-action="favourite">Add to</button></div></div></li>`;
  });
}

export function renderMarkup(element, markup) {
  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', markup);
}

export function filterQuantityItems(markup) {
  if (window.screen.width < 768) {
    if (markup.length > 3) {
      console.log('more then 3');
      refs.loadMore.style.display = 'block';
      // onLoadMore();
    }
    return markup.filter((_, index) => index < 3).join('');
  } else if (window.screen.width < 1280) {
    if (markup.length > 6) {
      console.log('more then 6');
      refs.loadMore.style.display = 'block';
      // onLoadMore();
    }
    return markup.filter((_, index) => index < 6).join('');
  } else {
    if (markup.length > 9) {
      console.log('more then 9');
      refs.loadMore.style.display = 'block';
      onLoadMore();
    }
    return markup.filter((_, index) => index < 9).join('');
  }
}

export function createRandomMarkup(arr) {
  return arr.map(item => {
    const { strDrink, strDrinkThumb, idDrink } = item.data.drinks[0];
    console.log('id', idDrink);
    return /*html*/ `<li  class='card-list'><div class="card-thumb">
    <img class="img-cocktail" src=${strDrinkThumb} alt=${strDrink} width='395' height='395' /><h2 class="title-card">${strDrink}</h2>
    <div class="btn-wrapper" id="${idDrink}"><button id="${idDrink}" class='btn-cocktail btn-learn-more' type='button' data-btn_more="learn-more">Learn more</button><button id="${idDrink}" class='btn-cocktail btn-add-to-favorite' type='button' data-action="favourite">
  Add to</button></div></div></li>`;
  });
}

import { refs } from './refs';

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
    return `<li  class='card-list'><div class="card-thumb"><img class="img-cocktail" src=${strDrinkThumb} alt=${strDrink} width='395' height='395' /><h2 class="title-card">${strDrink}</h2><div class="btn-wrapper" id="${idDrink}"><button class='btn-cocktail btn-learn-more' type='button' data-btn_more="learn-more">Learn more</button><button class='btn-cocktail btn-add-to-favorite' type='button'>Add to</button></div></div></li>`;
  });
}

export function renderMarkup(element, markup) {
  element.innerHTML = '';
  element.insertAdjacentHTML('beforeend', markup);
}

export function filterQuantityItems(markup) {
  if (window.screen.width < 768) {
    return markup.filter((_, index) => index < 3).join('');
  } else if (window.screen.width < 1280) {
    return markup.filter((_, index) => index < 6).join('');
  } else {
    return markup.filter((_, index) => index < 9).join('');
  }
}

export function createRandomMarkup(arr) {
  return arr.map(item => {
    const { strDrink, strDrinkThumb, idDrink } = item.data.drinks[0];
    return `<li  class='card-list'><div class="card-thumb">
    <img class="img-cocktail" src=${strDrinkThumb} alt=${strDrink} width='395' height='395' /><h2 class="title-card">${strDrink}</h2>
    <div class="btn-wrapper" id="${idDrink}"><button class='btn-cocktail btn-learn-more' type='button' data-btn_more="learn-more">Learn more</button><button class='btn-cocktail btn-add-to-favorite' type='button' data-action="favourite">
    <svg class="favorite-svg" width="21px" height="19px">
    <use href="../images/empty-heart.svg"></use>
  </svg>Add to</button></div></div></li>`;
  });
}

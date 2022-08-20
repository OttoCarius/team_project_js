import { Cocktail } from '../js/cocktailApiClass';
import Notiflix from 'notiflix';
import { refs } from './refs';

const list = document.querySelector('.modal-ingredients_list');
const fetchCocktail = new Cocktail();
const searchCocktails = document.querySelector('.js-search-cocktail');
searchCocktails.addEventListener('submit', onFormSubmit);

export function onFormSubmit(event) {
  event.preventDefault();

  fetchCocktail.query = event.currentTarget.elements.query.value.trim();
  console.log(fetchCocktail.query);

  if (fetchCocktail.query === '') {
    return Notiflix.Notify.failure('Please, enter the name of the cocktail');
  }

  fetchCocktail.getResults().then(createMarkup);
}

export function createMarkup(arr) {
  list.innerHTML = '';

  const markup = arr.data.drinks.map(({ strDrink, strDrinkThumb, idDrink }) => {
    return `<li id="${idDrink}" class='card-list'><div class="card-thumb"><img class="img-cocktail" src=${strDrinkThumb} alt=${strDrink} width='395' height='395' /><h2 class="title-card">${strDrink}</h2><div class="btn-wrapper"><button class='btn-cocktail btn-learn-more' type='button'>Learn more</button><button class='btn-cocktail btn-add-to-favorite' type='button'>Add to</button></div></div></li>`;
  });

  refs.sectionSorry.classList.add('is-hidden');
  if (!arr.data.drinks) {
    refs.sectionSorry.classList.remove('is-hidden');
  } else if (window.screen.width < 768) {
    const cocktailList = markup.filter((_, index) => index < 3).join('');
    list.innerHTML = cocktailList;
    return cocktailList;
  } else if (window.screen.width < 1280) {
    const cocktailList = markup.filter((_, index) => index < 6).join('');
    list.innerHTML = cocktailList;
    return cocktailList;
  } else {
    const cocktailList = markup.filter((_, index) => index < 9).join('');
    list.innerHTML = cocktailList;
    return cocktailList;
  }
}

import { Cocktail } from '../js/cocktailApiClass';
import Notiflix from 'notiflix';
import { refs } from './refs';

const list = document.querySelector('.modal-ingredients__list');
const fetchCocktail = new Cocktail();
const searchCocktails = document.querySelector('.search__form');
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

  const markup = (cocktailList = arr.data.drinks.map(
    ({ strDrink, strDrinkThumb }) => {
      return `<li class='card-list'><h2 class="title-card">${strDrink}</h2>
        <img src=${strDrinkThumb} alt=${strDrink} width='395' heigth='395' />
        <button class='btn-learn-more' type='button'>Learn more</button>
        <button class='btn-add-to-favorite'>Add to</button>
      </li>`;
    }
  ));

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

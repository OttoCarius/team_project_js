import { Cocktail } from '../js/cocktailApiClass';
import Notiflix from 'notiflix';
import { refs } from './refs';
import { onloadMoreClick } from './createMarkupCocktailModal';

const list = document.querySelector('.modal-ingredients__list');
list.addEventListener('click', onloadMoreClick);

export const fetchCocktail = new Cocktail();
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
  refs.sectionSorry.classList.add('is-hidden');
  if (!arr.data.drinks) {
    refs.sectionSorry.classList.remove('is-hidden');
  } else {
    const cocktailList = arr.data.drinks
      .map(({ strDrink, strDrinkThumb, idDrink }) => {
        return `<li id="${idDrink}" class='card-list'><h2 class="title-card">${strDrink}</h2>
            <img src=${strDrinkThumb} alt=${strDrink} width='395' heigth='395' />
            <button class='btn-learn-more' type='button'>Learn more</button>
            <button class='btn-add-to-favorite'>Add to</button>
          </li>`;
      })
      .join('');
    list.insertAdjacentHTML('beforeend', cocktailList);
  }
}

// margarita

import { Cocktail } from '../js/cocktailApiClass';
import Notiflix from 'notiflix';

const list = document.querySelector('.modal-ingredients__list');
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

function createMarkup(arr) {
  list.innerHTML = '';

  const cocktailList = arr.data.drinks
    .map(({ strDrink, strDrinkThumb }) => {
      return `<li class='card-list'><h2 class="title-card">${strDrink}</h2>
            <img src=${strDrinkThumb} alt=${strDrink} width='395' heigth='395' />
            <button class='btn-learn-more' type='button'>Learn more</button>
            <button class='btn-add-to-favorite'>Add to</button>
          </li>`;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', cocktailList);
}

// margarita

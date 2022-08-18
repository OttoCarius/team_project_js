import { Cocktail } from '../js/cocktailApiClass';

console.log(Cocktail);
const list = document.querySelector('.modal-ingredients__list');
const fetchCocktail = new Cocktail();
const searchCocktails = document.querySelector('.js-search-cocktail');
searchCocktails.addEventListener('submit', onFormSubmit);

export function onFormSubmit(event) {
  event.preventDefault();

  fetchCocktail.query = event.currentTarget.elements.query.value.trim();
  console.log(fetchCocktail.query);

  if (fetchCocktail.query === '') {
    return alert('Введіть значення');
  }

  fetchCocktail.getResults().then(createMarkup);
}

function createMarkup(arr) {
  list.innerHTML = '';

  const cocktailList = arr.data.drinks
    .map(({ strDrink, strDrinkThumb }) => {
      return `<li class="cocktail-card">
           <img src=${strDrinkThumb} alt=${strDrink} 
           class='cocktail_photo width='395' height='395'' />
            <h3 class='cocktail_title'>${strDrink}</h3>
            <button type="button" class="cocktail-more-btn">Learn more</button>
            <button type="button" class="cocktail-more-btn">Add</button>`
    })
    .join('');

  list.insertAdjacentHTML('beforeend', cocktailList);
}

// margarita

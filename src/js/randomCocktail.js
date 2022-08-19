import { Cocktail } from '../js/cocktailApiClass';

const list = document.querySelector('.modal-ingredients__list');
const randomCocktail = new Cocktail();

export function randomCocktailMarkup() {
  randomCocktail.getResultsRandom().then(createRandomMarkup);
}

export function createRandomMarkup(arr) {
  const cocktailList = arr
    .map(item => {
      const { strDrink, strDrinkThumb } = item.data.drinks[0];
      return `<li class='card-list'><h2 class="title-card">${strDrink}</h2>
                        <img src=${strDrinkThumb} alt=${strDrink} width='395' heigth='395' />
                        <button class='btn-learn-more' type='button'>Learn more</button>
                        <button class='btn-add-to-favorite'>Add to</button>
                      </li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', cocktailList);
}

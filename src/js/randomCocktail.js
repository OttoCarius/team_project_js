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

  list.innerHTML = '';

  const markupRandom = arr.map(item => {
    const { strDrink, strDrinkThumb } = item.data.drinks[0];
    return `<li class='card-list'><h2 class="title-card">${strDrink}</h2><img src=${strDrinkThumb} alt=${strDrink} width='395' heigth='395' /><button class='btn-learn-more' type='button'>Learn more</button><button class='btn-add-to-favorite'>Add to</button></li>`;
  });
  if (window.screen.width < 768) {
    const cocktailList = markupRandom.filter((_, index) => index < 3).join('');
    list.innerHTML = cocktailList;
    return cocktailList;
  } else if (window.screen.width < 1280) {
    const cocktailList = markupRandom.filter((_, index) => index < 6).join('');
    list.innerHTML = cocktailList;
    return cocktailList;
  } else {
    const cocktailList = markupRandom.filter((_, index) => index < 9).join('');
    list.innerHTML = cocktailList;
    return cocktailList;
  }
}

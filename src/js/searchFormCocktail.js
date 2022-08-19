import { Cocktail } from './cocktailApiClass';
import Notiflix from 'notiflix';

const list = document.querySelector('.modal-ingredients__list');
const fetchCocktail = new Cocktail();
const searchCocktails = document.querySelector('.search__form');
searchCocktails.addEventListener('input', onFormSubmit);

// function onFormSubmit(e) {
//   const query = e.target.value;
//   console.log(query);
//   renderMarkupByCheckedLetter(letter);
// }

//  function renderMarkupBySearchForm(letter) {
//     const cocktailByLetter = new Cocktail();
//     cocktailByLetter.letter = letter;
//     cocktailByLetter.getResultsByLetter().then(createMarkup);
//   }

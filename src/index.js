import { refs } from './js/refs';
import { renderMarkup, markupHeroLetters, onLetterClick } from './js/hero';
import { createMarkup } from './js/createMarkup.js';
import { randomCocktailMarkup } from './js/randomCocktail';
refs.heroList.addEventListener('click', onLetterClick);

renderMarkup(refs.heroList, markupHeroLetters);

randomCocktailMarkup();

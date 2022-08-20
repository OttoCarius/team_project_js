import { refs } from './js/refs';

import { createMarkup } from './js/createMarkup.js';
import { randomCocktailMarkup } from './js/randomCocktail';
import {
  renderMarkup,
  markupHeroLetters,
  onLetterClick,
  onSelectChange,
  markupHeroLettersMobile,
} from './js/hero';
import './js/createMarkup.js';

// import './js/cardByLetter.js';

import './js/header.js';

refs.heroList.addEventListener('click', onLetterClick);
refs.searchSelect.addEventListener('change', onSelectChange);

renderMarkup(refs.heroList, markupHeroLetters);

randomCocktailMarkup();
renderMarkup(refs.searchSelect, markupHeroLettersMobile);


import { refs } from './js/refs';
import { renderMarkup, markupHeroLetters, onLetterClick } from './js/hero';
import './js/createMarkup.js';
import './js/cardByLetter.js';

refs.heroList.addEventListener('click', onLetterClick);

renderMarkup(refs.heroList, markupHeroLetters);



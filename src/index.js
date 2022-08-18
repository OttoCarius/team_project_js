import { refs } from './js/refs';
import { renderMarkup, markupHeroLetters, onLetterClick } from './js/hero';

refs.heroList.addEventListener('click', onLetterClick);

renderMarkup(refs.heroList, markupHeroLetters);

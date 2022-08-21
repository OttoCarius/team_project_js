import { Cocktail } from './js/cocktailApiClass';
import { refs } from './js/refs';
import { onFormSubmit } from './js/searchForm';
import { createAndRenderRandomMarkup } from './js/randomCocktail';
import {
  onLetterClick,
  onSelectChange,
  markupHeroLettersMobile,
  markupHeroLetters,
} from './js/hero';
import { renderMarkup } from './js/markup';
import { onloadMoreClick } from './js/createMarkupCocktailModal';
import './js/header.js';
//Const
export const fetchCocktail = new Cocktail();

//Run
createAndRenderRandomMarkup();
renderMarkup(refs.heroList, markupHeroLetters);
renderMarkup(refs.searchSelect, markupHeroLettersMobile);

//Listener
refs.searchCocktails.addEventListener('submit', onFormSubmit);
refs.heroList.addEventListener('click', onLetterClick);
refs.searchSelect.addEventListener('change', onSelectChange);
refs.listCocktail.addEventListener('click', onloadMoreClick);

//Functions

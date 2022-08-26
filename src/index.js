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

import {
  storageCocktailByLetter,
  storageCocktailByName,
} from './js/storageCocktails';
// import { checkResult } from './js/addToFavourite';

import { getResultsCocktails } from './js/pageFavCocktails';
import { getResultsIngredients } from './js/pageFavIngredients';
import './js/header.js';
import data from './js/object';
import { onloadMoreIngr, onRemoveIngr } from './js/pageFavIngredients';

//Const
export const fetchCocktail = new Cocktail();

// if (checkResult()) {
//   data.cocktails = checkResult();
// }

//Run
// checkResult();
createAndRenderRandomMarkup(data);
renderMarkup(refs.heroList, markupHeroLetters, data);
renderMarkup(refs.searchSelect, markupHeroLettersMobile, data);
storageCocktailByLetter();
storageCocktailByName();
getResultsCocktails();
getResultsIngredients();

// addToFavourite();
// addToFavouriteModal(e);

//Listener
refs.searchCocktails.addEventListener('submit', onFormSubmit);
refs.heroList.addEventListener('click', onLetterClick);
refs.searchSelect.addEventListener('change', onSelectChange);
refs.listCocktail.addEventListener('click', onloadMoreClick);
refs.listCocktail.addEventListener('click', onloadMoreIngr);
refs.listCocktail.addEventListener('click', onRemoveIngr);

// refs.listFavoriteCocktails.addEventListener()
// refs.listCocktail.addEventListener('click', addToFavourite);
// refs.addToFavouriteModal.addEventListener('click', addToFavouriteModal);

//Functions
// fetchCocktail.ingredientsById('1');
// console.log(await fetchCocktail.ingredientsById('1'));

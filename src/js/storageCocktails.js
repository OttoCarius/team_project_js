import { refs } from './refs';
import { fetchCocktail } from '../index';
import { createMarkup, renderMarkup } from './markup';
import './header';
import { STORAGE_KEY } from './variables';
import data from './object';

refs.loadMore.addEventListener('click', onLoadMore);

export async function storageCocktailByLetter() {
  const arrOfCocktails = await fetchCocktail.getResultsByLetter();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrOfCocktails));
}

export async function storageCocktailByName() {
  const arrOfCocktails = await fetchCocktail.getResults();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrOfCocktails));
  console.log(arrOfCocktails);
}

export function onLoadMore() {
  refs.loadMore.style.display = 'none';
  console.log('click on the button');
  const savedCocktails = localStorage.getItem(STORAGE_KEY);
  const parsedCocktails = JSON.parse(savedCocktails);
  const markup = createMarkup(parsedCocktails, data);
  renderMarkup(refs.listCocktail, markup.join(''));
}

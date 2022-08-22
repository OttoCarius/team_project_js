import { fetchCocktail } from '../index';
import Notiflix from 'notiflix';
import { createMarkup, renderMarkup, filterQuantityItems } from './markup';
import { refs } from './refs';
import { storageCocktailByName } from './storageCocktails';

export async function onFormSubmit(event) {
  event.preventDefault();
  fetchCocktail.query = event.currentTarget.elements.query.value.trim();

  if (fetchCocktail.query === '') {
    return Notiflix.Notify.failure('Please, enter the name of the cocktail');
  }

  const arr = await fetchCocktail.getResults();
  const markup = createMarkup(arr);
  const drinks = filterQuantityItems(markup);
  renderMarkup(refs.listCocktail, drinks);
  storageCocktailByName();
  event.target.elements.query.value = '';
}

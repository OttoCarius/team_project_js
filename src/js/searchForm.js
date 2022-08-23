import { fetchCocktail } from '../index';
import Notiflix from 'notiflix';
import { createMarkup, renderMarkup, filterQuantityItems } from './markup';
import { refs } from './refs';
import { storageCocktailByName } from './storageCocktails';
import data from './object';

export async function onFormSubmit(event) {
  try {
    event.preventDefault();
    fetchCocktail.query = event.currentTarget.elements.query.value.trim();

    if (fetchCocktail.query === '') {
      return Notiflix.Notify.failure('Please, enter the name of the cocktail');
    }
    const arr = await fetchCocktail.getResults();
    const markup = createMarkup(arr, data);
    const drinks = filterQuantityItems(markup);
    renderMarkup(refs.listCocktail, drinks);
    storageCocktailByName();
    event.target.elements.query.value = '';
  } catch (error) {
    return Notiflix.Notify.failure('Error!sdvsdvsdvsdvs', error.message);
  }
}

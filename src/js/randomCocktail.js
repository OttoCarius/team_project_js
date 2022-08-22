import { fetchCocktail } from '../index';
import {
  createRandomMarkup,
  renderMarkup,
  filterQuantityItems,
} from './markup';
import { refs } from './refs';
import Notiflix from 'notiflix';

export async function createAndRenderRandomMarkup() {
  try {
    const arr = await fetchCocktail.getResultsRandom();

    const markup = createRandomMarkup(arr);
    const drinks = filterQuantityItems(markup);
    renderMarkup(refs.listCocktail, drinks);
  } catch (error) {
    return Notiflix.Notify.failure(`Error! ${error.message}`);
  }
}

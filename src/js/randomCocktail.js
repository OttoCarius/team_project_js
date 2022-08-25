import { fetchCocktail } from '../index';
import {
  createRandomMarkup,
  renderMarkup,
  filterQuantityItems,
} from './markup';
import { refs } from './refs';
import Notiflix from 'notiflix';

export async function createAndRenderRandomMarkup(data) {
  try {
    const arr = await fetchCocktail.getResultsRandom();
    const markup = createRandomMarkup(arr, data);
    const drinks = filterQuantityItems(markup);
    renderMarkup(refs.listCocktail, drinks);
    refs.loadMore.style.display = 'none';
  } catch (error) {
    return Notiflix.Notify.failure(`Error! ${error.message}`);
  }
}

import { fetchCocktail } from '../index';
import {
  createRandomMarkup,
  renderMarkup,
  filterQuantityItems,
} from './markup';
import { refs } from './refs';

export async function createAndRenderRandomMarkup() {
  const arr = await fetchCocktail.getResultsRandom();

  const markup = createRandomMarkup(arr);
  const drinks = filterQuantityItems(markup);
  renderMarkup(refs.listCocktail, drinks);
}

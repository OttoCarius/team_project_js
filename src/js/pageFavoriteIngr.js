import { refs } from './refs';
import { dataIngredients, FAVORITE_INGREDIENTS } from './addToFavourite';
import { fetchCocktail } from '../index';
import {
  createIngredientsMarkup,
  filterQuantityItems,
  renderMarkup,
} from './markup';

export async function getResultsCocktails() {
  const parsedArray = JSON.parse(localStorage.getItem(FAVORITE_INGREDIENTS));
  console.log(parsedArray);

  if (!parsedArray) {
    return;
  }

  const arr = await parsedArray.map(async id => {
    const a = await fetchCocktail.getIngredientByName(id);
    console.log(a);
  });

  const markup = createMarkup(arr);
  const drinks = filterQuantityItems(markup);
  renderMarkup(refs.listFavoriteIngredients, drinks);
  console.log(drinks);
}

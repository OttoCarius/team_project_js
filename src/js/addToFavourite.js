import { refs } from './refs';
import data from './object';

export const dataCocktail = [];
// export const dataIngredients = [];

export const FAVOURITE_KEY = 'storage-favourite';
export const FAVORITE_INGREDIENTS = 'favorite-ingredients';

refs.listCocktail.addEventListener('click', addToFavourite);

export function addToFavourite(e) {
  if (!e.target.dataset.action) return;
  data.cocktails = e.target.id;
}

export function addToFavoriteEngredients(e) {
  console.log(dataIngredients);
  if (dataIngredients.includes(e.target.id)) {
    e.target.textContent = 'Add to favorite';
    const positionIndex = dataIngredients.indexOf(e.target.id);
    dataIngredients.splice(positionIndex, 1);

    return localStorage.setItem(
      FAVORITE_INGREDIENTS,
      JSON.stringify(dataIngredients)
    );
  }
  e.target.textContent = 'Remove from favorite';
  dataIngredients.push(e.target.id);
  return localStorage.setItem(
    FAVORITE_INGREDIENTS,
    JSON.stringify(dataIngredients)
  );
}

export function checkResultIngredients() {
  const data = localStorage.getItem(FAVORITE_INGREDIENTS);
  if (!data) {
    return;
  }
  return JSON.parse(data);
}

export function checkResult() {
  const data = localStorage.getItem(FAVOURITE_KEY);
  if (!data) {
    return;
  }
  return JSON.parse(data);
}

export function saveData(cocktails) {
  localStorage.setItem(FAVOURITE_KEY, JSON.stringify(cocktails));
}

export function toggleIcon(cocktails) {
  const items = refs.listCocktail.querySelectorAll('.btn-add-to-favorite');
  items.forEach(item => {
    if (cocktails.includes(item.getAttribute('id'))) {
      item.classList.add('is-add');
    } else {
      item.classList.remove('is-add');
    }
  });
}

let btn;

export function addToFavouriteModal(e) {
  btn = e.target;
  data.cocktails = e.target.id;
  toggleTextBtn(data.cocktails);
}

export function toggleTextBtn(cocktails) {
  console.log(btn.id);
  if (cocktails.includes(btn.id)) {
    btn.textContent = 'Remove from favorite';
  } else {
    btn.textContent = 'Add to favorite';
  }
}

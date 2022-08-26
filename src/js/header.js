import { onPageFavCocktails } from './pageFavCocktails';
import { onPageFavIngredients } from './pageFavIngredients';
const menuOpenBtn = document.querySelector('.mob-btn-open');
const menuCloseBtn = document.querySelector('.mob-btn-close');
const menu = document.querySelector('[data-menu]');
const theme = document.getElementById('checkbox');
const themeNameLight = document.querySelector('.theme-name__light');
const themeNameDark = document.querySelector('.theme-name__dark');
const favorite = document.querySelector('.favorite-acctive');
export const LinksTheme = document.querySelector('.favorite-wrapper');
const searchForm = document.querySelector('[data-search]');
const favoriteCocktails = document.querySelector('[data-fovorite_cocktails]');
const favoriteIngredients = document.querySelector(
  '[data-fovorite_ingredients]'
);

const active = document.querySelectorAll(
  'div.navigation-wrapper, div.theme-wrapper, form.search__form'
);
menuOpenBtn.addEventListener('click', onMenuBtnClick);
menuCloseBtn.addEventListener('click', onMenuBtnClick);
favoriteCocktails.addEventListener('click', onPageFavCocktails);
favoriteIngredients.addEventListener('click', onPageFavIngredients);

function onMenuBtnClick() {
  menu.classList.toggle('is-hidden');
  active.forEach(el => el.classList.toggle('active'));
}

theme.addEventListener('change', e => {
  themeNameLight.classList.toggle('theme-acctive');
  themeNameDark.classList.toggle('theme-acctive');
  toggleTheme(e.target.checked ? 'theme-dark' : 'theme-light');
});

favorite.addEventListener('click', () => {
  LinksTheme.classList.toggle('favorite-wrapper__close');
});

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    theme.checked = true;
    themeNameDark.classList.toggle('theme-acctive');
  } else {
    setTheme('theme-light');
    theme.checked = false;
    themeNameLight.classList.toggle('theme-acctive');
  }
})();

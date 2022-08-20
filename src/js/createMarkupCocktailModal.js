import { fetchCocktail } from './createMarkup';
import { refs } from './refs';

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

export function onloadMoreClick(e) {
  if (e.target.className != 'btn-learn-more') return;
  const id = e.target.parentNode.id;
  //   fetchCocktail.id = id;
  fetchCocktail.getResultsById(id).then(res => {
    toggleModal();
    createMarkupCocktailModal(res);

    const cocktailModalIngredientsList = document.querySelector(
      '.cocktail-desc-list'
    );
    const markupIngredientsList =
      createMarkupCocktailForModalListIngredients(res);
    cocktailModalIngredientsList.innerHTML = '';
    cocktailModalIngredientsList.innerHTML = markupIngredientsList;

    const modalCloseBtn = document.querySelector('[data-modal-close]');
    modalCloseBtn.addEventListener('click', toggleModal);
  });
}

function createMarkupCocktailForModalListIngredients(res) {
  const drink = res.data.drinks[0];
  const ingredients = [];
  drink.strIngredient1;
  for (let i = 1; i <= 15; i += 1) {
    let ingredient = drink['strIngredient' + i];
    if (!ingredient) break;
    ingredients.push(ingredient);
  }
  return ingredients
    .map(ingredient => {
      return /*html*/ `<li><button class="cocktail-ingredient-btn">${ingredient}</button></li>`;
    })
    .join('');
}

function createMarkupCocktailModal(res) {
  refs.modalCocktail.innerHTML = '';
  const { strDrinkThumb, strDrink, strInstructions } = res.data.drinks[0];
  const markupModalCocktail = /*html*/ `<div class="modal-cocktail-wrapper"><img
      class="modal-cocktail-img"
      src="${strDrinkThumb}"
      alt="${strDrink}"
      width="288"
    />
    <div class="cocktail-desc">
      <h3 class="cocktail-desc-name">${strDrink}</h3>
      <h4 class="cocktail-desc-ingredients">INGREDIENTS</h4>
      <p class="cocktail-desc-subtitle">Per cocktail</p>
      <ul class="cocktail-desc-list"></ul>
      </div>
      <button type="button" class="modal-cocktail-close-btn" data-modal-close>
  <svg class="icon-modal-cocktail" height="18px" width="18px">
  <use href="./images/icons-modal.svg#icon-close-modal-cocktail"></use>
</svg>
</button>
    </div>
    <div class="cocktail-instruction">
      <h3 class="instruction-name">Instractions:</h3>
      <p class="instruction-text">${strInstructions}</p>
    </div>
    <button type="button" class="cocktails-modal-btn">
      Add to favorite
    </button>
`;
  refs.modalCocktail.insertAdjacentHTML('beforeend', markupModalCocktail);
}

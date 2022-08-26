import {
  saveData,
  toggleIcon,
  toggleIconIngr,
  saveDataIngr,
} from './addToFavourite';

const data = {
  _cocktails: [],
  _ingredients: [],

  get cocktails() {
    return this._cocktails;
  },

  set cocktails(newCocktail) {
    const positionIndex = this._cocktails.indexOf(newCocktail);
    if (positionIndex > -1) {
      this._cocktails.splice(positionIndex, 1);
    } else {
      if (Array.isArray(newCocktail)) {
        this._cocktails = newCocktail;
      } else {
        this._cocktails.push(newCocktail);
      }
    }

    saveData(this._cocktails);
    toggleIcon(this._cocktails);
  },

  get ingredients() {
    return this._ingredients;
  },

  set ingredients(newIngredient) {
    const positionIndex = this._ingredients.indexOf(newIngredient);
    if (positionIndex > -1) {
      this._ingredients.splice(positionIndex, 1);
    } else {
      if (Array.isArray(newIngredient)) {
        this._ingredients = newIngredient;
      } else {
        this._ingredients.push(newIngredient);
      }
    }
    saveDataIngr(this._ingredients);
    toggleIconIngr(this._ingredients);
  },
};
export default data;

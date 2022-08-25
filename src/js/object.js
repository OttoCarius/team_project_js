import { saveData, toggleIcon } from './addToFavourite';

const data = {
  _cocktails: [],

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
};
export default data;

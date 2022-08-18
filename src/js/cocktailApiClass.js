import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

class Cocktail {
  constructor() {
    this.name = '';
    this.letter = '';
    // this.title = '';
    // this.category = '';
    // this.img = '';
    // this.ingredients = '';
  }

  async getResults() {
    try {
      const res = await axios(`${BASE_URL}search.php?s=${this.name}`);
      //   const drinksObj = res.data.drinks[0];
      //   this.title = drinksObj.strDrink;
      //   this.category = drinksObj.strCategory;
      //   this.img = drinksObj.strDrinkThumb;
      //   this.ingredients = [];

      //   for (let key in drinksObj) {
      //     if (key.includes('strIngredient') && drinksObj[key] !== null) {
      //       this.ingredients.push(drinksObj[key]);
      //     }
      //   }
      return res;
    } catch (error) {
      alert(error);
    }
  }

  async getResultsByLetter() {
    try {
      return await axios(`${BASE_URL}search.php?f=${this.letter}`);
    } catch (error) {
      alert(error);
    }
  }

  get query() {
    return this.name;
  }

  set query(newQuery) {
    this.name = newQuery;
  }
}

export { Cocktail };

// margarita

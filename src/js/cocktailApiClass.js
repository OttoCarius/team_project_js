import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
console.log(BASE_URL);

class Cocktail {
  constructor() {
    this.name = '';
    // this.title = '';
    // this.category = '';
    // this.img = '';
    // this.ingredients = '';
  }

  async getResults() {
    // console.log(this);
    try {
      const res = await axios(`${BASE_URL}search.php?s=${this.name}`);
      //   console.log(res.data);
      const drinksObj = res.data.drinks[0];
      this.title = drinksObj.strDrink;
      this.category = drinksObj.strCategory;
      this.img = drinksObj.strDrinkThumb;
      this.ingredients = [];

      for (let key in drinksObj) {
        if (key.includes('strIngredient') && drinksObj[key] !== null) {
          this.ingredients.push(drinksObj[key]);
        }
      }
      return res;
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

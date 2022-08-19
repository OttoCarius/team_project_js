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
      return await axios(`${BASE_URL}search.php?s=${this.name}`);
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

  // async getResultsRandom() {
  //   try {
  //     return await axios(`${BASE_URL}random.php`);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  async getResultsRandom() {
    try {
      let arr = [];
      for (let i = 0; i < 9; i += 1) {
        const cocktail = axios(BASE_URL + 'random.php');
        arr.push(cocktail);
      }

      const promiseArr = await Promise.all(arr).then(response => {
        return response;
      });
      return promiseArr;
    } catch (error) {
      throw new Error(error);
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

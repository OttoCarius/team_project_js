import axios from 'axios';
import { BASE_URL } from './variables';

class Cocktail {
  constructor() {
    this.name = '';
    this.letter = '';
    this.id = '';
  }

  async getResults() {
    try {
      return await axios(`${BASE_URL}search.php?s=${this.name}`);
    } catch (error) {
      // alert(error);
      throw new Error(error);
    }
  }

  async getResultsByLetter() {
    try {
      return await axios(`${BASE_URL}search.php?f=${this.letter}`);
    } catch (error) {
      // alert(error);
      throw new Error(error);
    }
  }

  async getResultsById(id) {
    try {
      return await axios(`${BASE_URL}lookup.php?i=${id}`);
    } catch (error) {
      // alert(error);
      throw new Error(error);
    }
  }

  async getResultsRandom() {
    try {
      let arr = [];
      for (let i = 0; i < 9; i += 1) {
        const cocktail = await axios(BASE_URL + 'random.php');
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

  async getIngredientByName(string) {
    try {
      return await axios(`${BASE_URL}/search.php?i=${string}`);
    } catch (error) {
      // alert(error);
      throw new Error(error);
    }
  }
}

export { Cocktail };

import { cocktailSet } from './refs';  

export const getRandomCocktail = (cocktail) => {
    const markup = cocktail.map(({ photo, name }) => {
        return `<li class="cocktail">
           <img src=${photo} alt=cocktail class='cocktail_photo' />
            <h3 class='cocktail_title'>${name}</h3>
            <button type="button" class="cocktail-more-btn">Learn more</button>
            <button type="button" class="cocktail-more-btn">Add</button>`
    }).join("");
   

    cocktailSet.innerHTML = markup;

}


    
       

    


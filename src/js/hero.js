import { Cocktail } from '../js/cocktailApiClass';
import { createMarkup } from './createMarkup';
const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

function createHeroMarkup(items) {
  return items
    .map(
      item =>
        `<li class="hero-item"><button type ="button" class="hero-button" data-letter="${item}">${item}</button></li>`
    )
    .join('');
}

function createHeroMarkupMobile(items) {
  return items
    .map(
      item => `<option class="hero-option-mob" value="${item}">${item}</option>`
    )
    .join('');
}

export const markupHeroLettersMobile = createHeroMarkupMobile(letters);
export const markupHeroLetters = createHeroMarkup(letters);

export function renderMarkup(element, markup) {
  element.insertAdjacentHTML('beforeend', markup);
}

export function onLetterClick(e) {
  if (e.target.tagName != 'BUTTON') return;
  const letter = e.target.dataset.letter;
  renderMarkupByCheckedLetter(letter);
}

export function onSelectChange(e) {
  const letter = e.target.value;
  renderMarkupByCheckedLetter(letter);
}

function renderMarkupByCheckedLetter(letter) {
  const cocktailByLetter = new Cocktail();
  cocktailByLetter.letter = letter;
  cocktailByLetter.getResultsByLetter().then(createMarkup);
}

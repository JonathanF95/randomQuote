//List of quotes, that will be randomly picked from.
const quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss"
  },
  {
    quote: "Life is about making an impact, not making an income.",
    source: "Kevin Kruse"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    source: "Albert Einstein"
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    source: "Amelia Earhart"
  },
  {
    quote: "The mind is everything. What you think you become.",
    source: "Buddha"
  },
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie"
  }
];
//All my selected elements from the DOM
let quote = document.querySelector(".quote");
let source = document.querySelector(".source");
let button = document.querySelector("#loadQuote");
let box = document.querySelector('#quote-box');

//Function that picks a random index from the array of quotes
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//Function with button, once clicked it displays and manipulates the DOM
function printQuote() {
    let randomQuote = getRandomQuote();
    let html = `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}</p>`;

    box.innerHTML = html;
}

printQuote();

button.addEventListener('click', printQuote);

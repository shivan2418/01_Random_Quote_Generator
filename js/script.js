/*jshint esversion: 6 */

/* i dont care too much about the grade. I made some other improvments that are beyond the minimum
and coded it in a way that I find is more aestetically apeasing rather than using lots of if clauses
*/

//list of quotes
const quotes = [
  q1 = {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
    source: 'Nelson Mandela'
  },
  q2 = {
    quote: 'The way to get started is to quit talking and begin doing',
    source: 'Walt Disney'
  },
  q3 = {
    quote: 'The ugly truth is revealed that fear is the foundation of obedience',
    source: 'Winston Churchill',
    citation: 'The River War An account on the reconquest of Sudan'
  },
  q4 = {
    quote: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
    source: 'Winston Churchill'
  },
  q5 = {
    quote: "If what you have done yesterday still looks big to you, you haven't done much today",
    source: 'Mikhail Gorbachev',
    year: 1989
  }]

// a global var to keep track of what quote we showed last time so we dont repeat.
var previous_quote_num = -1;
function getRandomQuote() {
  // generate a random number
  do {
    var num = Math.floor(Math.random() * quotes.length);
  }
  //if the number is the same as we used last time generate again
  while (num == previous_quote_num);

  // assign the number we picked to the previous quote number (that variable refers to the global previous quote num)
  previous_quote_num = num;
  //then return the quote object
  return quotes[num];
}

//print quote function
function printQuote() {
  // get the quote
  var qte = getRandomQuote();
  var html_template = '';

  // Concat the HTMl using the method as requested in the specs instead of template strings. 

  html_template +='<p class="quote">' + qte.quote + '</p><p class="source">' + qte.source
  if (qte.citation !== undefined) {
    html_template += '<span class="citation">' + qte.citation + '</span>'
  }
  if (qte.year !== undefined) {
    html_template += '<span class="year">' + qte.year + '</span>';
  }
  // affix the closing tag
  html_template += '</p>';

  // set the html of the quote box to the htmltemplate
  document.getElementById('quote-box').innerHTML = html_template;
}

// add event listener
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// call the print quote function once so there is a quote when the user loads the page
printQuote();
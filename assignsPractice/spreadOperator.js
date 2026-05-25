'use strict';
const books = require('./booksInfo');

// Declare an array called bookAuthors(no nested array), and fill it with authors of the first two books from the books array.
const bookAuthors = [...books[0].author, ...books[1].author]
// console.log(bookAuthors)

// Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument seperated by a space.
function spellWord(letters){
    // console.log(...letters);
}
spellWord('Javascript');

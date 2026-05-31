'use strict';
const books = require('./booksInfo');

// Write a function hasExamplesInJava should return true if the book uses Java, or a string 'no data available' if it uses other languages or no programming languages at all.
function hasExamplesInJava(books){
    const {programmingLanguage: lang} = books;
    // console.log(lang==='Java'||'no data available');
}
hasExamplesInJava(books[0]);
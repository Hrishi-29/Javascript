'use strict';
const books = require('./booksInfo');

// Write a function hasExamplesInJava should return true if the book uses Java, or a string 'no data available' if it uses other languages or no programming languages at all.
function hasExamplesInJava(books) {
    const {
        programmingLanguage: lang
    } = books;
    // console.log(lang==='Java'||'no data available');
}
hasExamplesInJava(books[0]);

// Loop over the books array, and for the books that provide online content, log "${title}" provides online content.
for (var i = 0, length1 = books.length; i < length1; i++) {
    // books[i].onlineContent&&console.log(`"${books[i].title}" provides online content.`);
}
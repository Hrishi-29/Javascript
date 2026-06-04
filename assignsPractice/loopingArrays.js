'use strict';
const books = require('./booksInfo');

// Use the for-of loop to loop over the books array and sum the pages of all books.
let pageSum = 0;
for (const book of books) {
    const {pages: num} = book;
    pageSum += num;
}
// console.log(pageSum);
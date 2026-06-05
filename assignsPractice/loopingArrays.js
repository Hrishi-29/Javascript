'use strict';
const books = require('./booksInfo');

// Use the for-of loop to loop over the books array and sum the pages of all books.
let pageSum = 0;
for (const book of books) {
    const {
        pages: num
    } = book;
    pageSum += num;
}
// console.log(pageSum);

// Use the for-of loop to fill allAuthors variables which stores an empty array with the authors of each books from the books array.
const allAuthors = [];
for (const book of books) {
    if (typeof book.author === 'string') {
        allAuthors.push(book.author);
    } else {
        for (const author of book.author) {
            allAuthors.push(author);
        }
    }
}
// console.log(allAuthors)
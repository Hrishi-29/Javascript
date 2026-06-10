'use strict';
const books = require('./booksInfo');

// Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property(array) of the first book object from books array and push to the entries array
const entries = [];
for (const key of Object.keys(books[0].thirdParty.goodreads)) {
    entries.push([key]);
}
// console.log(entries);
'use strict';
const books = require('./booksInfo');

const entries = [];
for (let key of Object.keys(books[0].thirdParty.goodreads)) {
    entries.push([key]);
}
// console.log(entries);
'use strict';
const books = require('./booksInfo');

// Convert the first book object from the books array into a Map and assign it in firstBookMap variable.
const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap)
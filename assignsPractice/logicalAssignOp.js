'use strict';
const books = require('./booksInfo');

// Loop over the books, and assign edition property with a number 1(if it doesn't already exist).
for(var i = 0, length1 = books.length; i < length1; i++){
    books[i].edition??=1;
    // console.log(books[i]);
}

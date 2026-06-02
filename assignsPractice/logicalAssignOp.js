'use strict';
const books = require('./booksInfo');

// Loop over the books, and assign edition property with a number 1(if it doesn't already exist).
for(var i = 0, length1 = books.length; i < length1; i++){
    books[i].edition??=1;
    // console.log(books[i]);
}

// Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2 then reassign highlighted property is false
for(var i = 0, length1 = books.length; i < length1; i++){
    books[i].highlighted&&=!(books[i].thirdParty.goodreads.rating<4.2);
    // console.log(books[i]);
}
'use strict';
const books = require('./booksInfo');

// The function getFirstKeyword should return the first keyword from the book's keywords property(array) or undefined(if the keywords properties doesn't exist).
const getFirstKeyword = function (books) {
    return books?.keywords[0] ?? 'undefined';
}
// console.log(getFirstKeyword(books[0]));
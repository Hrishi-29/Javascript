'use strict';
const books = require('./booksInfo');

// Destruct the first keyword of the first book should be assigned to mainkeyword, and the rest of the keywords should be assigned to the rest variable.
const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);
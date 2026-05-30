'use strict';
const books = require('./booksInfo');

// Destruct the first keyword of the first book should be assigned to mainkeyword, and the rest of the keywords should be assigned to the rest variable.
const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// The bookPublisher variable should be assigned with the value of the publisher property of the second book object. Assign rest of the properties to the restofTheBook variable.
const { publisher: bookPublisher, ...restofTheBook} = books[1]  ;
// console.log(bookPublisher, restofTheBook);
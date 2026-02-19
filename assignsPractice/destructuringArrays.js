"use strict";
const books = require("./booksInfo");

// Destructure the books array into two variables called firstBook and secondBook
const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

//Destructure the books array into a variable called thirdBook. You must skip the first two books
const [, , thirdBook] = books;
// console.log(thirdBook);

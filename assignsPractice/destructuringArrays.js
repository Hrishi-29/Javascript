"use strict";
const books = require("./booksInfo");

// Destructure the books array into two variables called firstBook and secondBook
const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

//Destructure the books array into a variable called thirdBook. You must skip the first two books
const [, , thirdBook] = books;
// console.log(thirdBook);

// destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584
const ratings = [
    ["rating", 4.19],
    ["ratingsCount", 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

"use strict";
const books = require("./booksInfo");

// Destructure the first book object from the books array into variables called title, author and ISBN
const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property
const { keywords: tags } = books[0];
// console.log(tags);

// Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'
const { language, programmingLanguage = "unknown" } = books[6];
// console.log(language, programmingLanguage);

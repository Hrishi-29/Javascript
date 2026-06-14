'use strict';
const books = require('./booksInfo');

// Create a map with the name of bookMap and insert a data.
const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
// console.log(bookMap)

// Set pages a new key and assign 464 number in bookMap.
// console.log(bookMap.set('pages', '464'))

// Get the title and author value from bookMap and console it in a string.
// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`)

// Get the size of bookMap and log it.
// console.log(bookMap.size)

// log 'The author of the book is known' to the console and check if bookMap has the author.
// console.log(!(bookMap.has('author'))||'The author of the book is known')
'use strict';
const books = require('./booksInfo');

// Fill the allKeywords which is empty array with the keywords property from the books arrays of each book object and no nested array contain.
const allKeywords = [];

// const sets = new Set(allKeywords);
for (const book of books) {
    allKeywords.push(...book.keywords);
}
// const keywords = new Set(...sets);
// for (const keyword of keywords) {
//     allKeywords.push(keyword);
// }
// console.log(allKeywords)

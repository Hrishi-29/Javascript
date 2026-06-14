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

// Remove duplicates that contains allKeywords array by creating a Set out of that array and assign it to the uniqueKeywords variable.
const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords)

// Add two more keywords in the uniqueKeywords set
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
// console.log(uniqueKeywords)

// Delete 'business' from the uniqueKeywords set.
uniqueKeywords.delete('business');
// console.log(uniqueKeywords)
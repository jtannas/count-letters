'use strict';

const countLetters = function returnCountOfEachCharInStringExcludingSpaces(str) {
  const strNoSpaces = str.replace(/ /g, '');
  const charCounts = {};
  for (let char of strNoSpaces) {
    if (charCounts[char] === undefined) { charCounts[char] = 0; }
    charCounts[char] += 1;
  }
  return charCounts;
};

const myArgs = process.argv.slice(2);
for (const arg of myArgs) {
  console.log(countLetters(arg));
}

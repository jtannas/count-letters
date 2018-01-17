'use strict';

const countLetters = function returnCountOfEachCharInStringExcludingSpaces(str) {
  const strNoSpaces = str.replace(/ /g, '');
  const charSet = new Set(strNoSpaces);
  const charCounts = {};
  for (const char of charSet) {
    charCounts[char] = strNoSpaces.match(new RegExp(char, 'g')).length;
  }
  return charCounts;
};

const myArgs = process.argv.slice(2);
for (const arg of myArgs) {
  console.log(countLetters(arg));
}

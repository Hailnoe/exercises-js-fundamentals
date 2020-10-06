/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * Note:
 * 1. You can use a `for...of` loop to iterate through the characters
 *    of a string one letter at a time.
 * 2. You can access a specific character using string[i], as
 *    if the string were an array.
 *
 * Both of these are enough to complete this exercise.
 *
 * @example
 * countLetter('hello', 'l'); // => 2
 * countLetter('Mississippi', 's'); // => 4
 * countLetter('Mississippi', 'x'); // => 0
 * countLetter('Mississippi', 'm'); // => 0 (no lower-case m's)
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  
  var s= 0
for (char of string) {
  
  if (letter === char) {
    s++;
  }
}
return s 
}

var x = "lllllxlllll";
var y = "lxl";
var z = "l               l e e e ."

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');
  console.log(countLetter(x,'l') === 10)
  console.log(countLetter(y,'l') === 2)
  console.log(countLetter(z,'e') === 3)
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countLetter;

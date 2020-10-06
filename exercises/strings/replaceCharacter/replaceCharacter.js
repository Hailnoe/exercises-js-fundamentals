/**
 * Given an input string, a target character to find, and a replacement character,
 * returns a copy of the input string with the target character replaced by the
 * replacement character.
 *
 * @example
 * replaceCharacter('hello', 'l', '8'); // => 'he88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {string} target - The target letter
 * @param {string} replaceWith - The replacement letter
 * @returns {string} A copy of the input string with target replaced by replaceWith
 */

function replaceCharacter(string, target, replaceWith) {
  var v =''
  for (let char of string) {
    if (char===target) {
      char = replaceWith
      v+=char
    }
    else {
      v+=char
    }
  }
return v
}

var x = 'hello'
var y = 'communism'
var z = 'killer'
if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');
  console.log(replaceCharacter(x,'l','8'))
  console.log(replaceCharacter(y,'m','3'))
  console.log(replaceCharacter(z,'l','7'))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = replaceCharacter;

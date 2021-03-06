/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

function replaceCharacters(string, replacementDict) {
  var v =''
  for (let char of string) {
    if (replacementDict[char] !== undefined) {
      v+=replacementDict[char]
    }
    else {
      v+=char
    }
  }
return v
}

var x= 'howdy'
var y= 'hello'
var z= 'hospis'

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');
 console.log(replaceCharacters('hello', { 'h': 'y', 'l': '8' })); // => 'ye88o'
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = replaceCharacters;
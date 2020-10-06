/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  var a=string.slice(0,1) 
  
  var b=string.slice(1)
  
  return a.toUpperCase(a)+b
}

var x = 'we will take moscow by winter - Napolean Bonaparte'
var y = 'the fat cat jumped over the fox in a box'
var z = 'florida sucks'

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');
  console.log(capitalize(x) === 'We will take moscow by winter - Napolean Bonaparte')
  console.log(capitalize(y) === 'The fat cat jumped over the fox in a box')
  console.log(capitalize(z) === 'Florida sucks')
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = capitalize;

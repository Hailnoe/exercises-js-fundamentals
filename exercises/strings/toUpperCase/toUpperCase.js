/**
 * Given an input string, returns a copy of the string with all-uppercase letters.
 *
 * Don't use JavaScript's built-in string.toUpperCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding uppercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toUpperCase('HelLo fRiends!'); // => 'HELLO FRIENDS!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A uppercase copy of the input string
 */
var upperCaseDict = {'a':'A','b':'B','c':'C','d':'D','e':'E','f':'F','g':'G','h':'H','i':'I','j':'J','k':'K','l':'L','m':'M','n':'N','o':'O','p':'P','q':'Q','r':'R','s':'S','t':'T','u':'U','v':'V','w':'W','x':'X','y':'Y','z':'Z' }

function toUpperCase(string) {
    var v =''
    for (let char of string) {
      if (upperCaseDict[char] !== undefined) {
        v+=upperCaseDict[char]
      }
      else {
        v+=char
      }
    }
  return v
}

var x='communism'
var y='Fascism'
var z='democracy'
if (require.main === module) {
  console.log('Running sanity checks for toUpperCase:');
  console.log(toUpperCase(x))
  console.log(toUpperCase(y))
  console.log(toUpperCase(z))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = toUpperCase;

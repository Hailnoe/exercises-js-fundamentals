/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A snake-case copy of the input string
 */
var snakeCaseDict = {'A':'a','B':'b','C':'c','D':'d','E':'e','F':'f','G':'g','H':'h','I':'i','J':'j','K':'k','L':'l','M':'m','N':'n','O':'o','P':'p','Q':'q','R':'r','S':'s','T':'t','U':'u','V':'v','W':'w','X':'x','Y':'y','Z':'z',' ':'_' }

function toSnakeCase(string) {
  var v =''
  for (let char of string) {
    if (snakeCaseDict[char] !== undefined) {
      v+=snakeCaseDict[char]
    }
    else {
      v+=char
    }
  }
return v
}
var x = 'I despise DESPOTS.'
var y = 'My name iS Aaron Burr sir.'
var z = 'My Name Is THOMAS JEFFERSON AND I AM A founding Father.'
if (require.main === module) {
  console.log('Running sanity checks for toSnakeCase:');
  console.log(toSnakeCase(x))
  console.log(toSnakeCase(y))
  console.log(toSnakeCase(z))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = toSnakeCase;

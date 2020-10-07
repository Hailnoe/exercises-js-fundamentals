/**
 * Given an input string, returns a copy of the string in title case.
 *
 * For our purposes, title case is words separated by spaces with the
 * first letter of each word being capitalized and every other letter
 * being lowercsae.
 *
 * Don't do anything special with non-alphabetic characters (numbers,
 * puncuation, etc.). Don't worry about special rules like not capializing
 * definite articles (a, an, the, etc).
 *
 * @example
 * toTitleCase('wElCoMe to THE wILD wiLD WEST!'); // => 'Welcome To The Wild Wild West!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */
//doesnt work but results are funny lolol
function toTitleCase(string) {
  var v =''
  
    var array = string.split(" ");
    console.log(array)
    var a=array.slice(0,1) 
  
    var b=array.slice(1)
  
    v += a.toUpperCase(a)+b.toLowerCase(b)
    
return v
}
var x = 'comMing To a THEAter'
var y = 'NEar you'
var z = 'complete anarchy boommmm'
if (require.main === module) {
  console.log('Running sanity checks for toTitleCase:');
  console.log(toTitleCase(x))
  // console.log(toTitleCase(y))
  // console.log(toTitleCase(z))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = toTitleCase;

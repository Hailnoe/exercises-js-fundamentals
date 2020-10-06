/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  var str = string.split(" ");
    var shortest = 28;
    word=null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (shortest > str[i].length) {
            shortest = str[i].length;
            str[i]=word
        } 
    }
    return word;
}

var x= 'one four seven'
var y= 'I hate you'
var z= 'You were my brother'

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(shortestWord(x))
  console.log(shortestWord(y))
  console.log(shortestWord(z))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}
module.exports = shortestWord;

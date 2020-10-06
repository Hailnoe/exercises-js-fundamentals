/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

//May need to go through this one again with Jesse or Terra

function longestWord(string) {
  var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word= str[i];
        }
    }
    return word;
}

var x= 'the biggest word is the second one.'
var y= 'I hate you'
var z= 'You were my brother'

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord(x)===biggest)
  console.log(longestWord(y)===hate)
  console.log(longestWord(z)===were)
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;

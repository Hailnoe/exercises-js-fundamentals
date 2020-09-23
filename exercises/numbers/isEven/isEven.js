/**
 * Returns true if the given number is even false otherwise.
 *
 * An integer is even if the remainder is 0 after dividing
 * by 2. Equivalently, an integer is even if it can be written
 * as 2*k for some integer k.
 *
 * If an integer is not even we call it "odd".
 *
 * Even: -10, -12, -104, 0, 16, 18, 2
 * Odd: -11, -13, -103, -1, 1, 17, 19, 3
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */
function isEven(num) {
  // Hint: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
  // The _____ is meant to be "fill in the blank"
  // Look at isZero and compare; what makes sense here?
  if (num % 2 == 0) {return true}
  else {return false}
  //return num % 2;
}

if (require.main === module) {
  let evenNumbers = [2, 20, 100, 768];
  let oddNumbers = [1, 13, 25, 875]

  console.log('Running sanity checks for isEven');

  console.log(isEven(0) === true);

  // These should all be even
  for (let num of evenNumbers) {
    console.log(isEven(num) === true);

    console.log(isEven(2) === true);
    console.log(isEven(4) === true);
    console.log(isEven(6) === true);
  }

  // If num is even then num + 1 is odd
  for (let num of evenNumbers) {
    console.log(isEven(num + 1) === false);
    
    console.log(isEven(3) === false);
    console.log(isEven(5) === false);
    console.log(isEven(7) === false);
  }
}

module.exports = isEven;

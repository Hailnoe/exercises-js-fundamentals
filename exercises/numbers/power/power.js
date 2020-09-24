/**
 * Given a base and an positive integer exponent, returns the base raised to the power of the exopnent.
 *
 * @example
 *   power(2, 3) // => 8 (i.e., 2 * 2 * 2)
 *   power(-2, 3) // => -4 (i.e., -2 * -2 * -2)
 *   power(5, 6) // => 15625 (i.e., 5 * 5 * 5 * 5 * 5 * 6)
 *
 * @param {number} base The base
 * @param {number} exponent The exponent (a positive integer)
 * @returns {number} The base raised to the power of the exopnent
 */
// for loops on w3schools uses examples with arrays which made this more trouble than need be.
function power(b, e) {
  if (b === 0 ) {
    return console.log(0)
  }
  if (e === 0) {
    return console.log(1)
  } else {
    var x = 1;
    for(var i=1; i<=e; i++){
        x = x * b;
    }
    return x;

  } 
} 


if (require.main === module) {
  console.log('Running sanity checks for power:');

  console.log(power(1, 1) === 1 );
  console.log(power(1, 2) === 1);

  console.log(power(-1, 1) === -1);
  console.log(power(-1, 2) === 1);
  console.log(power(-1, 3) === -1);

  // Your sanity checks go here
  // What should happen if base is 0? If exponent is 0?
}

module.exports = power;

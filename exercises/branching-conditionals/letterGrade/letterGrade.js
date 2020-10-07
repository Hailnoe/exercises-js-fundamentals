/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  if (percentGrade<=0 ){
    return 'How the fuck?'
  }
  if (percentGrade<60){
   return 'F'
  }
  if (percentGrade<=62 ){
    return 'D-'
  }
  if (percentGrade<=66 ){
    return 'D'
  }
  if (percentGrade<=69 ){
    return 'D+'
  }
  if (percentGrade<=72 ){
    return 'C-'
  }
  if (percentGrade<=76 ){
    return 'C'
  }
  if (percentGrade<=79) {
    return 'C+'
  }
  if (percentGrade<=82 ){
    return 'B-'
  }
  if (percentGrade<=86){
    return 'B'
  }
  if (percentGrade<=89){
    return 'B+'
  }
  if (percentGrade<=92){
    return 'A-'
  }
  if (percentGrade<=96){
    return 'A'
  }
  if (percentGrade<=100){
    return 'A+'
  }
  if (percentGrade){
    return 'You Rock'
  }
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');
console.log(letterGrade(12))
console.log(letterGrade(65))
console.log(letterGrade(87))
console.log(letterGrade(75))
console.log(letterGrade(92))
console.log(letterGrade(-12))
console.log(letterGrade(101))
}

module.exports = letterGrade;

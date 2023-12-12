// ****Day9*****
// Question  - Write a JS program to print expected output
/* Calculate Ratio -
 Input values -
 Numerator : 120, Denominator - 78
 It should return 20:13
*/
function calculateRatio(numerator, denominator) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Calculate the GCD
  const commonDivisor = gcd(numerator, denominator);

  // Calculate the simplified ratio
  const simplifiedNumerator = numerator / commonDivisor;
  const simplifiedDenominator = denominator / commonDivisor;

  console.log(
    `The ratio of ${numerator}:${denominator} is: ${simplifiedNumerator}:${simplifiedDenominator}`
  );
}

// Example usage
const numerator = 120;
const denominator = 78;
calculateRatio(numerator, denominator);

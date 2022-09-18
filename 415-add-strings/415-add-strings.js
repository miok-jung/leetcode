/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const a = BigInt(num1);
  const b = BigInt(num2);
  const sum = a + b;
  return sum.toString();
  
};
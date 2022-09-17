/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let n = BigInt(num.join(''));
  let s = n + BigInt(k);
  
  return String(s).split('');
};
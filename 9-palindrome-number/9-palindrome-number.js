/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const a = x.toString();
    const b = x.toString().split('').reverse().join('');
    
    if( a == b ) return true;
    else return false;
};
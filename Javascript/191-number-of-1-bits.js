/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    const arr = n.toString(2).split('').sort().reverse()
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i]==='0'){
            return count
        }
        count++
    }
    return count
};

//Más corto
var hammingWeight = function(n) {
    return (n.toString(2).split('').sort().reverse().join('').match(/[1]/g) || []).length
};

//Mas corto todavía
var hammingWeight = function(n) {
    return (n.toString(2).match(/[1]/g) || []).length
};
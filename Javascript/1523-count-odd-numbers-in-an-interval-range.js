/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */


//My solution
var countOdds = function(low, high) {
    let count = 0;
    for (let i=low; i <= high; i++){
        if(i%2!==0) count++ 
    }
    return count
};
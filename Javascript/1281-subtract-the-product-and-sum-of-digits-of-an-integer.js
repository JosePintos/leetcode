/**
 * @param {number} n
 * @return {number}
 */

//My solution
var subtractProductAndSum = function(n) {
    const arr = n.toString().split('')
    const prod = arr.reduce((acc,current) => acc*Number(current))
    const sum = arr.reduce((acc,current) => acc+Number(current),0)

    return prod-sum
};
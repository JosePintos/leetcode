/**
 * @param {number[]} nums
 * @return {number[]}
 */


//My solution
var runningSum = function(nums) {
    let resultado = []
    let anterior = 0
    for (let i = 0; i<nums.length; i++){
        resultado.push(nums[i]+anterior)
        anterior += nums[i]
    }
    return resultado
};


//Not better but shorter solution
var runningSum = function(nums) {
    let resultado = nums.reduce((acc,current,i) => {
        return i!==0 ?  acc.concat(current+acc[i-1]) : acc.concat(nums[i])
    },[])
    return resultado
};

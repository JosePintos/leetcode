/**
 * @param {number[]} nums
 * @return {number}
 */


//My solution
var pivotIndex = function(nums) {
    let sum = nums.reduce((acc, current) => acc+current,0)
    let left = 0
    for (let i = 0; i < nums.length; i++){
        if(left === (sum-nums[i])){
            return i
        }
        left+=nums[i]
        sum-=nums[i]        
    }
    return -1
};
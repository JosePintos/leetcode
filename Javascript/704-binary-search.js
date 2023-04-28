/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Binary search iterative
var search = function(nums, target) {
    let upper = nums.length-1
    let lower = 0

    while(lower <= upper){
        const medio = Math.ceil((upper+lower)/2)

        if(target === nums[medio]) return medio

        if(target > nums[medio]) lower = medio+1

        if(target < nums[medio]) upper = medio-1
        
    }

    return -1
};


//Recursive
var search = function(nums, target, lower=0, upper=nums.length-1) {
    const medio = Math.ceil((upper+lower)/2)

    if(lower > upper) return -1

    if(target === nums[medio]) return medio

    if(target < nums[medio]){
        return search(nums,target,lower,medio-1)
    }
    if(target > nums[medio]){
        return search(nums,target,medio+1,upper)
    }

};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

//My solution
var searchInsert = function(nums, target) {
    let lower = 0
    let upper = nums.length-1
    let idx = 0
    while(lower <= upper){
        const medio = lower + Math.ceil((upper-lower)/2)

        if(target === nums[medio]) return medio
        if(target < nums[medio]) {
            upper = medio-1
            idx = medio
        }
        if(target > nums[medio]) {
            lower = medio+1
            idx = medio+1
        }
    }
    return idx
};

//Otra forma
var searchInsert = function(nums, target) {
    let lower = 0
    let upper = nums.length-1
    while(lower <= upper){
        const medio = lower + Math.ceil((upper-lower)/2)

        if(target === nums[medio]) return medio
        if(target < nums[medio]) {
            upper = medio-1
        }
        if(target > nums[medio]) {
            lower = medio+1
        }
    }
    return lower
};
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

var twoSum = function(nums, target) {
    let seen = {};
    for (i in nums) {
        complement = target - nums[i];
        if (complement in seen) return [seen[complement], i];
        else seen[nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));
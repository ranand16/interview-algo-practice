var leetcode26 = function(nums) {
    let len = 0; 
    for(let i=0; i<nums.length; i++){
        if(i===0 || nums[i]!==nums[i-1]) {
            nums[len] = nums[i];
            len++
        }
    }
    console.log(nums)
    return len
};
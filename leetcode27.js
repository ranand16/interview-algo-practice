var leetcode27 = function(nums, n) {
    let len = nums.length; 
    for(let i=0; i<nums.length; i++){
        if(nums[i]===n) {
            nums[i] = nums[i+1];
            len--
        }
    }
    console.log(nums)
    return len
};
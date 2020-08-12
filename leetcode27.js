var leetcode27 = function(nums, n) {
    let j = 0; let i=0;
    while(i<nums.length){
        if(nums[i]!==n) {
            nums[j] = nums[i];
            j++;
        }
        i++
    }
    console.log(nums)
    return j
};
function longestConsecutiveSeq(array){
    if(!array.length) return 0 // checking if the array has some elements
    let nums = {}, res = 0
    for(num in array) nums[array[num]] = true
    for(num in array) {
        let i=array[num]
        if(!nums[i-1]) {
            while(nums[i+1]) i++;
            res = Math.max(res, Math.abs(i-array[num])<1?1: i-array[num] + 1) // differnce + 1
        }
    }
    return res  
}
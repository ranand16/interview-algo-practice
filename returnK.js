
// This question was asked by google
/**
 * 
 * @param {*} fileContents FileContents usually JSON to be uploaded
 */
function returnK(nums, target){
    let originalIndices = {}
    nums.map((num, i)=>{ originalIndices[num] = i })
    let sortedNums = nums.sort((a,b)=> a-b)
    console.log(originalIndices)
    let i=0;
    let j=sortedNums.length - 1;
    // find suitable indices
    while(i<sortedNums.length && j>=0){
        let curSum = sortedNums[i] + sortedNums[j];
        if(curSum>target) j--;
        if(curSum<target) i++;
        console.log(originalIndices[sortedNums[i]],"===", sortedNums[i], originalIndices[sortedNums[j]], "===", sortedNums[j], "==curSum===", curSum, "i===", i, "j===", sortedNums.length - 1 - j)
        if(curSum===target) return [originalIndices[sortedNums[i]], originalIndices[sortedNums[j]]]
        if(i === sortedNums.length - 1 - j) continue;
    }
    return "no result found"
}

function trueReturnK(nums, target){
    const map = new Map();
    for (let i=0; i< nums.length; i++){
        let curVal = nums[i];
        if(map.has(curVal)) return [map.get(curVal), i];
        let diff = target - curVal;
        map.set(diff, i)
    }
}
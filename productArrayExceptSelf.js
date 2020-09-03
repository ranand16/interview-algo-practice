function productArrayExceptSelf(nums){
    if(!nums.length) return []
    let output = new Array(nums.length)
    let leftProd = new Array(nums.length)
    let rightProd = new Array(nums.length)
    leftProd[0] = 1;
    rightProd[nums.length-1] = 1;
    for(let i = 1; i<nums.length; i++) {
        leftProd[i] = nums[i-1] * leftProd[i-1]
    }
    console.log(leftProd)
    for(let i = nums.length-2; i>=0; i--) {
        rightProd[i] = nums[i+1] * rightProd[i+1]
    }
    console.log(rightProd)
    for(let i = 0; i<nums.length; i++) {
        output[i] = leftProd[i] * rightProd[i]
    }
    return output
}
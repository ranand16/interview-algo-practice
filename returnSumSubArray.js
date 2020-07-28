function returnSumSubArray(arr, reqsum){
    console.log(" ------------------------------------------------------------- ")
    console.log(arr, reqsum)
    if(arr.length<=0) return []
    let l_pointer = 0, r_pointer = 0, currSum = 0;
    while(l_pointer<arr.length && r_pointer<arr.length){
        console.log(l_pointer + " --- " + r_pointer + " --- " + currSum + " --- " + reqsum)
        if(currSum < reqsum){
            currSum = currSum + arr[r_pointer];
            r_pointer++;
        } else if(currSum > reqsum){
            currSum = currSum - arr[l_pointer];
            l_pointer++;
        } else if(reqsum == currSum){
            return arr.slice(l_pointer, r_pointer)
        }
        console.log(l_pointer + " --- " + r_pointer)
    }
    return []
}
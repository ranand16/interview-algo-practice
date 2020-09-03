function largestSumSubarrayLeastKNum(array, k){
    if(!array.length || array.length<k) return -1
    let l = h = Number.MIN_SAFE_INTEGER
    let largest_length = 0;
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     meh += element
    //     if(meh<element) meh = element
    //     if(msf<=meh) {
    //         msf = meh
    //         meh_length = 1;
    //     } else meh_length++
    // }
    while(l<array.length && h< array.length) {
        
    }

    if(meh_length>=k) return {meh_length, msf}
    return [-1, meh_length]
}
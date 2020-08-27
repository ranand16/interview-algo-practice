function longestSumContiguousSubarray(array){
    if(!array.length) return 0
    let meh = 0, msf= Number.MIN_SAFE_INTEGER;
    array.forEach(element => {
        meh = meh + element
        if(meh < element) meh = element
        if(msf < meh) msf = meh
    });
    return msf
}
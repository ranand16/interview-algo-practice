function largestSubarrayEqual0s1s(array){
    let oneCount = zeroCount = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element === 1) oneCount++
        else if(element === 0) zeroCount++
    }
    return Math.min(oneCount, zeroCount) * 2
}
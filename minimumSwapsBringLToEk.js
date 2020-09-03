function minimumSwapsBringLToEk(array,k) {
    if(!array.length) return null
    let count = countInRange = maxCountInRange = 0;
    for (let i = 0; i < array.length; i++) if(array[i]<=k) count++
    let lP = 1; let rP = lP+count;
    for (let i = 0; i < count; i++) if(array[i]<k) countInRange++
    maxCountInRange = countInRange
    // console.log(count, countInRange, maxCountInRange)
    while(rP<array.length) {
        if(array[lP-1]<k) countInRange-- 
        if(array[rP]<k) countInRange++
        if(countInRange>maxCountInRange) maxCountInRange = countInRange
        lP++
        rP++ 
    }
    return count-maxCountInRange
}
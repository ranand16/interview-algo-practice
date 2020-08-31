function sortedRotatedArrayFindPairSum(array, sum) {
    let lowI, highI,n = array.length;
    for(let i = 0; i<n; i++) {
        if(array[i] > array[i+1]) {
            lowI = (i+1)%n;
            highI = i
        }
    }
    let temps = Number.MIN_SAFE_INTEGER;
    while(lowI != highI) {
        temps = array[lowI] + array[highI]
        if(temps > sum) highI===0?highI = array.length-1:highI--
        else if(temps < sum) lowI===array.length-1?lowI=0:lowI++
        else return true
    }
    return false
}
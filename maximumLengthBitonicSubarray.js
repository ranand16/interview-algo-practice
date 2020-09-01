function maximumLengthBitonicSubarray(array) {
    if(!array.length) return 0
    let maxLenBitonic = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let tempL = tempR = 0;
        if(i-1>=0) for (let j = i-1; j >= 0; j--) if(array[j] <= array[j+1] ) tempL++ 
        if(i+1<array.length) for (let j = i+1; j < array.length; j++) if(array[j] <= array[j-1] ) tempR++
        maxLenBitonic = Math.max(maxLenBitonic, (tempL+tempR) + 1)
    }
    return maxLenBitonic
}
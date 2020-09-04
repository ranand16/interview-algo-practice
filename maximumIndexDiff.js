function maximumIndexDiff(array) {
    if(!array.length) return 0
    let lMin = []
    let rMax = []
    lMin[0] = array[0]
    rMax[array.length-1] = array[array.length-1]
    for (let i=1; i<array.length-1 ; i++) lMin[i] = Math.min(array[i], lMin[i-1])
    for (let j=array.length-2; j >=0 ; j--) rMax[j] = Math.max(array[j], rMax[j+1])
    console.log(lMin, rMax)
    let i = j = 0; let maxDiff = -1
    while(i<array.length && j<array.length) {
        if(lMin[i] < rMax[j]) {
            maxDiff = Math.max(maxDiff, j - i) 
            j++
        } else {
            i++
        }
    }
    return maxDiff
}
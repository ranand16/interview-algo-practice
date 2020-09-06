function findRepeatingMissing(array) {
    if(!array.length) return 0
    const n = array.length
    let totalSumUptoN = (n*(n+1))/2
    let totalSquareSumUptoN = ((2*n+1)*(n+1)*n)/6
    let missingNumber = repeatNumber = -1
    for (let i = 0; i < array.length; i++) {
        totalSumUptoN -= array[i];
        totalSquareSumUptoN -= array[i]*array[i];
    }
    missingNumber = (totalSumUptoN + (totalSquareSumUptoN/totalSumUptoN))/2
    repeatNumber = missingNumber - totalSumUptoN
    return [missingNumber, repeatNumber]
}
function maximumSumNoTwoElementsAdjacent(array) {
    if(!array.length) return 0
    let incl = excl = 0
    let temp = incl
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        temp = incl
        incl = Math.max(incl, excl+element)
        excl = temp
    }
    return incl
}
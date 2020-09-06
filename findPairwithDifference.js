function findPairwithDifference(array, x){
    if(!array.length) return -1
    let trackObj = Object.create({})
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        trackObj[element] = true
        if(trackObj.hasOwnProperty(element+x)) return [element, element+x]
        if(trackObj.hasOwnProperty(element-x)) return [element, element-x]
    }
    return [-1,-1]
}


// WORKS FOR ONLY SORTED ARRAYS test cases 
function findPairwithDifference2(array, x) {
    if(!array.length) return -1
    let i=0,j=1;
    let tempDiff = -1
    while(i<array.length && j<array.length) {
        tempDiff = Math.abs(array[j] - array[i])
        if( i!=j && tempDiff === x) return [array[i], array[j]]
        else if(tempDiff < x) j++
        else i++
    }
    return [-1,-1]
}
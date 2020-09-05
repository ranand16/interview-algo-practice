function MAXSC(array1){
    if(!array1.length) return 0
    array1.forEach(array2 => array2.sort((a,b)=>a-b))
    let maxSum = array1[array1.length-1][array1.length-1]
    let maxCurrent = maxSum
    for (let i = array1.length-2; i >=0; i--) {
        const element = array1[i]
        for (let j =  element.length-1; j >=0; j--) {
            const jelement = element[j]
            if(jelement<maxCurrent){
                maxSum+=jelement
                maxCurrent = jelement
                break
            }
        }
    }
    return maxSum
}
function checkReversingSubArrayMakeArraySorted(array){
    if(!array.length) return "NO"
    for(let i=0;i<array.length;i++){
        if((array.length/2)>i){
            if(reverseSubArrayAndCheck(array,0,2*i)) return "YES"
        } else {
            if(reverseSubArrayAndCheck(array, i-(array.length-1-i), array.length-1)) return "YES"
        }
    }
    return "NO"
}

function reverseSubArrayAndCheck(array, s, e) {
    let nArray = [...array]
    for (let i = s, j= e; i<=j ; i++, j--) {
        nArray = swapSubArray(nArray, i, j)
    }
    if(arraySorted(nArray)) return true

}

function swapSubArray(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
    return array
}

function arraySorted(array) {
    for(let i=1; i<array.length; i++) if(array[i]<array[i-1]) return false
    return true
}
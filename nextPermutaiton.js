function nextPermutaiton(array){
    if(!array.length) return 0
    let k=array.length-1; // is the index such that a[k]<a[k+1]
    while(k>=0) {
        if(array[k] < array[k+1]) break
        k--
    }
    if(k===-1) return reverseArray(array)
    for (let i = array.length-1; i>k ; i--) {
        if(array[i]>array[k]) {
            let temp = array[i]
            array[i] = array[k]
            array[k] = temp
            break
        }
    }
    return reverseArray(array, k+1, array.length-1)
}

function reverseArray(array, i=0, j=array.length-1) {
    while(i<j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        i++
        j--
    }
    return array
}
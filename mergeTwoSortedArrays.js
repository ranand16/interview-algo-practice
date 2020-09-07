function mergeTwoSortedArrays(array1, array2) {
    // if(array1.length < array2.length) return mergeTwoSortedArrays(array2, array1)
    let lastTemp = 0;
    for(let i=array2.length-1; i>=0; i--) {
        lastTemp = array1[array1.length-1]
        let j = array1.length-2 // sine this place will anyways be sacrificed so storing this in lastTemp
        while(j>=0 && array1[j]>array2[i]) {
            array1[j+1] = array1[j]
            console.log(array1)
            j--
        }
        if(j!=array1.length-2 || lastTemp > array2[i]) {
            array1[j+1] = array2[i]
            array2[i] = lastTemp
        }
        console.log(array1, array2)
    }
    return [array1, array2]
}
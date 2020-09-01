function sortArray0s1s2s(array){
    let l = m = 0; let h = array.length - 1
    while (m<=h) {
        if(array[m] === 0) {
            array = swap(array, l, m)
            l++
            m++
        }
        else if(array[m] === 1) m++
        else if(array[m] === 2) {
            array = swap(array, m, h)
            h--
        } 
    }
    return array
}

function swap(array, i, j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
    return array
}
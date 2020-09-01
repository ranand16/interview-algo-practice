function segregate0s1sArray(array) {
    let l = m = 0;
    while (m<array.length) {
        if(array[m] === 0) {
            let temp = array[m]
            array[m] = array[l]
            array[l] = temp
            m++
            l++
        }
        if(array[m] === 1) m++
    }
    return array
}
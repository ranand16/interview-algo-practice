function convertArrayIntoZigZagFashion(array) {
    let temp = null
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if((i%2 === 0 && element>array[i+1]) || (i%2!=0 && array[i]<array[i+1])) {
            temp = element
            array[i] = array[i+1]
            array[i+1] = temp
        }
    }
    return array
}
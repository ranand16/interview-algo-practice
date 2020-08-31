function rearrangePositiveNegative(array) {
    console.log(array)
    array.sort((a,b)=>a-b)
    console.log(array)
    let firstPos = 0;
    for (let j = 0; j < array.length; j++) if(array[j]>=0 && array[j-1]<0) firstPos = j
    console.log(firstPos)
    for (let index = 0; index < array.length/2; index=index+2) {
        const element = array[index];
        if(element<0 && firstPos<array.length) {
            let temp = element
            array[index] = array[firstPos++]
            array[firstPos-1] = temp 
        }
    }
    return array
}
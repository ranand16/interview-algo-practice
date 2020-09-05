function numberToFormBiggestNumber(array) {
    if(!array.length) return 0
    let maxNumb = 0
    for (let i = 0; i < array.length-1; i++) {
        const element0 = array[i];
        const element1 = array[i+1];
        maxNumb = Math.max(parseInt(element0+""+element1), parseInt(element1+""+element0))
        array[i+1] = maxNumb
    }
    return maxNumb
}
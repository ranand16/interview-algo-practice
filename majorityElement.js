function majorityElement(array) {
    if(!array.length) return 0
    let majorityElement = null;
    let majorCount = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(!majorityElement) {
            majorityElement=element 
            majorCount++
        } else if(majorityElement!==element) {
            majorCount--
            if(majorCount===0) majorityElement= null
        } else {
            majorCount++
        }
    }
    majorCount = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(majorityElement === element) majorCount++
    }
    if(majorCount > array.length/2 ) return majorityElement
    return -1
}
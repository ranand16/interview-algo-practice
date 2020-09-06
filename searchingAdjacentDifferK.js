function searchingAdjacentDifferK(array, k, n){
    if(!array.length) return 0
    let i = 0;
    while(i<array.length) {
        const element = array[i];
        if(element === n) return i
        else{
            i = i + Math.ceil(n/element)
        }
        // console.log(i)
    }
    return i
}
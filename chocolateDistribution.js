function chocolateDistribution(array, m){
    if(!array.length) return 0
    let min_diff = Number.MAX_SAFE_INTEGER;
    array.sort((a,b)=>a-b)
    console.log(array)
    for(let i=0; i+m-1<array.length; i++) {
        min_diff = (min_diff<(array[i+m-1]-array[i]))?min_diff:array[i+m-1]-array[i]
    }
    return min_diff
}
function arrayEquilibrim(array){
    let sum = 0; let left_sum = 0; let right_sum = 0; let i = 0;
    array.forEach(element => sum+=element);
    console.log(sum)
    while( i<array.length){
        left_sum += array[i-1]?array[i-1]:0
        right_sum = sum - (left_sum+array[i])
        console.log(left_sum, right_sum)
        if(left_sum===right_sum) return i;
        i++
    }
    return -1
}
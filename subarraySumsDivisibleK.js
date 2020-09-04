function subarraySumsDivisibleK(array, k){
    if(!array.length) return -1
    let cum_sum = 0
    let remainderArray = []
    let remainderCount = {0:1};
    let totCount=0;
    for (let i = 0; i < array.length; i++) {
        cum_sum += array[i]
        remainderArray[i] = ((cum_sum % k) + k) % k
    }
    for (let i = 0; i < remainderArray.length; i++) {
        const element = remainderArray[i];
        if(remainderCount.hasOwnProperty(element)) totCount += remainderCount[element]
        if(!remainderCount.hasOwnProperty(element)) remainderCount[element] = 1 
        else remainderCount[element] += 1
    }
    return totCount
}
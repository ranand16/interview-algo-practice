function stockBuySell(array){
    if(!array.length) return 0
    let bought = null; let profit = 0;
    for(let i=0;i<array.length;i++) {
        if(!array[i+1] && bought) profit += (array[i]-bought)
        if(!bought && (array[i] < array[i+1])) bought = array[i]
        else if(bought && array[i+1]<array[i]){
            profit += array[i]-bought
            bought = null
        }
    }
    return profit
}
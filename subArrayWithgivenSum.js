function subArrayWithgivenSum(array, n){
    let cur_sum = 0;
    for(let i=0,j=0; i<=array.length && j<=array.length; ){
        if(cur_sum === n) return [--i,j]
        else if(cur_sum<n) {
            cur_sum += array[i];
            i++;
        } else {
            cur_sum -=array[j];
            j++;
        }
        console.log(i,j, "cur_sum==", cur_sum)
    }
    return [-1,-1]
}
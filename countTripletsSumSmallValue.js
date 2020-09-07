function countTripletsSumSmallValue(array, s){
    if(!array.length) return []
    let j=k=0
    let ans = 0
    for (let i = 0; i < array.length-1; i++) {
        const element = array[i];
        j=i+1
        k=array.length-1
        while(j<k) {
            if(array[j] + array[k] + element >= s) k--
            else {
                ans += k-j
                j++
            }
        }
    }
    return ans
}

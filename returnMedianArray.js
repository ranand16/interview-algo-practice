function returnMedianArray(arr1, arr2){
    if(arr1.length>arr2.length) return returnMedianArray(arr2, arr1)
    console.log(arr1.length, arr2.length)
    console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
    let array1_len = arr1.length
    let array2_len = arr2.length;
    let low = 0;
    let high = array1_len
    while(low<=high){
        let partition_arr1 = (low+high)/2;
        let partition_arr2 = (array1_len+array2_len+1)/2 - partition_arr1;

        let maxleft_arr1 = partition_arr1==0?-99999:arr1[partition_arr1-1]
        let minright_arr1 = partition_arr1==array1_len?99999:arr1[partition_arr1]

        let maxleft_arr2 = partition_arr2==0?-99999:arr2[partition_arr2-1]
        let minright_arr2 = partition_arr2==array2_len?99999:arr2[partition_arr2]
        
        console.log(maxleft_arr1, minright_arr1, maxleft_arr2, minright_arr2)
        
        if(maxleft_arr1<=minright_arr2 && maxleft_arr2<=minright_arr1) {
            if((array1_len+array2_len)%2===0) return (Math.max(maxleft_arr1, maxleft_arr2)+Math.min(minright_arr1, minright_arr2))/2
            else return Math.max(maxleft_arr1, maxleft_arr2)
        } else if(maxleft_arr1>minright_arr2) {
            high = partition_arr1 - 1
        } else {
            low = partition_arr1 + 1
        }
    }
    return "Not a proper input"
}
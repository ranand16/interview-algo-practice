function minMergeOperationsForPalindrome(array){
    if(!array.length) return 0;
    let i = 0;
    let j = array.length - 1;
    let totalMerge = 0;
    while(i<=j){
        if(array[i] === array[j]) {
            i++;
            j--;
        } else if(array[i] > array[j]) {
            totalMerge++
            array[j-1] = array[j-1] + array[j]
            j--;
        } else if(array[i] < array[j]){
            totalMerge++
            array[i+1] = array[i] + array[i+1]
            i++;
        }
    }
    return totalMerge
}
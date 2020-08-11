function returnFirstIndexOfK(arr, k) {
    let low = 0, high = arr.length - 1, key = high;
    while(low<=high) {
        let mid =  low + (high - low)/2;
        if(arr[mid] >= k) {
            key = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    } 
    return key;
}

function mainreturnFirstIndexOfK(arr, k ){
    let i = returnFirstIndexOfK(arr, k)
    let j = returnFirstIndexOfK(arr, k + 1) - 1
    if(i<=j) return [i,j]
    return [-1,-1]
}
function leetcode31(arr) {
    console.log(arr)
    let len = arr.length
    let k = len - 2
    while(k>=0) {
        if(arr[k]<arr[k+1]) break
        k--
    }
    console.log(k)
    if(k===-1) return reverseArray(arr)
    let l=arr.length-1
    for(; l>k; l--){
        if(arr[k]<arr[l]) {
            // swap k and l
            let temp = arr[k]
            arr[k] = arr[l]
            arr[l] = temp
            break
        }
    }
    console.log(k+1, arr.length-1)
    console.log(arr)
    // reverse from k+1 to arr.length
    return reverseArray(arr, k+1 )
}

function reverseArray(arr, i=0 ) {
    console.log(i, arr.length-1)
    let j=arr.length-1
    while(i<j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;j--;
    }
    return arr
}
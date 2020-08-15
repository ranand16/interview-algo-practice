function leetcode31(arr) {
    let len = arr.length
    let k = len - 2
    for(let i=0; i<arr.length; i++) {
        if(arr[k]<arr[k+1]) {
            k=i
            break
        }
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
        }
    }
    // reverse from k+1 to arr.length
    return reverseArray(arr, k+1 ,l)
}

function reverseArray(arr, i=0, j=arr.length) {
    while(i<j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}
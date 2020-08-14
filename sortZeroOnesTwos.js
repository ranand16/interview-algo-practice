function sortZeroOnesTwos(arr) {
    if(!arr.length) return []
    let low=0, high=arr.length-1, mid=0;
    while(mid<=high){
        switch(arr[mid]) {
            case 0:
                arr = swap(arr, low, mid)
                low++; mid++;
            break;
            case 1: 
                mid++;
            break;
            case 2: 
                arr = swap(arr, high, mid)
                high --
            break;
        }
    }
    return arr
}
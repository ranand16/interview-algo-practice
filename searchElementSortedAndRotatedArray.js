function searchElementSortedAndRotatedArray(array, n){
    const arrayPivot = pivot(array, 0, array.length-1);
    // console.log(arrayPivot);
    if(n===array[arrayPivot]) return arrayPivot
    else if(n<array[arrayPivot] && n>=array[0]) return binarySearch(array, 0, arrayPivot, n)
    else return binarySearch(array, arrayPivot+1, array.length - 1, n)
}

function pivot(array, left, right) {
    let mid = 0; // Number.MIN_SAFE_INTEGER
    while(left<=right) {
        mid = (right !== array.length-1)?Math.floor((left+right)/2):Math.ceil((left+right)/2)
        // console.log(mid)
        if((array[mid] > array[mid-1] && array[mid] > array[mid+1]) || (mid-1<0 && array[mid] > array[mid+1]) || ((mid+1)>array.length-1 && array[mid] > array[mid-1])) return mid
        else if(array[mid] > array[left]) return pivot(array, mid+1, right)
        else if(array[mid] < array[left]) return pivot(array, left, mid) 
    }
}

function binarySearch(array, left, right, numb) {
    // console.log(array, left, right, numb)
    let mid = 0; // Number.MIN_SAFE_INTEGER
    while(left<=right) {
        mid = (right !== array.length-1)?Math.floor((left+right)/2):Math.ceil((left+right)/2)
        // console.log(mid)
        if(array[mid] > numb) return binarySearch(array, left, mid, numb)
        else if(array[mid] < numb) return binarySearch(array, mid+1, right, numb)
        else return mid
    }
}
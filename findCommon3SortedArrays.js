function findCommon3SortedArrays(arr1, arr2, arr3) {
    let l=m=n=0
    let ans = new Array()
    while(l<arr1.length && m<arr2.length && n<arr3.length) {
        if((arr1[l] < arr3[n] && arr1[l] < arr2[m]) || (arr1[l] < arr3[n] === arr2[m])) {
            l++
        } else if(arr2[m] < arr1[l] && arr2[m] < arr3[n] || (arr2[m] < arr1[l] === arr3[n])) {
            m++
        } else if(arr3[n] < arr2[m] && arr3[n] < arr1[l] || (arr3[n] < arr1[l] === arr2[m])) {
            n++
        } else {
            ans.push(arr1[l])
            l++
            m++
            n++
        } 
        console.log(l, m, n)
    }
    return !ans.length?null:ans
}
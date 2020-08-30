function findKPairsWithSmallestSums(array1, array2, k) {
    if(array1[0]>array2[0]) return findKPairsWithSmallestSums(array2, array1)
    let i=0, j=0, res = [];
    while((i+1)*(j+1)<=k) {
        if(j>=array2.length) {
            i++;
            j=0;
        } else {
            res.push([array1[i], array2[j]])
            j++
        }
    }
    return res
}
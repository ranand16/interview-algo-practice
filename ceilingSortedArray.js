function ceilingSortedArray(array, x){
    if(!array.length) return [-1,-1]
    let l=0, h=array.length
    let m, ceilNumb = 9999, floorNumb = -1
    while(l<h) {
        m = l+Math.floor((h-l)/2)
        if(array[m] <= x) {
            floorNumb = Math.max(floorNumb, array[m])
            l = m+1
        } 
        if(array[m] >= x) {
            ceilNumb = Math.min(ceilNumb, array[m])
            h = m
        }
    }
    return [floorNumb, ceilNumb]
}
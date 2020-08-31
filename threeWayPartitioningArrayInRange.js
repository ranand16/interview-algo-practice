function threeWayPartitioningArrayInRange(array, lowVal, highVal){
    let l = 0, m = 0; h = array.length-1;
    while(m<=h){
        if(array[m]<lowVal) {
            array = swap(array, l, m);
            l++;
            m++;
        }
        else if(array[m]>highVal) {
            array = swap(array, m, h);
            h--;
        }
        else m++;
        console.log(array, l, m, h)
    }
    
    return array
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j]
    array[j] = temp;
    return array
}
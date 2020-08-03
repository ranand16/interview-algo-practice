function returnCommonElementsArray(array1, array2){
    console.log(array1, array2)
    if(array1.length<=0 || array2.length<=0) return []
    let x=0, y=0, result=[];
    while(x<array1.length && y<array2.length){
        if(array1[x] === array2[y]) {
            result.push(array1[x]);
            x++; 
            y++; 
        } else if(array1[x]<array2[y]) { x++; }
        else { y++; }
    }
    return result
}
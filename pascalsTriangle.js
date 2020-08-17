function pascalsTriangle(n){
    let result = [];
    for(let i=0; i<n; i++) {
        console.log(i)
        let subArray = (i<2)?generateNewSubArray(i):generateNewSubArray(i, result[i-1]);
        result.push(subArray)
    }
    return result
}

function generateNewSubArray(x, prevAr=[]){
    let subAr = [];
    console.log(x)
    for(let j=0; j<x; j++) {
        if(j===0 || j===x-1) subAr.push(1)
        else subAr.push(prevAr[j]+prevAr[j-1])
    }
    console.log(subAr)
    return subAr
}
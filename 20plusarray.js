// Question 1
function missing1ton(arr){
    if(arr.length<=0) return null
    let missingInt = [];
    for(let i=1; i<=arr.length+1; i++){
        // console.log(arr.indexOf(i))
        if(arr.indexOf(i)===-1) return i
    }
}

//Question 1 
function missing1tonSecondWay(arr){
    if(arr.length<=0) return null
    let origSumArr = ((arr.length+2)*(arr.length+1))/2
    let arrSum = 0;
    for(let i=0; i<arr.length; i++) arrSum = arrSum + arr[i];
    // console.log(origSumArr, " --- ", arrSum);
    return origSumArr - arrSum;
}
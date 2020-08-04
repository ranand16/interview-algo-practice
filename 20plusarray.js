// Question 1
function missing1ton(arr){
    if(arr.length<=0) return null
    let missingInt = [];
    for(let i=1; i<=arr.length+1; i++){
        // console.log(arr.indexOf(i))
        if(arr.indexOf(i)===-1) return i
    }
}

//Question 1 second method
function missing1tonSecondWay(arr){
    if(arr.length<=0) return null
    let origSumArr = ((arr.length+2)*(arr.length+1))/2
    let arrSum = 0;
    for(let i=0; i<arr.length; i++) arrSum = arrSum + arr[i];
    return origSumArr - arrSum;
}

// Question 2
function findDup(arr){
    if(arr.length<=0) return []
    let content = new Map();
    let dup = new Array();
    for(let i=0; i<arr.length; i++) {
        if(content.has(arr[i]) && content.get(arr[i])===1) { dup.push(arr[i]); content.set(arr[i], content.get(arr[i])+1) }
        else if(content.has(arr[i])) content.set(arr[i], content.get(arr[i])+1);
        else if(!content.has(arr[i])) content.set(arr[i], 1);
    }
    return dup
}

// Question 3
function smallestLargest(arr){
    console.log(arr);
    if(!arr.length) return [null, null]
    arr.sort((a,b)=>a-b)
    return [arr[0], arr[arr.length-1]]
}
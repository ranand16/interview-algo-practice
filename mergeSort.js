let count =0;
function countInversionMergeSort(array){
    if(!array.length) return 0
    return numberOfInversions(array)
    // return count 
}

function numberOfInversions(arr){
    if(arr.length <= 1) return arr;
    let halfPoint = Math.ceil(arr.length / 2);
    let firstHalf = numberOfInversions(arr.splice(0, halfPoint));
    let secondHalf = numberOfInversions(arr.splice(-halfPoint));
    return mergeAndCompute(firstHalf, secondHalf);
}

function mergeAndCompute(arr1, arr2){
    let result = []; // the array to hold results.
    let i = 0; 
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}
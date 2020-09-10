function radixSort(array) {
    // let retArray = new Array();
    let maxNumb = Number.MIN_SAFE_INTEGER
    array.forEach(element => maxNumb = Math.max(element, maxNumb));
    for (let place = 1; Math.floor(maxNumb/place) > 0; place*=10) {
        array = countSortRadix(array, place)
    }
    return array
}

function countSortRadix(array, place){
    let countArray = new Array(10); 
    let resArray = new Array(array.length)
    for (let i=0; i<10; ++i) countArray[i] = 0;
    array.forEach((element,i) => countArray[Math.floor(element/place)%10]++);
    console.log("--------------------------------------------------")
    console.log(countArray)
    for (let i = 1; i < countArray.length; i++) countArray[i] += countArray[i-1]
    console.log(countArray, array)
    array.forEach((element,i) => {
        countArray[Math.floor(element/place)%10]--
        resArray[countArray[Math.floor(element/place)%10]] = element
    });
    console.log(resArray)
    console.log("--------------------------------------------------")
    return resArray
}
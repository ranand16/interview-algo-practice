function countSort(array){
    let countArray = new Array(10); 
    let resArray = new Array(array.length)
    for (let i=0; i<10; ++i) countArray[i] = 0;
    array.forEach(element => countArray[element]++);
    console.log(countArray)
    for (let i = 1; i < countArray.length; i++) countArray[i] += countArray[i-1]
    console.log(countArray, array)
    array.forEach((element,i) => {
        countArray[element]--
        resArray[countArray[element]] = element
    });
    console.log(resArray)
}
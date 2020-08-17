function mergeUsingGap(arr1, arr2){
    console.log(arr1, arr2)
    let len1 = arr1.length, len2 = arr2.length
    let totLen = len1 + len2
    let gap = totLen/2
    while(gap>0) {
        console.log(gap, "-----start")
        let i = 0, j = i + gap
        console.log(i, j)
        while(j<len1 + len2) {
            let num1 = (i>len1-1)?arr2[i%len1]:arr1[i]
            let num2 = (j>len1-1)?arr2[j%len1]:arr1[j];
            console.log("gap -- ", gap, "nums --", num1, " -- ", num2)
            if( num1 >= num2 ) {
                let temp = num1;
                if((i>len1-1)) arr2[i%len1] = num2
                else arr1[i] = num2
                if(j>len1-1) arr2[j%len1] = temp
                else arr1[j] = temp
            }
            i++
            j++
        }
        gap = Math.floor(gap / 2)
        console.log(arr1, arr2)
        console.log(gap, "-----end")
    }
    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)
    return {arr1, arr2}
}
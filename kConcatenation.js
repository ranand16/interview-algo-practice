function kConcatenation(array, n){
    if(!array.length) return 0
    let meh=0; msf = Number.NEGATIVE_INFINITY; let j=0;
    const num = (array.length)*n
    console.log(num)
    for(let i=0; i<num ;i++ ){
        j = (i%array.length)
        meh = meh + array[j]
        if(meh < array[j]) {
            meh = array[j]
            console.log("i==", i, " ele==", array[j])
        }
        if(msf < meh) msf = meh
    }
    return msf
}
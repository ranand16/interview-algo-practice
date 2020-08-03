function returnRotationAway(array1, array2){
    if(array1.length !== array2.length) return false
    const key = array2.indexOf(array1[0]);
    console.log(key)
    if(key === null) return false 
    for(let i=0; i<array1.length; i++) {
        let j = Math.abs(key + i)%array2.length
        console.log(i, j)
        if(array1[i] !== array2[j]) return false
    }
    return true
}
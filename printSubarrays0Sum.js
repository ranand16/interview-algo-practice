function printSubarrays0Sum(array) {
    if(!array.length) return []
    const out = new Array()
    const sumIndexObj = {}
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let sumIndex = new Array()
        const element = array[i];
        sum += element
        if(sum === 0) out.push([0, i])
        if(sumIndexObj.hasOwnProperty(sum)){
            sumIndex = sumIndexObj[sum]
            for (let j = 0; j < sumIndex.length; j++) {
                const element = sumIndex[j];
                out.push([element+1, i])
            }
        } else sumIndex = []
        sumIndex.push(i)
        sumIndexObj[sum] = sumIndex
        console.log(sum, sumIndexObj[sum])

    }
    for(let j = 0; j< out.length; j++) {
        console.log(out[j])
    }
    return out
}
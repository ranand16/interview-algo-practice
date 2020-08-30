function pairWithGivenDiff(array, k){
    let nHash = {}, res = [];
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        nHash[element] = nHash.hasOwnProperty(element)?++nHash[element]:1
        nHash[Math.abs(element-k)] = nHash.hasOwnProperty(Math.abs(element-k))?++nHash[Math.abs(element-k)]:1
        nHash[Math.abs(element+k)] = nHash.hasOwnProperty(Math.abs(element+k))?++nHash[Math.abs(element+k)]:1
        console.log(element-k, element+k)
    }
    for (let j = 0; j < Object.keys(nHash).length; j++) {
        if(nHash[Object.keys(nHash)[j]]===2) res.push(Object.keys(nHash)[j])
    }
    console.log(nHash, res)
    return res.length===2?res:"No such pair"
}
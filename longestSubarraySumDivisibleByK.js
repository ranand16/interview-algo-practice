function longestSubarraySumDivisibleByK(array, k) {
    if(!array.length) return 0
    let cum_sum = 0;
    let remainder = [];
    let firstIndexRemaider = {}
    let maxLen = -1
    for (let i = 0; i < array.length; i++) {
        cum_sum += array[i]
        remainder[i] = ((cum_sum % k) + k ) % k
    }
    console.log(remainder)
    for (let i = 0; i < remainder.length; i++) {
        const element = remainder[i];
        if(element === 0) maxLen = i+1
        else if(!firstIndexRemaider.hasOwnProperty(element)) firstIndexRemaider[element] = i
        else maxLen = Math.max(maxLen, i-firstIndexRemaider[element])
    }
    return maxLen
}
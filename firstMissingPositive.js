// This problem was asked by Stripe.
// Given an array of integers, find the first missing positive integer in linear time and constant space. 
// In other words, find the lowest positive integer that does not exist in the array. 
// The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

/**
 * 
 * @param {array having all the values} array 
 */
function firstMissingPositive(array){
    if(array.length<1) return 1
    array.sort((a,b)=>a-b)
    console.log(array)
    let varObj = {ln: null, hn: null}
    for(let i=0; i<array.length; i++){
        if(array[i]<=0) continue
        if(!varObj["ln"]) 
        varObj["ln"] = array[i]
    }

}
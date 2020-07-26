// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, pIe -> true 
// pales. pale -> true 
// pale. bale -> true 
// pale. bake -> false 

function oneAway(s1, s2){
    if(s1==="" || s2==="" || !s1 || !s2) return "Invalid input";
    let greterlen = false
    const lendiff = Math.abs(s1.length - s2.length);
    const leng = s1.length>s2.length?s1.length:s2.length;
    greterlen = s1.length>s2.length?"s1":s1.length<s2.length?"s2":false
    // check if the length difference is 0 or 1
    if(lendiff !== 1 && lendiff !== 0) return "Not one away 1" 
    let charObj = {};
    console.log(greterlen, lendiff)
    const looplen = greterlen?leng-1:leng
    for(let i=0; i<looplen; i++){
        if(!charObj[s1[i]]) charObj[s1[i]] = 1 
        else ++charObj[s1[i]]
        if(!charObj[s2[i]]) charObj[s2[i]] = 1 
        else ++charObj[s2[i]]
    }
    if(greterlen==="s1"){
        if(!charObj[s1[leng-1]]) charObj[s1[leng-1]] = 1 
        else ++charObj[s1[leng-1]]
    } else if(greterlen==="s2"){
        if(!charObj[s2[leng-1]]) charObj[s2[leng-1]] = 1 
        else ++charObj[s2[leng-1]]
    }
    console.log(Object.assign({}, charObj))
    let oneOdd = 0;
    for(let j=0; j<Object.keys(charObj).length; j++){
        let letter = Object.keys(charObj)[j];
        if(charObj[letter]%2 !==0 && oneOdd>=2) return "Not one away 2"
        if(charObj[letter]%2 !==0 && oneOdd<=2) ++oneOdd
    }
    console.log(lendiff, oneOdd)
    return (lendiff && oneOdd)?"One away":(!oneOdd && !lendiff)?"Zero away":"One away 2"
}
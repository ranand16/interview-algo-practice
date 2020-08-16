function leetcode5(str){
    console.log(str)
    let start = 0;let end=0;
    for(let i=0; i< str.length; i++) {
        console.log("------START------")
        let len1 = palindrome(str, i, i)
        let len2 = palindrome(str, i, i+1)
        let len = Math.max(len1, len2)
        if(end-start < len) {
            // console.log(Math.abs((len-1)/2) , len/2)
            start = i-(Math.floor((len-1)/2))
            end = i+(Math.floor(len/2))
        }
        console.log(end, start ,"--------", str[i], str[i+1], i, len1, len2, len)
        console.log("------END------")
    }
    return str.substr(start, end)
}

function palindrome(string, i, j){
    // console.log(string[i], string[j])
    while(string[i]===string[j] && i>=0 && j<=string.length-1){
        // console.log(i, j, string[i], string[j])
        i--;
        j++
    }
    // console.log(i, j, j-i-1)
    return j-i-1
 }
function maximumDifferenceLargerAfterSmaller(array){
    if(!array.length) return 0
    let min_SF = Number.MAX_SAFE_INTEGER
    max_SF = max_diff_SF = Number.MIN_SAFE_INTEGER;
    array.forEach(element => {
        if(min_SF>=element) min_SF = max_SF = element
        else if(min_SF<element && max_SF<element) { 
            max_SF = element
            max_diff_SF = Math.max(max_diff_SF, element - min_SF)
        }
    });
    return max_diff_SF
}
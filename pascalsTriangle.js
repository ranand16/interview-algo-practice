function pascalsTriangle(n){
    let result = [];
    for(let i=0; i<n; i++) {
        result[i] = [];
        result[i][0] = result[i][i] = 1
        for(let j=1; j<i; j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j]
        }
    }
    return result
}
function longestConsectiveBranch(n){
    if(!n) return 0
    // console.log(n.val)
    return Math.max(consectiveBranch(n.left, n.val, 1), consectiveBranch(n.right, n.val, 1))
}

function consectiveBranch(n, prev, length){
    if(!n) return length
    if(n.val === prev + 1) {
        // console.log(" previous ", n.val)
        let left = consectiveBranch(n.left, n.val, length+1)
        let right = consectiveBranch(n.right, n.val, length+1)
        return Math.max(left, right)
    } else {
        // console.log(" new ", n.val)
        let left = consectiveBranch(n.left, n.val, 1)
        let right = consectiveBranch(n.right, n.val, 1)
        return Math.max(left, right, length)
    }
}
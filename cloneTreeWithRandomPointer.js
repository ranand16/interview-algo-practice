function cloneTreeWithRandomPointer(tree) {
    let map = {}
    let clonedtree = cloneLeftRight(tree, map)
}

function cloneLeftRight(tree, map) {
    if(!tree) return null
    const newNode = TreeNodeRandom(tree.val)
    map[tree] 
    tree.left?cloneLeftRight(tree.left):null
    tree.right?cloneLeftRight(tree.right):null

    return tree
}
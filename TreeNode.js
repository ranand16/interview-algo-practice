
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    return {
        val : val===undefined ? 0 : val,
        left : left===undefined ? null : left,
        right : right===undefined ? null : right
    }
}

function createTree1(){return TreeNode(1, TreeNode( 2, TreeNode(4, TreeNode(6, null, null), null), TreeNode(5, null, TreeNode(7, null, null)) ), TreeNode(3, null, TreeNode(8, null, TreeNode(9, null, null))))}
function createTree2() {return TreeNode(1, TreeNode( 2, TreeNode(3, null, null), TreeNode(4, null, null) ), TreeNode(5, null,  null))}
function createTree3() {return TreeNode(1, TreeNode( 2, TreeNode(4, null, null), TreeNode(5, null, null) ), TreeNode(3, null,  null))}

function preOrderTraversal(root){
    if(!root) return null
    console.log(root.val)
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)
}

function inOrderTraversal(root){
    if(!root) return null
    inOrderTraversal(root.left)
    console.log(root.val)
    inOrderTraversal(root.right)
}

function postOrderTraversal(root){
    if(!root) return null
    postOrderTraversal(root.left)
    postOrderTraversal(root.right)
    console.log(root.val)
}

//  ---------TREE 1---------
//             1       
//         2         3
//     4       5         8
// 6               7         9

//  ---------TREE 2---------
//              1
//         2        5
//      3     4


//  ---------TREE 3---------
//              1
//         2        3
//      4     5
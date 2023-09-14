// https://leetcode.com/problems/binary-tree-inorder-traversal/


// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (root?.val === null || root?.val === undefined) return []
  if (root?.left && root?.right && root?.val !== null) {
      return [inorderTraversal(root.left), root.val, inorderTraversal(root.right)].flat()
  } else if (root?.left && root?.val !== null) {
      return [inorderTraversal(root.left), root.val].flat()
  } else if (root?.right && root?.val !== null) {
      return [root?.val, inorderTraversal(root.right)].flat()
  } else {
    return [root?.val]
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root,values,stack) {
    if(typeof stack == 'undefined')
    {
      stack=[];
      values=[];
      values.push([root.val],[root.left.val,root.right.val]);
      if(root.right != undefined)
        stack.push(root.right);
      if(root.left != undefined)
        stack.push(root.left);
      levelOrderBottom(root,values,stack)
    }
    else
    {
        root=stack.pop()
        console.log(root);
        if(root.right != undefined)
          values.push(root.right);
        if(root.left != undefined)
          values.push(root.left);
        if(root.left != undefined)
            stack.push(root.left);
        if(root.right != undefined)
            stack.push(root.right);
        levelOrderBottom(root,values,stack)
    }



};

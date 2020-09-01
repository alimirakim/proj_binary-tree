class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


class BST {
  constructor() {
    this.root = null
  }

  insert(val, root = this.root) { // MIRA Not sure yet
    const newNode = new TreeNode(val)
    if (!root) {
      this.root = newNode
      return;
    }

    if (val < root.val) {
      if (!root.left) root.left = newNode
      else this.insert(val, root.left)
    } else {
      if (!root.right) root.right = newNode
      else this.insert(val, root.right)
    }
  }

  // root: value, leftnodevalue, rightnodevalue
  // 1. check if value is less/greater than root's value
  // 1.5. check if there is a leftnode to  compare to. if not, then set new leftnode.
  // 2. if less than rootval, compare if less/greater than leftnode's value
  // 2.5 check if rightnode exists to compare to. if not, set new rightnode.
  // 3. if greater than rootval, compare if less/greater than rightnode's value
  // 4. repeat with left/right node

  searchRecur(val, root = this.root) {
    if (!root) return false
    if (val === root.val) return true
    else if (val < root.val) return this.searchRecur(val, root.left)
    else if (val > root.val) return this.searchRecur(val, root.right)
  }

  searchIter(value) {
    if (!this.root) return false
    if (value === this.root.val) return true

    let currentNode = this.root
    let count = 0
    
    while (currentNode) {
      count++
      console.log("HI JUMMY", count)
      if (currentNode.val = value) return true
      else if (currentNode.val < val) currentNode = currentNode.right
      else currentNode = currentNode.left
      console.log("currentNode", currentNode)
    }
    return false
    
    
    
    // tree.insert(10);
    // tree.insert(5);
    // tree.insert(16);
    // tree.insert(1);
    // tree.insert(7);
    // tree.insert(16);
    // expect(tree.searchIter(10)).to.equal(true);
    // expect(tree.searchIter(7)).to.equal(true);
    // expect(tree.searchIter(16)).to.equal(true);
    
    
    // assign current node as the root node
    // if current node's value = target value, return true
    // if value >, current node = left
    // if value <clear, current node right
    // REPEAT THE LOOP
    // if none found after while loop, return false
    
    // while there is a next node to check
    // check the next node
    // for each node, if the value = value, return true
    // if node's value >, currentNode change to other one
    // otherwise < currentnode change to other other one.
  }
}


// let tree = new BST();
//     tree.insert(10);    // rootnode {val:10 leftnode:5 rightnode:16}
// rootnode-leftnode 3
// rootnode-leftnode 1
//     tree.insert(5);     // rootnode-leftnode 5
//     tree.insert(16);    // rootnode-rightnode 16
//     tree.insert(1);     // 
//     tree.insert(7);     //
//     tree.insert(16);    //
//     expect(tree.root.val).to.equal(10);
//     expect(tree.root.left.val).to.equal(5);
//     expect(tree.root.right.val).to.equal(16);
//     expect(tree.root.left.left.val).to.equal(1);
//     expect(tree.root.left.right.val).to.equal(7);
//     expect(tree.root.right.right.val).to.equal(16);

module.exports = {
  TreeNode,
  BST
};

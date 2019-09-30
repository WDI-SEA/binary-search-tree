// A node in a Binary Tree has data, left, and right pointers
// The left and right pointers are intialized as null
class BinaryNode {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  // When a new Tree is initialized, it has a null root property
  // This means the Tree begins as empty
  constructor() {
    this.root = null;
  }

  // Insert creates a new Node from the data passed in and adds it to the tree
  // If the data is already in the tree, do not insert it again
  insert(data) {
    const newNode = new BinaryNode(data);
    if (!this.root) {
        this.root = newNode;
        return this;
    }

    let walker = this.root;
    while (walker){
      if (data < walker.data) {
        if (!walker.left) {
          walker.left = newNode;
          return this;
        }
        else {
          walker = walker.left
        }
      }
      else if (data > walker.data) {
        if (!walker.right) {
          walker.right = newNode;
          return this;
        }
        else {
          walker = walker.right;
        }
      }
    }
  }

  // Search the Tree for a node with the given value
  // if the node exists, return it
  // if the node doesn't exist, return false
  search(val) {
    if (!this.root) {
      return false;
    }

    let walker = this.root;
    while (walker) {
      if (val < walker.data) {
        walker = walker.left;
      }
      else if(val > walker.data) {
        walker = walker.right;
      }
      else {
        return walker;
      }
    }

    return false;
  }

  // Calculate the number of nodes in the tree, starting from the given node
  // If no node is provided, we can use the root as a sensible default
  size(node=this.root) {
    let count = 0;
    function rSize(node) {
      if (node) {
        count++;
        rSize(node.left);
        rSize(node.right);
      }
    }
    rSize(node);
    return count;
  }

  // Return the maximum data value stored in the tree
  getMax() {
    if (!this.root) {
      return null;
    }
    let walker = this.root;
    while (walker.right) {
      walker = walker.right;
    }
    return walker.data;
  }

  // Calculate the maximum amount of nodes in any one path from the given node
  // If not given a specific node, default to using the root node
  height(node=this.root) {
    let maxHeight = 0;
    function rHeight(node, height=1) {
      if (node) {
        if (height > maxHeight) {
          maxHeight = height;
        }
        rHeight(node.left, height+1);
        rHeight(node.right, height+1);
      }
    }
    rHeight(node);
    return maxHeight;
  }
}

// Some Test Code
let myBst = new BinaryTree();
myBst.insert(5);
myBst.insert(2);
myBst.insert(1);
myBst.insert(3);
myBst.insert(10);
myBst.insert(7);
myBst.insert(6);
myBst.insert(9);
myBst.insert(8);
myBst.insert(4);
console.log('Height', myBst.height());
console.log('Size', myBst.size());
console.log('Max Val', myBst.getMax());

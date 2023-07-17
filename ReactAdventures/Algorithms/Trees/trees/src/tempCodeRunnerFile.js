  // Define the Node class
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // Define the BinarySearchTree class
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    // Insert a value into the BST
    insert(value) {
      const newNode = new Node(value);

      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    // Search for a value in the BST
    search(value) {
      return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
      if (node === null) {
        return false;
      }

      if (value < node.value) {
        return this.searchNode(node.left, value);
      } else if (value > node.value) {
        return this.searchNode(node.right, value);
      } else {
        return true;
      }
    }

    // Traverse the BST in-order (ascending order)
    inOrderTraversal(callback) {
      this.inOrderTraversalNode(this.root, callback);
    }

    inOrderTraversalNode(node, callback) {
      if (node !== null) {
        this.inOrderTraversalNode(node.left, callback);
        callback(node.value);
        this.inOrderTraversalNode(node.right, callback);
      }
    }
  }

  // Usage example:
  const bst = new BinarySearchTree();

  bst.insert(8);
  bst.insert(3);
  bst.insert(10);
  bst.insert(1);
  bst.insert(6);
  bst.insert(14);
  bst.insert(4);
  bst.insert(7);
  bst.insert(13);

  console.log("In-order traversal:");
  bst.inOrderTraversal(value => console.log(value));

  console.log("Search 6:", bst.search(6)); // Output: true
  console.log("Search 11:", bst.search(11)); // Output: false
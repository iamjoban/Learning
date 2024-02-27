class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  #root = null;
  constructor() {}

  isEmpty() {
    return this.#root === null;
  }

  pushData(root, value) {
    if (root === null) {
      console.log("im");
      return new Node(value);
    }

    if (value < root.value) {
      root.left = this.pushData(root.left, value);
    }

    if (value > root.value) {
      root.right = this.pushData(root.right, value);
    }
    return root;
  }

  push(value) {
    this.#root = this.pushData(this.#root, value);
  }

  inOrderTraverse(root) {
    if (root != null) {
        this.inOrderTraverse(root.left);
        console.log(root.value);
        this.inOrderTraverse(root.right);
    }
  }

  inOrder() {
    this.inOrderTraverse(this.#root);
  }
}

let tree = new Tree();
tree.push(1);
tree.push(2);
tree.push(0);
console.log(tree);
tree.inOrder();

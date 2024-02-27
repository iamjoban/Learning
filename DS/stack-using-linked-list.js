class StackNode {
  constructor(value) {
    this.value = value;
  }
}

class StackList {
  #root = null;

  push(num) {
    let newNode = new StackNode(num);
    if (this.#root === null) {
      this.#root = newNode;
    } else {
      let temp = this.#root;
      this.#root = newNode;
      newNode.next = temp;
    }
  }

  pop() {
    if (this.#root !== null) {
      let root = this.#root;
      console.log("Element to be del -> ", root.value);
      this.#root = root.next;
    }
  }

  print() {
    let root = this.#root;
    while (root) {
      console.log(root.value);
      root = root.next;
    }
  }

  isEmpty() {
    return this.#root === null;
  }

  peak() {
    let root = this.#root;
    return root.value;
  }
}

let stackList = new StackList();
stackList.push(10);
stackList.push(20);
stackList.print();
stackList.pop();
stackList.print();

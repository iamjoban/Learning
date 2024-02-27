// Implemented queue using stack data stucture
// Stack can either be implement as an array or Linked list
// IN this ex. I am going to use Linked list

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
      let value = root.value;
      //console.log("Element to be del -> ", value);
      this.#root = root.next;
      return value;
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
    return this.#root == null;
  }

  peak() {
    let root = this.#root;
    return root.value;
  }
}

class Queue {
  #stack1 = null;
  #stack2 = null;
  constructor() {
    this.#stack1 = new StackList();
    this.#stack2 = new StackList();
  }

  enqueue(num) {
    while (!this.#stack1.isEmpty()) {
      this.#stack2.push(this.#stack1.pop());
    }
    this.#stack1.push(num);
    while (!this.#stack2.isEmpty()) {
      this.#stack1.push(this.#stack2.pop());
    }
  }

  print() {
    this.#stack1.print();
  }

  dequeue() {
    this.#stack1.pop();
  }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();

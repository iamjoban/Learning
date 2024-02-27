class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularQueue {
  #front = null;
  #rear = null;

  constructor(size) {
    this.size = size;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (this.#front === null) {
      this.#front = newNode;
    } else {
      newNode.next = this.#front;
      this.#rear.next = newNode;
    }

    this.#rear = newNode;
  }

  dequeue() {
    if (!this.isEmpty()) {
      console.log("Noting to remove");
      return;
    }
    let temp = this.#front;
    this.#front = this.#front.next;
    this.#rear.next = this.#front;
    temp.next = null;
  }

  print() {
    if (!this.isEmpty()) {
      return;
    }
    let temp = this.#front;
    while (temp.next != this.#front) {
      console.log(temp.data);
      temp = temp.next;
    }
    console.log(temp.data);
  }

  isEmpty() {
    return this.#front;
  }
}

let queue = new CircularQueue(5);
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
console.log(queue);
queue.print();
queue.dequeue();
console.log(queue);
queue.print();

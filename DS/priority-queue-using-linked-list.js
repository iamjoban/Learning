class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    this.next = null;
  }
}
class PriorityQueue {
  #head = null;

  isEmpty() {
    return this.#head === null;
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    if (this.isEmpty()) {
      this.#head = newNode;
      return;
    }

    let start = this.#head;
    let tempNode = this.#head;
    let i = 0;
    while (true) {
      if (!start) {
        break;
      }
      if (priority < start.priority) {
        tempNode = start;
        start = start.next;
        i++;
      } else {
        break;
      }
    }

    if (i == 0) {
      newNode.next = tempNode;
      this.#head = newNode;
    } else {
      newNode.next = tempNode.next;
      tempNode.next = newNode;
    }
  }

  dqueue() {
    if (this.isEmpty()) {
      console.log("Empty");
    }
    let temp = this.#head;
    this.#head = this.#head.next;
    temp.next = null;
  }
}

let queue = new PriorityQueue();
queue.enqueue(1, 1);
queue.enqueue(2, 2);
queue.enqueue(0, 0);
queue.enqueue(4, 4);
queue.enqueue(3, 3);
console.log(queue);
queue.dqueue();
console.log(queue);

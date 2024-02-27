class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  #head = null;

  isEmpty() {
    return this.#head === null;
  }

  push(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.#head = node;
      return;
    }
    let start = this.#head;
    while (start.next != null) {
      start = start.next;
    }
    start.next = node;

    //create loop
    if (value === 8) {
      node.next = this.#head.next;
    }
  }

  detectLoop() {
    let set = new Set();
    let start = this.#head;
    let loopNode = null;
    while (start != null) {
      if (set.has(start)) {
        loopNode = start;
        break;
      }
      set.add(start);
      start = start.next;
    }

    return loopNode;
  }

  findLegthOfLoop() {
    let loopNode = this.detectLoop();
    if (!loopNode) {
      return 0;
    }
    let temp = loopNode;
    let count = 1;
    while (temp.next !== loopNode) {
      count++;
      temp = temp.next;
    }

    return count;
  }
}

let list = new LinkedList();
list.push(5);
list.push(6);
list.push(7);
list.push(8);
console.log(list);
let isLoopAvailable = list.detectLoop();
console.log("isLoopAvailable->", !!isLoopAvailable);
let lengthOfLoop = list.findLegthOfLoop();
console.log("lengthOfLoop->", lengthOfLoop);

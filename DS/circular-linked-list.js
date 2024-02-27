//Queue using circular linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  #head = null;

  isEmpty() {
    return this.#head === null;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.#head = newNode;
      newNode.next = this.#head;
      return;
    }
    let temp = this.#head;
    newNode.next = temp.next;
    temp.next = newNode;
    this.#head = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("No data");
      return;
    }
    if (this.#head === this.#head.next) {
      this.#head = null;
      return;
    }
    this.#head.next = this.#head.next.next;
  }

  traver() {
    let temp = this.#head;
    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

let list = new CircularLinkedList();
list.push(15);
list.push(6);
//   list.push(10);
//   list.push(30);
//   list.push(90);
//   list.push(25);
//   list.traver();
list.pop();
console.log(list);

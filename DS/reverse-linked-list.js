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
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.#head = newNode;
      return;
    }
    let temp = this.#head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  traver() {
    let temp = this.#head;
    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  reverse() {
    let current = this.#head;
    let prev = null;
    while (current != null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.#head = prev;
  }
}

let list = new LinkedList();
list.push(15);
list.push(6);
list.push(10);
list.push(30);
list.push(90);
list.push(25);
list.traver();
list.reverse();
console.log("-------------------------------------");
//console.log(list);
list.traver();

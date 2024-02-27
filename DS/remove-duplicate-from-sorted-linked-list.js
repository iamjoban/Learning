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

  removeDuplidate() {
    let temp = this.#head;
    while (temp !== null) {
      let curr = temp;
      while (curr !== null) {
        if (temp.value == curr.value) {
          curr = curr.next;
        } else {
          break;
        }
      }
      temp.next = curr;
      temp = temp.next;
    }
  }
}

let list = new LinkedList();
list.push(5);
list.push(6);
list.push(6);
list.push(7);
list.push(7);
list.traver();
list.removeDuplidate();
list.traver();

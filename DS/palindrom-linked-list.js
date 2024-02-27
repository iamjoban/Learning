class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  #top = null;

  isEmpty() {
    return this.#top === null;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.#top = newNode;
      return;
    }
    let temp = this.#top;
    this.#top = newNode;
    newNode.next = temp;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Empty");
      return;
    }

    let temp = this.#top;
    this.#top = this.#top.next;
    temp.next = null;
    return temp.value;
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

  isPalindrom() {
    let stack = new Stack();
    let temp = this.#head;
    while (temp != null) {
      stack.push(temp.value);
      temp = temp.next;
    }

    let flag = true;
    temp = this.#head;
    while (temp != null) {
      let value = stack.pop();
      console.log(value);
      if (value != temp.value) {
        flag = false;
        break;
      }
      temp = temp.next;
    }
    return flag;
  }
}

let list = new LinkedList();
list.push(5);
list.push(6);
list.push(5);
//list.traver();
let isPalindrom = list.isPalindrom();
console.log("isPalindrom->", isPalindrom);

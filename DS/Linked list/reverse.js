class Node {
  constructor(val) {
    return { val, next: null };
  }
}

class List {
  #head = null;
  add(val) {
    const node = new Node(val);
    if (!this.#head) {
      this.#head = node;
      return;
    }
    let curr = this.#head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }

  reverse() {
    let curr = this.#head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    // console.log(prev);
    this.#head = prev;
  }

  print() {
    let curr = this.#head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
}

const list = new List();
list.add(1);
list.add(2);
list.add(3);
list.print();
list.reverse();
list.print();

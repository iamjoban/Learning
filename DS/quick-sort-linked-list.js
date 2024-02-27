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

  getPivotNode(start, end) {
    console.log("start", start);
    console.log("end", end);
    if (start == end || start === null || end === null) {
      return start;
    }
    let pivotNode = start;
    let curr = start;
    let prevPiviot = null;
    while (curr.next !== null) {
      if (curr.value < end.value) {
        // console.log("comparing->", pivotNode.value, curr.value);
        let temp = pivotNode.value;
        pivotNode.value = curr.value;
        curr.value = temp;
        prevPiviot = pivotNode;
        pivotNode = pivotNode.next;
      }
      curr = curr.next;
    }
    let temp = pivotNode.value;
    pivotNode.value = end.value;
    end.value = temp;
    console.log(pivotNode, prevPiviot);
    return prevPiviot;
  }

  #quickSort(start, end) {
    if (start != end) {
      let pivotNode = this.getPivotNode(start, end);
      this.#quickSort(start, pivotNode);
      if (pivotNode && pivotNode.next != null) {
        this.#quickSort(pivotNode.next.next, end);
      }
    }
  }

  sort() {
    //quick sort
    let temp = this.#head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    this.#quickSort(this.#head, temp);
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
list.sort();
console.log("-------------------------------------");
list.traver();

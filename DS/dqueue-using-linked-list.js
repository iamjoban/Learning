class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Dqueue {
  #front = null;
  #rear = null;
  constructor() {}

  #getnewNode(val) {
    return new Node(val);
  }

  insetAtRear(val) {
    let newNode = this.#getnewNode(val);

    //When inseting first element
    if (this.#front === null) {
      this.#front = newNode;
    } else {
      this.#rear.next = newNode;
      newNode.prev = this.#rear;
    }

    this.#rear = newNode;
  }

  insertAtFront(val) {
    let newNode = this.#getnewNode(val);

    //When inseting first element
    if (this.#rear === null) {
      this.#rear = newNode;
    } else {
      this.#front.prev = newNode;
      newNode.next = this.#front;
    }

    this.#front = newNode;
  }

  deleteAtRare(){
      if(this.#rear === null){
          return;
      }
      let temp = this.#rear;
      this.#rear = this.#rear.prev;
      this.#rear.next = null;
      temp.prev = null;
  }

  deleteAtFront(){
    if(this.#front === null){
        return;
    }
    let temp = this.#front;
    this.#front = this.#front.next;
    this.#rear.prev = null;
    temp.next = null;
}

  print() {
      console.log('-----------------------------');
    let temp = this.#front;
    while (temp.next !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
    console.log(temp.data);
    console.log('-----------------------------');
  }
}

let dqueue = new Dqueue();
dqueue.insertAtFront(5);
dqueue.insertAtFront(15);
dqueue.insertAtFront(25);
dqueue.print();
dqueue.deleteAtRare();
dqueue.print();
dqueue.deleteAtFront();
dqueue.print();
console.log(dqueue);



class CircularQueue {
  #ary = [];
  #front = -1;
  #rear = -1;

  constructor(size) {
    this.size = size;
  }

  enqueue(num) {
    if (
      (this.#rear === this.size - 1 && this.#front === 0) ||
      this.#rear === this.#front - 1
    ) {
      console.log("No space");
      return;
    }
    if (this.#rear === this.size - 1) {
      this.#rear = -1;
    }
    if (this.#ary.length === 0) {
      this.#front = 0;
    }
    this.#ary[++this.#rear] = num;
  }
//this could be written well :P
  dequeue() {
    if (this.#front == -1) {
      console.log("No space/data");
      return;
    }
    if (this.#front === this.#rear) {
      this.#ary[this.#front] = undefined;
      this.#front = -1;
      this.#rear = -1;
      return;
    }
    if (this.#front === this.size - 1) {
      this.#ary[this.#front] = undefined;
      this.#front = 0;
      return;
    }
    let value = this.#ary[this.#front];
    console.log("dequeue", value);
    this.#ary[this.#front++] = undefined;
  }

  print() {
    console.log(this.#ary.join(), "-----", this.#front, this.#rear);
  }
}

let queue = new CircularQueue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.print();
queue.dequeue();
queue.print();
queue.enqueue(6);
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();

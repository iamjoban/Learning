class PriorityQueue {
  value = [];
  priority = [];
  front = -1;
  rear = -1;
  constructor(size) {
    this.size = size;
  }
  peek() {}

  dqueue() {
    if (this.front === -1) {
      console.log("Empty");
      return;
    }
    if (this.front === this.rear - 1) {
      this.value[this.front] = this.priority[this.front] = undefined;
      this.front = this.rear = -1;
    }
    this.value[this.front] = this.priority[this.front] = undefined;
    this.front++;
  }

  isEmpty() {
  //  console.log(this.front, this.rear, this.size);
    return this.front === 0 && this.rear === this.size - 1;
  }

  insertBasedOnPriority(value, priority) {
    let i = this.rear;
    console.log(this.front, this.rear, this.size, '==', value);
    for (; i >= this.front; i--) {
      if (priority > this.priority[i]) {
        this.value[i + 1] = this.value[i];
        this.priority[i + 1] = this.priority[i];
      } else {
        break;
      }
    }
   // console.log("iii", i);
    this.value[i + 1] = value;
    this.priority[i + 1] = priority;
    this.rear++;
  }

  print() {
    console.log(this.value);
    console.log(this.priority);
  }

  enqueue(num, priority) {
    if (this.isEmpty()) {
      console.log("No space");
      return;
    }

    if (this.front === -1) {
      this.front = this.rear = 0;
      this.value.push(num);
      this.priority.push(priority);
    } else if (this.rear === this.size - 1) {
      for (let i = this.front; i <= this.rear; i++) {
        this.value[i - this.front] = this.value[i];
        this.priority[i - this.front] = this.priority[i];
        this.value[i] = this.priority[i] = undefined;
      }
      this.rear -= this.front;
      this.front = 0;
      this.insertBasedOnPriority(num, priority);
    } else {
      this.insertBasedOnPriority(num, priority);
    }
  }
}

let queue = new PriorityQueue(5);
queue.enqueue(5, 5);
queue.enqueue(7, 7);
queue.enqueue(8, 8);
queue.enqueue(6, 6);
queue.print();
queue.dqueue();
queue.dqueue();
queue.print();
queue.enqueue(1, 1);
queue.enqueue(9, 9);
queue.enqueue(2, 2);
queue.print();
queue.enqueue(12, 12);
queue.enqueue(11, 11);

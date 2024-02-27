class MaxHeap {
  constructor(size) {
    this.size = size;
    this.heap = 0;
    this.list = new Array(size).fill(null);
  }

  parent(index) {
    return Math.floor(index - 1) / 2;
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  heapify(index) {
    const leftChildIndex = this.leftChild(index);
    const rightChildIndex = this.rightChild(index);
    let largest = index;
    if (
      leftChildIndex < this.heap &&
      this.list[leftChildIndex] > this.list[index]
    ) {
      largest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap &&
      this.list[rightChildIndex] > this.list[largest]
    ) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      const temp = this.list[index];
      this.list[index] = this.list[largest];
      this.list[largest] = temp;
      this.heapify(largest);
    }
  }

  delete() {
    //Delete top element
    if (this.heap <= 0) {
      return null;
    }

    if (this.heap == 1) {
      return this.list[0];
    }

    const root = this.list[0];
    this.list[0] = this.list[this.heap - 1];
    this.list[this.heap - 1] = undefined;
    this.heap--;

    //Heapify
    this.heapify(0);
  }

  remove(index) {
    if (index > this.heap) {
      throw new Error("Index is higher");
    }

    this.increaseVal(index, Infinity);

    this.delete();
  }

  increaseVal(index, value) {
    this.list[index] = value;

    // Move new ele to right place
    while (index !== 0 && this.list[this.parent(index)] < this.list[index]) {
      const temp = this.list[this.parent(index)];
      this.list[this.parent(index)] = this.list[index];
      this.list[index] = temp;
      index = this.parent(index);
    }
  }

  insert(val) {
    if (this.heap >= this.size) {
      throw new Error("Overflow");
    }

    // Insert ele at bottom right
    let index = this.heap;
    this.list[index] = val;
    this.heap++;
    if (index === 0) {
      return;
    }

    // Move new ele to right place
    while (index !== 0 && this.list[this.parent(index)] < this.list[index]) {
      const temp = this.list[this.parent(index)];
      this.list[this.parent(index)] = this.list[index];
      this.list[index] = temp;
      index = this.parent(index);
    }
  }
}

const maxHeap = new MaxHeap(15);
maxHeap.insert(3);
maxHeap.insert(10);
maxHeap.insert(12);
maxHeap.insert(8);
maxHeap.insert(2);
maxHeap.insert(14);
console.log(maxHeap, "dd");
maxHeap.remove(1);
console.log(maxHeap, "dd");

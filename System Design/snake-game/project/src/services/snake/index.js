class Snake {
  #direction;
  #positions;
  #config;
  #length = 2;
  #directionWeight;
  constructor(config) {
    this.#config = config;

    this.moveSnake();
  }

  getDirectionWeight() {
    return this.#directionWeight;
  }

  setDirectionWeight(weight) {
    this.#directionWeight = weight;
  }

  moveSnake() {
    const fn = () => {
      const positions = [...this.getPositions()];
      const size = this.#config.gridSize;
      let tail = -1;
      if (positions.length === this.#length) {
        tail = positions.pop();
      }
      let head = positions[0];
      if (this.getDirection() === DIRECTION.LEFT && head % size === 0) {
        //    console.log(head, head % size, "---");
        head = Math.floor(head / size) * size + size;
        console.log(head);
      } else if (
        this.getDirection() === DIRECTION.RIGHT &&
        (head + 1) % size === 0
      ) {
        head = Math.floor(head / size) * size - 1;
      } else if (this.getDirection() === DIRECTION.TOP && head < 0) {
        positions[0] = 0;
        const x = size - (size + head);
        head = size * size - x - this.#directionWeight;
      } else if (
        this.getDirection() === DIRECTION.BOTTOM &&
        head >= size * size - size
      ) {
        //  console.log(head, "in");
        //95 = 95%10 = 5
        // positions[0] = 0;
        head = (head % size) - this.#directionWeight;
        //head = size * size - x - this.#directionWeight;
      }

      positions.unshift(head + this.#directionWeight);
      this.setPositions(positions);
      // console.log(positions, tail);

      this.#config.onSnakeMove(tail, positions);
    };
    const movingSnake = fn.bind(this);
    const interval = setInterval(movingSnake, 150);
  }

  setLength(length) {
    this.#length = length;
  }

  getLength() {
    return this.#length;
  }

  getDirection() {
    return this.#direction;
  }

  setDirection(direction) {
    this.#direction = direction;
  }

  getPositions() {
    return this.#positions;
  }

  setPositions(positions) {
    this.#positions = positions;
  }
}

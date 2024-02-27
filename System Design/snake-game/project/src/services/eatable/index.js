class Eatable {
  #position;
  #size;
  constructor(size) {
    this.#size = size;
  }

  generatePosition() {
    const totalIndex = this.#size * this.#size - 1;
    this.#position = Math.floor(Math.random() * totalIndex);
    return this.getPosition();
  }

  getPosition() {
    return this.#position;
  }

  setPosition(positions) {
    this.#position = positions;
  }
}

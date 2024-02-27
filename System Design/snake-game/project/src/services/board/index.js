class Board {
  #size;
  #grid;
  constructor(size) {
    this.#size = size;
  }

  createGrid() {
    const size = this.#size;
    const grid = document.createElement("div");
    grid.classList.add("grid");
    //grid.style.width = this.#size * 10;
    const freg = document.createDocumentFragment();
    let c = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const cell = document.createElement("span");
        cell.classList.add("cell");
        cell.classList.add(c);
        freg.appendChild(cell);
        c++;
      }
    }
    grid.appendChild(freg);
    this.#grid = grid;
    return grid;
  }

  getSize() {
    return this.#size;
  }

  setSize(size) {
    this.#size = size;
  }

  drawSnake(positions, tail, initialDraw) {
    const childrens = this.#grid.children;
    if (initialDraw) {
      for (let i = 0; i < positions.length; i++) {
        childrens[positions[i]].classList.add("snake");
      }
      return;
    }
    if (tail > -1) {
      childrens[tail].classList.remove("snake");
    }
    childrens[positions[0]].classList.add("snake");
  }

  drawEatable(newPosition, oldPosition = 0) {
    const childrens = this.#grid.children;
    childrens[oldPosition].classList.remove("eatable");
    childrens[newPosition].classList.add("eatable");
  }
}

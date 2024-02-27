const DIRECTION = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
  TOP: "TOP",
  BOTTOM: "BOTTOM",
};

class Game {
  #board;
  #snake;
  #eatable;
  #container;
  gridSize;
  constructor(container) {
    //make it configurable
    this.gridSize = 20;
    this.onSnakeMove = this.onSnakeMove.bind(this);
    this.updateDirection = this.updateDirection.bind(this);
    this.#board = new Board(this.gridSize);
    this.#snake = new Snake({
      onSnakeMove: this.onSnakeMove,
      gridSize: this.gridSize,
    });
    this.#eatable = new Eatable(this.gridSize);
    this.#container = container;
  }

  init() {
    const grid = this.#board.createGrid();
    //Snake
    this.#snake.setPositions([1, 0]);
    this.#snake.setDirection(DIRECTION.RIGHT);
    this.#snake.setDirectionWeight(1);
    const newEatablePosition = this.#eatable.generatePosition();
    setTimeout(() => {
      this.#board.drawEatable(newEatablePosition);
    });
    //Score
  }

  onSnakeMove(tail) {
    const positions = this.#snake.getPositions();
    this.#board.drawSnake(positions, tail);
    const eatablePosition = this.#eatable.getPosition();
    console.log(positions, eatablePosition, this.#eatable);
    if (positions.indexOf(eatablePosition) > -1) {
      console.log("-----------------------------");
      this.#snake.setLength(this.#snake.getLength() + 1);
      const oldPosition = this.#eatable.getPosition();
      const newEatablePosition = this.#eatable.generatePosition();
      this.#board.drawEatable(newEatablePosition, oldPosition);
    }
  }

  updateDirection(event) {
    const key = event.keyCode;
    console.log(key);
    if (key === 37) {
      this.#snake.setDirection(DIRECTION.LEFT);
      this.#snake.setDirectionWeight(-1);
    }
    if (key === 38) {
      this.#snake.setDirection(DIRECTION.TOP);
      this.#snake.setDirectionWeight(-this.gridSize);
    }
    if (key === 39) {
      this.#snake.setDirection(DIRECTION.RIGHT);
      this.#snake.setDirectionWeight(1);
    }
    if (key === 40) {
      this.#snake.setDirection(DIRECTION.BOTTOM);
      this.#snake.setDirectionWeight(this.gridSize);
    }
  }

  render() {
    const grid = this.#board.createGrid();
    this.#container.appendChild(grid);
    console.log(this.#snake.getPositions());
    this.#board.drawSnake(this.#snake.getPositions(), undefined, true);
    document.body.addEventListener("keydown", this.updateDirection);
  }
}

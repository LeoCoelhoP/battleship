/* eslint-disable operator-linebreak */
export default class Gameboard {
  #board;

  #rows = 10;

  #columns = 10;

  #ships = [];

  constructor() {
    this.#board = this.createMatrix();
  }

  createMatrix() {
    const matrix = [];
    for (let i = 0; i < this.#rows; i += 1) {
      matrix[i] = [];
      for (let j = 0; j < this.#columns; j += 1) {
        matrix[i][j] = 'sea';
      }
    }

    return matrix;
  }

  placeShip(ship, alignment) {
    const initialRowPosition = ship.position[0];
    const initialColumnPosition = ship.position[1];
    for (let i = 0; i < ship.health; i += 1) {
      if (
        this.#board[initialRowPosition + i][initialColumnPosition + i] === 'sea'
      ) {
        if (alignment) {
          this.#board[initialRowPosition + i][initialColumnPosition] = ship.id;
        } else {
          this.#board[initialRowPosition][initialColumnPosition + i] = ship.id;
        }
      } else throw new Error('Already have a ship there');
    }
    this.#ships.push(ship);
    return this.#board;
  }

  receiveAttack(positionRow, positionColumn) {
    const gridAttacked = this.#board[positionRow][positionColumn];
    if (gridAttacked !== 'sea') {
      const shipAttacked = this.findShip(gridAttacked);
      shipAttacked.hit();
      this.isAllShipsSunk();
      this.#board[positionRow][positionColumn] = 'hit';
      return 'Attacked';
    }
    this.#board[positionRow][positionColumn] = 'missed';
    return 'Missed Attack';
  }

  findShip(shipName) {
    return this.#ships.find((ship) => ship.id === shipName);
  }

  isAllShipsSunk() {
    let result = true;
    this.#ships.forEach((ship) => {
      if (ship.health > 0) result = false;
    });
    return result;
  }

  displayMatrix() {
    return this.#board;
  }

  setMatrix(matrix) {
    this.#board = matrix;
  }

  getFleet() {
    return this.#ships;
  }

  setFleet(fleet) {
    this.#ships = fleet;
  }
}

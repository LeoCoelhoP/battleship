export default class Ship {
  #isSunk = false;

  constructor(id, health, position) {
    this.id = id;
    this.health = health;
    this.position = position;
  }

  hit() {
    if (!this.isSunk()) {
      this.health -= 1;
      return this;
    }
    return 'Ship already sunk!';
  }

  isSunk() {
    this.#isSunk = this.health === 0;
    return this.#isSunk;
  }
}

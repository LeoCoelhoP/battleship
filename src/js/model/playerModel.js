/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
class PlayerModel {
  #state = {};
  addPlayer(player) {
    this.#state.player = player;
  }

  addStatePlayerGameboard(gameboard) {
    this.#state.playerGameboard = gameboard;
  }
  state() {
    console.log(this.#state);
    return this.#state;
  }
}
export default new PlayerModel();

/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
class OnLoadView {
  #markup;

  constructor() {
    this.body = document.querySelector('body');
  }

  hidGridContainer() {
    document.querySelector('.grid-container').classList.toggle('hidden');
  }

  addOnLoadEventListener(handler) {
    window.addEventListener('load', handler);
    return this;
  }

  addStartGameEventListener(handler) {
    return new Promise((resolve) => {
      const startGame = document.querySelector('.start-game-btn');

      startGame.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.parentNode.querySelector('input').value) handler();
        resolve(e.target.parentNode.querySelector('input').value);
      });
    });
  }

  render() {
    this.body.insertAdjacentHTML('afterbegin', this.#markup);
    return this;
  }

  clear() {
    this.body.firstElementChild.classList.add('hidden');

    return this;
  }

  getMarkup() {
    this.#markup = `
    <div class="start-container">
    <h1>BATTLESHIP</h1>
    <form>
      <label for="name"> Enter player name
      </label>
      <input type="text" placeholder="Admiral John" required class="name-input">
      <button class="start-game-btn">START GAME</button>
    </form>
      
    </label>
  </div>
    `;

    return this;
  }
}
export default new OnLoadView();

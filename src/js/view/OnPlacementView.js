/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
class OnPlacementView {
  #markup;

  constructor() {
    this.body = document.querySelector('body');
    this.createCellsContainer();
  }

  placeShip(shipName, shipSize, direction = 'horizontal') {
    const cells = document.querySelectorAll('.grid-cell');

    const hoverHelper = (cell) => {
      for (let i = 1; i < shipSize; i += 1) {
        const counter = i * 10;
        if (cells[cell.dataset.value - counter])
          cells[cell.dataset.value - counter - 1].classList.toggle('hover');
      }
    };
    return new Promise((resolve) => {
      cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
          hoverHelper(cell);
        });

        cell.addEventListener('mouseout', () => {
          hoverHelper(cell);
        });

        cell.addEventListener('click', (e) => {
          const column = Number(e.target.parentNode.classList[1]);

          if (shipSize <= column) {
            cell.style.backgroundColor = 'red';
            for (let i = 1; i < shipSize; i += 1) {
              const counter = i * 10;
              if (cells[Number(cell.dataset.value) + counter])
                cells[
                  Number(cell.dataset.value) - counter - 1
                ].style.backgroundColor = 'red';
            }
            cells.forEach((cell1) => {
              cell1.replaceWith(cell1.cloneNode(true));
            });

            resolve([cell.dataset.value, column]);
          }
        });
      });
    });
  }

  createCellsContainer() {
    this.container = document.createElement('div');
    this.container.classList.add('grid-container');

    this.body.append(this.container);
    return this;
  }

  render(markup) {
    this.container.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    console.log(this.body.firstElementChild);
    this.body.removeChild(this.body.firstElementChild);
  }

  getMarkup() {
    this.#markup = `
      <div class="grid-column 0">
        <div class="grid-cell" data-value="1"></div>
        <div class="grid-cell" data-value="2"></div>
        <div class="grid-cell" data-value="3"></div>
        <div class="grid-cell" data-value="4"></div>
        <div class="grid-cell" data-value="5"></div>
        <div class="grid-cell" data-value="6"></div>
        <div class="grid-cell" data-value="7"></div>
        <div class="grid-cell" data-value="8"></div>
        <div class="grid-cell" data-value="9"></div>
        <div class="grid-cell" data-value="10"></div>
      </div>

      <div class="grid-column 1">
        <div class="grid-cell" data-value="11"></div>
        <div class="grid-cell" data-value="12"></div>
        <div class="grid-cell" data-value="13"></div>
        <div class="grid-cell" data-value="14"></div>
        <div class="grid-cell" data-value="15"></div>
        <div class="grid-cell" data-value="16"></div>
        <div class="grid-cell" data-value="17"></div>
        <div class="grid-cell" data-value="18"></div>
        <div class="grid-cell" data-value="19"></div>
        <div class="grid-cell" data-value="20"></div>
      </div>

      <div class="grid-column 2">
        <div class="grid-cell" data-value="21"></div>
        <div class="grid-cell" data-value="22"></div>
        <div class="grid-cell" data-value="23"></div>
        <div class="grid-cell" data-value="24"></div>
        <div class="grid-cell" data-value="25"></div>
        <div class="grid-cell" data-value="26"></div>
        <div class="grid-cell" data-value="27"></div>
        <div class="grid-cell" data-value="28"></div>
        <div class="grid-cell" data-value="29"></div>
        <div class="grid-cell" data-value="30"></div>
      </div>

      <div class="grid-column 3">
        <div class="grid-cell" data-value="31"></div>
        <div class="grid-cell" data-value="32"></div>
        <div class="grid-cell" data-value="33"></div>
        <div class="grid-cell" data-value="34"></div>
        <div class="grid-cell" data-value="35"></div>
        <div class="grid-cell" data-value="36"></div>
        <div class="grid-cell" data-value="37"></div>
        <div class="grid-cell" data-value="38"></div>
        <div class="grid-cell" data-value="39"></div>
        <div class="grid-cell" data-value="40"></div>
      </div>

      <div class="grid-column 4">
        <div class="grid-cell" data-value="41"></div>
        <div class="grid-cell" data-value="42"></div>
        <div class="grid-cell" data-value="43"></div>
        <div class="grid-cell" data-value="44"></div>
        <div class="grid-cell" data-value="45"></div>
        <div class="grid-cell" data-value="46"></div>
        <div class="grid-cell" data-value="47"></div>
        <div class="grid-cell" data-value="48"></div>
        <div class="grid-cell" data-value="49"></div>
        <div class="grid-cell" data-value="50"></div>
      </div>

      <div class="grid-column 5">
        <div class="grid-cell" data-value="51"></div>
        <div class="grid-cell" data-value="52"></div>
        <div class="grid-cell" data-value="53"></div>
        <div class="grid-cell" data-value="54"></div>
        <div class="grid-cell" data-value="55"></div>
        <div class="grid-cell" data-value="56"></div>
        <div class="grid-cell" data-value="57"></div>
        <div class="grid-cell" data-value="58"></div>
        <div class="grid-cell" data-value="59"></div>
        <div class="grid-cell" data-value="60"></div>
      </div>

      <div class="grid-column 6">
        <div class="grid-cell" data-value="61"></div>
        <div class="grid-cell" data-value="62"></div>
        <div class="grid-cell" data-value="63"></div>
        <div class="grid-cell" data-value="64"></div>
        <div class="grid-cell" data-value="65"></div>
        <div class="grid-cell" data-value="66"></div>
        <div class="grid-cell" data-value="67"></div>
        <div class="grid-cell" data-value="68"></div>
        <div class="grid-cell" data-value="69"></div>
        <div class="grid-cell" data-value="70"></div>
      </div>

      <div class="grid-column 7">
        <div class="grid-cell" data-value="71"></div>
        <div class="grid-cell" data-value="72"></div>
        <div class="grid-cell" data-value="73"></div>
        <div class="grid-cell" data-value="74"></div>
        <div class="grid-cell" data-value="75"></div>
        <div class="grid-cell" data-value="76"></div>
        <div class="grid-cell" data-value="77"></div>
        <div class="grid-cell" data-value="78"></div>
        <div class="grid-cell" data-value="79"></div>
        <div class="grid-cell" data-value="80"></div>
      </div>

      <div class="grid-column 8">
        <div class="grid-cell" data-value="81"></div>
        <div class="grid-cell" data-value="82"></div>
        <div class="grid-cell" data-value="83"></div>
        <div class="grid-cell" data-value="84"></div>
        <div class="grid-cell" data-value="85"></div>
        <div class="grid-cell" data-value="86"></div>
        <div class="grid-cell" data-value="87"></div>
        <div class="grid-cell" data-value="88"></div>
        <div class="grid-cell" data-value="89"></div>
        <div class="grid-cell" data-value="90"></div>
      </div>

      <div class="grid-column 9">
        <div class="grid-cell" data-value="91"></div>
        <div class="grid-cell" data-value="92"></div>
        <div class="grid-cell" data-value="93"></div>
        <div class="grid-cell" data-value="94"></div>
        <div class="grid-cell" data-value="95"></div>
        <div class="grid-cell" data-value="96"></div>
        <div class="grid-cell" data-value="97"></div>
        <div class="grid-cell" data-value="98"></div>
        <div class="grid-cell" data-value="99"></div>
        <div class="grid-cell" data-value="100"></div>
      </div>
    `;

    return this.#markup;
  }
}
export default new OnPlacementView();

import Gameboard from './Gameboard';
import Ship from './Ship';

const carrier = new Ship('Carrier', 5, [0, 0]);

it('Placement Test', () => {
  expect(Gameboard.placeShip(carrier)).toBe(0);
});

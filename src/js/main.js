/* eslint-disable comma-dangle */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import Gameboard from './Gameboard';
import Ship from './Ship';
import Player from './Player';

import OnLoadController from './controller/OnLoadController';
import OnLoadView from './view/onLoadView';

import '../css/firstPage.css';
import '../css/style.css';

// const playerGameboard = new Gameboard();
// const computerGameboard = new Gameboard();

// const shipsTypesAndSizes = {
//   carrier: 5,
//   battleShip: 4,
//   cruiser: 3,
//   submarine: 3,
//   destroyer: 2,
// };
// function vertOrHoriz() {
//   const option = prompt(
//     // eslint-disable-next-line comma-dangle
//     'Type "hor" to horizontal and "vert" to vertical placement'
//   );
//   return option === 'vert';
// }

// function getInitialPos(shipSize) {
//   let invalidInput = true;
//   let row;
//   while (invalidInput) {
//     row = Number(prompt('What is the initial row position'));
//     if (row + shipSize <= 10) invalidInput = false;
//   }

//   invalidInput = true;
//   let column;
//   while (invalidInput) {
//     column = Number(prompt('What is the initial column position'));
//     if (row + shipSize <= 10) invalidInput = false;
//   }

//   return [row, column];
// }
// function computerPlacement() {
//   computerGameboard.createMatrix();
//   const shipsTypes = Object.entries(shipsTypesAndSizes);
//   let counter = 0;
//   shipsTypes.forEach((ship) => {
//     const shipName = ship[0];
//     const shipSize = ship[1];
//     let CarrierPosition;

//     const alignment = true;
//     if (alignment) {
//       CarrierPosition = [1 + counter, 1 + counter];
//     } else {
//       CarrierPosition = [1 + counter, 1 + counter];
//     }
//     counter += 1;

//     const newShip = new Ship(shipName, shipSize, CarrierPosition);

//     computerGameboard.placeShip(newShip, alignment);
//   });
// }

// function randomNum() {
//   return Math.floor(Math.random() * 9);
// }
// function start() {
//   // playerGameboard.createMatrix();
//   // const shipsTypes = Object.entries(shipsTypesAndSizes);

//   // shipsTypes.forEach((ship) => {
//   //   const shipName = ship[0];
//   //   const shipSize = ship[1];
//   //   let CarrierPosition;

//   //   const alignment = vertOrHoriz();
//   //   if (alignment) {
//   //     CarrierPosition = getInitialPos(shipSize);
//   //   } else {
//   //     CarrierPosition = getInitialPos(shipSize);
//   //   }

//   //   const newShip = new Ship(shipName, shipSize, CarrierPosition);
//   //   playerGameboard.placeShip(newShip, alignment);
//   // });
//   computerPlacement();
//   playerGameboard.setMatrix(computerGameboard.displayMatrix());
//   playerGameboard.setFleet(computerGameboard.getFleet());

//   const game = true;
//   while (game) {
//     console.log('---- PLAYER TURN --------');
//     const hitRowPosition = prompt('row position to attack');
//     const hitColumnPosition = prompt('coluumn position to attack');
//     computerGameboard.receiveAttack(hitRowPosition, hitColumnPosition);
//     console.log(computerGameboard.displayMatrix());
//     if (computerGameboard.isAllShipsSunk()) break;

//     console.log('---- COMPUTER TURN --------');
//     playerGameboard.receiveAttack(randomNum(), randomNum());
//     console.log(playerGameboard.displayMatrix());
//     if (playerGameboard.isAllShipsSunk()) break;
//   }
// }

// start();

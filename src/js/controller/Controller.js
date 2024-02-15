/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import OnLoadView from '../view/onLoadView';
import OnPlacementView from '../view/OnPlacementView';
import OnGameView from '../view/OnGameView';
import PlayerModel from '../model/playerModel';
import Player from '../Player';
import Gameboard from '../Gameboard';
import Ship from '../Ship';

const playerGameboard = new Gameboard();
playerGameboard.createMatrix();

const shipsTypesAndSizes = {
  carrier: 5,
  battleShip: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};
const placeShip = async (shipName, shipSize) => {
  let [row, column] = await OnPlacementView.placeShip(shipName, shipSize);
  row = row[1] - 1;
  row = Number(row);
  column = Number(column);
  return Promise.resolve([row, column]);
};

// ON GAME CONTROLLER
const computerShipsPlacement = async () => {
  OnGameView.render(OnGameView.getMarkup());
};

// ON PLACEMENT CONTROLLER
const ShipsPlacement = async () => {
  const ships = Object.entries(shipsTypesAndSizes);

  for (const ship of ships) {
    let invalidResponse = true;
    // eslint-disable-next-line no-await-in-loop
    const position = await placeShip(ship[0], ship[1]);

    if (position) {
      const newShip = new Ship(ship[0], ship[1], position);
    }
  }
  OnLoadView.hidGridContainer();
  computerShipsPlacement();

  setTimeout(() => {
    OnGameView.showGameboards();
  }, 1000);
};

const addPlayerGameboard = () => {
  OnPlacementView.clear();
  OnPlacementView.render(OnPlacementView.getMarkup());
  PlayerModel.addStatePlayerGameboard(playerGameboard);
  ShipsPlacement();
};

// ON LOAD CONTROLLER

const addOnLoadListener = () => {
  OnLoadView.addOnLoadEventListener(OnLoadView.render(OnLoadView.getMarkup()));
};

const addStartGameListener = async () => {
  const playerName = await OnLoadView.addStartGameEventListener(
    OnLoadView.clear.bind(OnLoadView)
  );
  const player = new Player(playerName);

  // Add new player to state
  PlayerModel.addPlayer(player);

  addPlayerGameboard();
};

function OnLoadController() {
  addOnLoadListener();
  addStartGameListener();
}

export default OnLoadController;

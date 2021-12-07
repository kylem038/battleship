import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './App.css';

import Cell from './Cell';
import Ship from './Ship';

// Types
import { Ships, GameMode } from './enums';

// TODOs
// On mouseover Cell invokes function to render ship in cell
// Hide original draggable image
// On mouseout hide Cell ship and show draggable ship

const App = () => {
  const [gameMode, setGameMode] = useState(GameMode.Placement);

  const gameBoard: GameBoard = {
    boardHeight: 10,
    boardWidth: 10,
  };

  const generateColumn = (colNum: number) => {
    const elements = [];
    for (let i = 0; i < gameBoard.boardWidth; i++) {
      elements.push(<Cell x={i} y={colNum} key={`${i} - ${colNum}`} />);
    }
    return elements;
  };

  const generateRows = () => {
    const elements = [];
    for (let i = 0; i < gameBoard.boardHeight; i++) {
      elements.push(
        <tr key={`rows-${i}`}>
          {generateColumn(i)}
        </tr>,
      );
    }
    return elements;
  };

  const generateShips = () => {
    const ships = [Ships.patrolBoat, Ships.submarine, Ships.destroyer, Ships.battleship, Ships.carrier];
    return ships.map((ship, i) => {
      return (
        <Draggable key={`ship-${i}`}>
          <div>
            <Ship ship={ship} />
          </div>
        </Draggable>
      );
    });
  };

  return (
    <div className="App">
      <h1>Battleship</h1>
      <p>Finding game, place your ships</p>
      <table id="game-board">
        <tbody className="grid-container">
          {generateRows()}
        </tbody>
      </table>
      <div className="ship-area">
        <h2>Ships</h2>
        {generateShips()}
      </div>
    </div>
  );
};

export default App;

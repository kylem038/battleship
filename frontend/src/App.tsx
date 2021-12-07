import React, { useState, useRef } from 'react';
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
// Ship type can be passed in some way



const App = () => {
  const [gameMode, setGameMode] = useState(GameMode.Placement);
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);

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
        <Draggable nodeRef={nodeRef1}>
          <div ref={nodeRef1}>
            <Ship ship={Ships.patrolBoat} />
          </div>
        </Draggable>
        <Draggable nodeRef={nodeRef2}>
          <div ref={nodeRef2}>
            <Ship ship={Ships.submarine} />
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default App;

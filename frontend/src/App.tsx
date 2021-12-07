import React, { useState } from 'react';
import Cell from './Cell';
import Draggable from 'react-draggable';
import './App.css';

// TODOs
// Create a component for Cells
// On mouseover Cell invokes function to render ship in cell
// Hide original draggable image
// On mouseout hide Cell ship and show draggable ship
// Ship type can be passed in some way

enum GameMode {
  Placement = 1,
}

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
        <Draggable>
          <img className="ship2" src="/ship_2.png" />
        </Draggable>
      </div>
    </div>
  );
};

export default App;

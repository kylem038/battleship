import React from 'react';
import './App.css';

const App = () => {
  const gameBoard: GameBoard = {
    boardHeight: 10,
    boardWidth: 10,
  };

  const generateColumn = (colNum: number) => {
    const elements = [];
    for (let i = 0; i < gameBoard.boardWidth; i++) {
      elements.push(<td key={`${i} - ${colNum}`} className="grid-cell"></td>);
    }
    return elements;
  };

  const generateRows = () => {
    const elements = [];
    for (let i = 0; i < gameBoard.boardHeight; i++) {
      elements.push(
        <tr>
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
    </div>
  );
};

export default App;

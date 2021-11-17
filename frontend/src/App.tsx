import React from 'react';
import './App.css';

const App = () => {
  const gameBoard: GameBoard = {
    boardHeight: 10,
    boardWidth: 10,
  };

  const generateRow = (rowNum: number) => {
    const elements = [];
    for (let i = 0; i < gameBoard.boardHeight; i++) {
      elements.push(<td key={`${i} - ${rowNum}`} className="grid-cell"></td>);
    }
    return elements;
  };

  return (
    <div className="App">
      <h1>Battleship</h1>
      <p>Finding game, place your ships</p>
      <table id="game-board">
        <tbody className="grid-container">
          <tr>
            {generateRow(0)}
          </tr>
          <tr>
            {generateRow(1)}
          </tr>
          <tr>
            {generateRow(2)}
          </tr>
          <tr>
            {generateRow(3)}
          </tr>
          <tr>
            {generateRow(4)}
          </tr>
          <tr>
            {generateRow(5)}
          </tr>
          <tr>
            {generateRow(6)}
          </tr>
          <tr>
            {generateRow(7)}
          </tr>
          <tr>
            {generateRow(8)}
          </tr>
          <tr>
            {generateRow(9)}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;

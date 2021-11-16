import React from 'react';
import './App.css';

const App = () => {
  const gameBoard: GameBoard = {
    boardHeight: 10,
    boardWidth: 10,
  }

  const elements = [];
  for (let i = 0; i < gameBoard.boardHeight; i++) {
    elements.push(<div className="grid-cell"></div>);
  }

  return (
    <div className="App">
      <h1>Battleship</h1>
      <p>Finding game, place your ships</p>
      <div id="game-board" className="grid-container">
        {elements}
      </div>
    </div>
  );
}

export default App;

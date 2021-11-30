import React, { useEffect, useState } from 'react';
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
  const [currentDragTarget, setCurrentDragTarget] = useState<DragTarget>({ x: null, y: null, target: null });
  const gameBoard: GameBoard = {
    boardHeight: 10,
    boardWidth: 10,
  };

  useEffect(() => {
    console.log('Set current drag target');
    console.log('Drag target X', currentDragTarget.x);
    console.log('Drag target Y', currentDragTarget.y);
  }, [currentDragTarget]);

  const generateColumn = (colNum: number) => {
    const elements = [];
    for (let i = 0; i < gameBoard.boardWidth; i++) {
      elements.push(
        <td
          onMouseOver={({ target }) => setCurrentDragTarget({ x: i, y: colNum, target })}
          onMouseLeave={() => setCurrentDragTarget({ x: null, y: null, target: null })}
          key={`${i} - ${colNum}`}
          className="grid-cell">
        </td>);
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

import React, { useState } from 'react';
import './App.css';

import Cell from './Cell';
import Ship from './Ship';

// Types
import { Ships, GameMode } from './enums';

// TODOs
// Hide original draggable image
// Create ship data structure
// Cell needs to dynamically render ship
// Handle logic for pushing more than one x_y into the map
// Style ship to be abosolute positioned in cell

const App = () => {
  // [ { x_y: shipId }, { x_y: shipId }]
  const [gameMode, setGameMode] = useState(GameMode.Placement);
  const [shipPlacement, setShipPlacement] =  useState(new Map());

  const gameBoard: GameBoard = {
    boardHeight: 10,
    boardWidth: 10,
  };

  const onDrop = (ev: React.DragEvent, x: number, y: number) => {
    const id = ev.dataTransfer.getData('id');
    console.log('id of onDrop: ', id);
    console.log('event of drop: ', ev);
    // based on ship
    
    setShipPlacement(new Map(shipPlacement.set(`${x}_${y}`, id)));
  };

  const generateColumn = (colNum: number) => {
    const elements = [];
    for (let i = 0; i < gameBoard.boardWidth; i++) {
      // if x,y is found in shipPlacement push a Cell with a ship instead of empty cell
      // if shipPlacement[x_y]
      if (shipPlacement.get(`${colNum}_${i}`)){
        const shipId = shipPlacement.get(`${colNum}_${i}`);
        elements.push(<Cell x={i} y={colNum} key={`${i} - ${colNum}`} onDrop={onDrop} shipId={shipId} />);
      } else {
        elements.push(<Cell x={i} y={colNum} key={`${i} - ${colNum}`} onDrop={onDrop} />);
      }
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

  const onDragStart = (ev: React.DragEvent<HTMLDivElement>, id: string) => {
    ev.dataTransfer.setData('id', id);
  };

  const generateShips = () => {
    const ships = [Ships.patrolBoat, Ships.submarine, Ships.destroyer, Ships.battleship, Ships.carrier];
    return ships.map((ship, i) => {
      return (
        <div 
          key={`ship_${i}`}
          onDragStart = {(e) => onDragStart(e, `ship_${i}`)}
          draggable
        >
          <Ship ship={ship} />
        </div>
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

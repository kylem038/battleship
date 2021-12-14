import React from 'react';
import Ship from './Ship';
import { Ships } from './enums';

interface Props {
  x: number;
  y: number;
  onDrop: (event: React.DragEvent, x: number, y: number) => void
  shipId?: string;
}

const Cell: React.FC<Props> = ({ x, y, onDrop, shipId }) => {

  const onDragOver = (ev: React.DragEvent) => {
    ev.preventDefault();
  };

  return (
    <td
      id={`${x}-${y}`}
      onDragOver={(e)=> onDragOver(e)}
      onDrop={(e)=>onDrop(e, x, y)}
      className="grid-cell">
        {shipId ? <Ship ship={Ships.patrolBoat} /> : <div></div>}
    </td>
  );
};

export default Cell;
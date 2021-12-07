import React, { useState, useEffect } from 'react';

interface Props {
  x: number;
  y: number;
}

const Cell: React.FC<Props> = ({ x, y }) => {
  const [currentDragTarget, setCurrentDragTarget] = useState<DragTarget>({ x: null, y: null, target: null });

  // useEffect(() => {
  //   console.log('Set current drag target');
  //   console.log('Drag target X', currentDragTarget.x);
  //   console.log('Drag target Y', currentDragTarget.y);
  // }, [currentDragTarget]);

  return (
    <td
      onMouseOver={({ target }) => setCurrentDragTarget({ x, y, target })}
      onMouseLeave={() => setCurrentDragTarget({ x: null, y: null, target: null })}
      className="grid-cell">
    </td>
  );
};

export default Cell;
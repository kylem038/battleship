interface GameBoard {
  boardWidth: number;
  boardHeight: number;
}

interface DragTarget {
  x: number | null;
  y: number | null;
  target: EventTarget | null;
}
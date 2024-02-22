import { useState } from "react";
import { usePlayerTimer } from "./usePlayerTimer";
import { Cells, CurrentPlayer } from "./type";

const useGameBoard = () => {
  const [board, setBoard] = useState<Cells>(
    Array.from(Array(6), () => Array(7).fill(null))
  );
  const [winner, setWinner] = useState<CurrentPlayer | null>(null);
  const [isDraw, setIsDraw] = useState(false);
  const { currentPlayer, timer, changePlayer } = usePlayerTimer(winner);

  const checkVictory = (
    row: number,
    column: number,
    currentPlayer: number,
    board: Cells
  ) => {
    // Direction offsets for checking wins in all directions
    const directions = [
      [1, 0], // Vertical
      [0, 1], // Horizontal (right-left)
      [0, -1], // Horizontal (left-right)
      [1, 1], // Diagonal (down-right)
      [1, -1], // Diagonal (down-left)
    ];

    for (const [dirRow, dirCol] of directions) {
      let count = 0;

      // Iterate through consecutive cells in the given direction
      for (let i = 0; i < 4; i++) {
        const nextRow = row + dirRow * i;
        const nextCol = column + dirCol * i;

        if (
          nextRow >= 0 &&
          nextRow < board.length &&
          nextCol >= 0 &&
          nextCol < board[0].length &&
          board[nextRow][nextCol] === currentPlayer
        ) {
          count++;

          if (count === 4) {
            return true;
          }
        } else {
          if (
            nextRow < 0 ||
            nextRow >= board.length ||
            nextCol < 0 ||
            nextCol >= board[0].length ||
            board[nextRow][nextCol] !== currentPlayer
          ) {
            break;
          }
        }
      }
    }
    return false;
  };

  const handleClick = (columnIndex: number) => {
    // Check if column is full or invalid
    if (board[0][columnIndex] !== null) return;

    // Find the lowest empty row in the column
    let rowIndex = 5;
    while (rowIndex > 0 && board[rowIndex][columnIndex] !== null) rowIndex--;

    board[rowIndex][columnIndex] = currentPlayer;
    setBoard([...board]);

    const hasWinner = checkVictory(rowIndex, columnIndex, currentPlayer, board);
    if (hasWinner) {
      setWinner(currentPlayer);
    } else if (isDraw) {
      // Handle draw (alert, update state)
    } else {
      changePlayer();
    }
  };


  return { board, winner, currentPlayer, timer, isDraw, handleClick }
}

export default useGameBoard;
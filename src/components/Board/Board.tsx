import { FC } from "react";
import Chip from "./Chip";
import { Cells, CurrentPlayer } from "./type";

interface BoardProps {
  board: Cells;
  winner: CurrentPlayer;
  handleClick: (columnIndex: number) => void;
}

const Board: FC<BoardProps> = ({ board, winner, handleClick }) => {
  return (
    <div className="bg-gray-700 text-white p-3.5 rounded-xl">
      <div className="grid gap-2">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-flow-col gap-2">
            {row.map((cell, columnIndex) => (
              <div
                key={`${rowIndex}-${columnIndex}`}
                className={`w-16 m-1.5 aspect-square rounded-full bg-white grid place-content-center ${
                  winner !== null ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={() =>
                  winner === null ? handleClick(columnIndex) : null
                }
              >
                {cell === 1 && <Chip player={cell} />}
                {cell === 2 && <Chip player={cell} />}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;

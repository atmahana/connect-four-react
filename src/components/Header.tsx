import { FC } from "react";
import { CurrentPlayer } from "./Board/type";

interface HeaderProps {
  winner: CurrentPlayer;
  currentPlayer: CurrentPlayer;
  timer: number;
}

const Header: FC<HeaderProps> = ({ winner, currentPlayer, timer }) => {
  return (
    <div className="text-center">
      {winner === null ? (
        <Text type={"turn"} currentPlayer={currentPlayer} />
      ) : (
        <Text type={"victory"} currentPlayer={currentPlayer} />
      )}
      <h2 className="text-lg mb-5">{timer}s left</h2>
    </div>
  );
};

interface TextProps {
  type: "turn" | "victory";
  currentPlayer: CurrentPlayer;
}

const Text: FC<TextProps> = ({ type, currentPlayer }) => {
  return (
    <h1 className="text-3xl mb-2 font-medium text-neutral-700">
      Player{" "}
      <span
        className={`text-5xl font-bold ${
          currentPlayer === 1 ? "text-red-600" : "text-blue-600"
        }`}
      >
        {currentPlayer}
      </span>
      {type === "turn" ? " turn!" : " won!"}
    </h1>
  );
};

export default Header;

import Board from "./components/Board/Board";
import { CurrentPlayer } from "./components/Board/type";
import useGameBoard from "./components/Board/useGameBoard";
import Header from "./components/Header";

function App() {
  const { board, winner, currentPlayer, timer, handleClick } = useGameBoard();
  return (
    <main className="min-h-screen grid place-content-center">
      <Header winner={winner as CurrentPlayer} currentPlayer={currentPlayer} timer={timer} />
      <Board
        board={board}
        winner={winner as CurrentPlayer}
        handleClick={handleClick}
      />
    </main>
  );
}

export default App;

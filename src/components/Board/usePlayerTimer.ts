import { useEffect, useState } from "react";
import { TIMER } from "./const";
import { CurrentPlayer } from "./type";

export function usePlayerTimer(winner: number | null) {
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayer>(1);
  const [timer, setTimer] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer(timer - 1);
    }, 1000);

    if (winner === null) {
      if (currentPlayer === 1 && timer === 0) {
        setCurrentPlayer(2);
        setTimer(TIMER);
      }
      if (currentPlayer === 2 && timer === 0) {
        setCurrentPlayer(1);
        setTimer(TIMER);
      }
    } else {
      setTimer(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, winner]);

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    setTimer(TIMER);
  }

  return { currentPlayer, timer, changePlayer };
}
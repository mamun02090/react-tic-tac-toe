import React, { useState } from "react";
import Board from "./Board";
import History from "./History";

function Game(props) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [nextValue, setNextValue] = useState("X");
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquare = history[currentMove];
  const onPlay = (nextSquare) => {
    nextValue === "X" ? setNextValue("O") : setNextValue("X");
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  const moves = history.map((history, move) => {
    let description;
    if (move > 0) {
      description = `Go to move ${move}`;
    } else {
      return;
    }
    return (
      <li
        key={move}
        className="bg-green-400 rounded px-2 py-1 my-2 font-bold text-center"
      >
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  const jumpTo = (move) => {
    setCurrentMove(move);
    move % 2 === 0 ? setNextValue("X") : setNextValue("O");
  };
  const handleRestart = () => {
    if (currentMove > 0) {
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
      setNextValue("X");
    }
  };
  return (
    <div className="flex flex-col sm:flex-row items-center h-[550px] sm:h-[250px] justify-center gap-5">
      <div>
        <Board
          nextValue={nextValue}
          squares={currentSquare}
          onPlay={onPlay}
          currentMove={currentMove}
        />
      </div>
      <div className=" pt-0 w-[240px] border rounded border-green-600 flex justify-center bg-green-100 h-full overflow-y-scroll relative">
        <button
          onClick={handleRestart}
          className="bg-gray-400 rounded px-2 py-1 my-2 font-bold text-center w-[180px] fixed"
        >
          {currentMove === 0 ? "Let's start the game" : "Restart the game"}
        </button>
        <div className="mt-12 px-5">
          <History moves={moves} />
        </div>
      </div>
    </div>
  );
}

export default Game;

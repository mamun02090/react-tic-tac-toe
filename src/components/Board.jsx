import classNames from "clsx";
import Square from "./Square";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[b] === squares[a] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Board({ squares, currentMove, onPlay, nextValue }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner is: ${winner}`;
  } else if (currentMove === 9) {
    status = "Match is Drawn";
  } else {
    status = `Next Player is: ${nextValue}`;
  }
  const clickHandle = (index) => {
    if (winner) {
      return;
    }
    const tmp = [...squares];
    tmp[index] = nextValue;
    onPlay(tmp);
  };
  return (
    <div className="mx-auto">
      <p
        className={classNames({
          "p-1 bg-yellow-500 font-bold text-center rounded mb-5": true,
          "bg-green-600": winner,
        })}
      >
        {status}
      </p>
      <div className="grid grid-cols-3 max-w-[200px] gap-3 justify-center items-center">
        {squares.map((item, index) => (
          <Square
            value={squares[index]}
            onSquareClick={() => clickHandle(index)}
            key={arr[index]}
            disabled={squares[index] ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;

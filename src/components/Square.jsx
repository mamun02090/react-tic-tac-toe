import classNames from "clsx";
import React from "react";
function Square({ value, onSquareClick, ...rest }) {
  return (
    <button
      onClick={onSquareClick}
      className={classNames({
        "h-12 w-12 text-white font-bold border-gray-500 text-2xl border m-1 rounded": true,
        "bg-blue-400 border-blue-800": value === "X",
        "bg-orange-400 border-orange-800": value === "O",
      })}
      {...rest}
    >
      {value}
    </button>
  );
}

export default Square;

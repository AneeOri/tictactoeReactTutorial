import React from "react";
import Square from "./square";
import CalculateWinner from "./calculateWinner";

export default function Board({xIsNext, squares, onPlay}) {

  //const [xIsNext, setXisNext] = useState(true);
  //const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
      if(squares[i] || CalculateWinner({squares})){
        return;
      }

      const nextSquares = squares.slice(); //creates a copy of squares array

       if(xIsNext){
         nextSquares[i] = "X";
        }else{
        nextSquares[i] = "O";
        }
    // setSquares(nextSquares);
     //setXisNext(!xIsNext);
     onPlay(nextSquares);
  }

  const winner = CalculateWinner({squares});
  let status;
  if(winner){
    status = "winner: " + winner;
  }else{
    status = "Next Player: " + (xIsNext ? "x" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}

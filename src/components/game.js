import React, { useState } from "react";
import Board from "./board";

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, SetCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0,currentMove +1),nextSquares];
        setHistory(nextHistory);
        SetCurrentMove(nextHistory.length -1);
    }

    function jumpTo(nextMove){
        SetCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if(move > 0){
            description = 'go to move #' + move;
        }else{
            description = 'go to game start';
        }
        return(
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return(
       <div className="game">
         <div className="game-board">
           <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
         </div>
         <div className="game-info">
           <ol>{moves}</ol>
         </div>
       </div>
    );
}
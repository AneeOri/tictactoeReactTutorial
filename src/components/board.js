import React from "react";
import CalculateWinner from "./calculateWinner";

export default function Board({xIsNext, squares, onPlay}){

    function handleClick(i){
       if(CalculateWinner(squares) || squares[i]){
        return;
       }
       const nextSquares = squares.slice();
       if(xIsNext){
        nextSquares[i] = 'X';
       }
       else{
        nextSquares[i]='O';
       }
       onPlay(nextSquares);
    }

    return(
        <div></div>
    );
}
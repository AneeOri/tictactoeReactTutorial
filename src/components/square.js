import React from "react";
import { useState } from "react";

export default function Square(){

    const [value, setValue] = useState(null);

    function handleClick(){
        setValue('X'); //RE-RENDER THE SQUARE
    }
    return( 
          <button className="square" onClick={handleClick}>
            {value}
          </button>);
}
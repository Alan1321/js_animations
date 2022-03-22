import React from "react";

const Nada = () =>{


    const clickHandler = () =>{
        console.log('clicked in click handler');
    }

    return(
        <div>
            <h1>Welcome to nadaaaa</h1>
            <button onClick={clickHandler}>CLick Me!!</button>
        </div>
    )

}

export default Nada
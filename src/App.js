import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [ xPlayerSate, setXPlayerState ] = useState([]);
  const [ yPlayerSate, setYPlayerState ] = useState([]);
  const [ activePlayer, setActivePlayer ] = useState("x");

  const winningMessage = () => `Player ${activePlayer} won!!!`;
  const drawMessage = () => `Game ended in a draw`;
  const currentPlayerTurn = () => `It is ${activePlayer}'s turn`;

  const winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
    [2, 5, 8],
  ];

  const handleClick = (cellClicked) => {
  
    // the states dont save how they are supposed to be saved => possibly bc of virtual DOM and re-rendering?
    if(activePlayer === "x") {
      setXPlayerState(val => {
        // save to state 
        setXPlayerState(val.push(cellClicked))
        // check if winning options is in state
        const isStateinWinningOptions = winningOptions.forEach(options => {
          options.every(item => {
            return item in xPlayerSate
          })
        })
        if(isStateinWinningOptions) {
          // user won 
        } 
      }
      )
    }
    else if(activePlayer === "y")  {
      setYPlayerState(val => {
        console.log(val)
        setYPlayerState(val.push(cellClicked)) }
      )
    }
    
    
    setActivePlayer(val => {
      const changeActivePlayer = val === "x" ? "y" : "x";
      setActivePlayer(changeActivePlayer)
    })
  } 

    return (
        <div className="App">
            <div className="wrapper">
              <div className="game-container">
                <div className="cell" onClick={() => handleClick(1)}></div>
                <div className="cell" onClick={() => handleClick(2)}></div>
                <div className="cell" onClick={() => handleClick(3)}></div>
                <div className="cell" onClick={() => handleClick(4)}></div>
                <div className="cell" onClick={() => handleClick(5)}></div>
                <div className="cell" onClick={() => handleClick(6)}></div>
                <div className="cell" onClick={() => handleClick(7)}></div>
                <div className="cell" onClick={() => handleClick(8)}></div>
                <div className="cell" onClick={() => handleClick(9)}></div>
              </div>

            </div>
        </div>
    );
}

export default App;

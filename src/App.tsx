import React, {FC, useEffect, useState} from 'react';

import './App.css';
import BoardComponent from "./components/BoardComponent/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigures from "./components/LostFigures/LostFigures";
import Timer from "./components/Timer/Timer";

const App:FC = () => {

    const [board,setBoard] = useState(new Board());
    const [whitePlayer,setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer,setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer,setCurrentPlayer] = useState<Player|null>(null);

    useEffect(()=>{
        restart();
        setCurrentPlayer(whitePlayer);
    },[])

    function restart(){
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures()
        setBoard(newBoard);
    }

    function swapPlayer(){
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer: whitePlayer);
    }

    return (
        <div className={'app'}>

            <div>
                <LostFigures title='Black Figures' figures={board.lostBlackFigures}/>
            </div>
            <div>
                <div>
                    <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer}/>
                </div>
                <div className='timerWrapper'>
                    <Timer  currentPlayer={currentPlayer} restart={restart}/>
                </div>
            </div>

            <div>
                <LostFigures title='White Figures' figures={board.lostWhiteFigures}/>
            </div>
        </div>
    );
};

export default App;
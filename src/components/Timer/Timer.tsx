import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../../models/Player";
import {Colors} from "../../models/Colors";

interface ITimerProps{
    currentPlayer: Player |null;
    restart: ()=> void
}

const Timer:FC<ITimerProps> = ({currentPlayer,restart}) => {
    const [blackTime,setBlackTime] = useState(300);
    const [whiteTime,setWhiteTime] = useState(300);

    if (!blackTime){
        alert('Blacks loose')
    }

    if (!whiteTime){
        alert('White loose')
    }

    const timer = useRef<null|ReturnType<typeof setInterval>>(null);

    useEffect(()=>{
        startTimer()
    },[currentPlayer])

    function startTimer(){
        if(timer.current){
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer: decrementBlackTimer
        timer.current = setInterval(callback,1000);
    }

    function decrementBlackTimer(){
        setBlackTime(prev => prev - 1)
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }

    const handleRestart = () =>{
        setWhiteTime(300);
        setBlackTime(300);
        restart();
    }

    return (
        <div>
            <div>
                <button className='timerBtn' onClick={handleRestart}>Restart game</button>
            </div>
            <h2 className='time'>Black - {blackTime}</h2>
            <h2 className='time'>White - {whiteTime}</h2>
        </div>
    );
};

export default Timer;
import React, { useState, useRef } from "react";
import styled from "styled-components";

const StopwatchCard = styled.div`
background-color: #FFFFFF;
border-radius: 20px;
padding: 3vh 3vw;
width: 40vw;
height: 40vh;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 768px) {
    width: 80vw;
    height: 35vh;
}
`

const TimerControl = styled.button`
margin: 8px;
padding: 2vh 2vw;
border-radius: 24px;

@media only screen and (max-width: 768px) {
   padding: 2vh 6vw;
   font-size: 20px;
}
`

const Timer = styled.p`
color: #282c34;
font-size: 2em;
`

const Stopwatch = () => {

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setisPaused] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        setIsActive(true);
        setisPaused(true);
        // increments timer by 1 every second
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current);
        setisPaused(false);
        // console.log("timer is paused");
    }

    const handleResume = () => {
        setisPaused(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000);
        // console.log("resuming timer");
    }

    const handleReset = () => {
        clearInterval(countRef.current);
        setIsActive(false);
        setisPaused(false);
        setTimer(0);
    }

    const timeFormat = () => {
        let getSeconds = `0${(timer % 60)}`.slice(-2);
        let minutes = `0${Math.floor(timer / 60)}`;
        let getMinutes = `0${minutes % 60}`.slice(-2);
        let getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
        <StopwatchCard>
            <div>
                <Timer>{timeFormat()}</Timer>
                <div class="button-group">
                    {
                        !isActive && !isPaused ?
                            <TimerControl onClick={handleStart}>Start</TimerControl>
                            : (
                                isPaused ? <TimerControl onClick={handlePause}>Pause</TimerControl> :
                                    <TimerControl onClick={handleResume}>Resume</TimerControl>
                            )
                    }
                    <TimerControl onClick={handleReset}>Reset</TimerControl>
                </div>
            </div>
        </StopwatchCard>
    )
}

export default Stopwatch;
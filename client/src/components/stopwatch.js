import React, { useState, useRef } from "react";
import styled from "styled-components";

const StopwatchCard = styled.div`
background-color: #FFFFFF;
border-radius: 20px;
padding: 3vh 3vw;
width: 40vw;
height: 40vh;
`

const TimerControl = styled.button`
margin: 8px;
padding: 2vh 2vw;
border-radius: 24px;
`

const Timer = styled.p`
color: #282c34;
`

const Stopwatch = () => {

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setisPaused] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        setIsActive(true);
        setisPaused(true);
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

    return (
        <StopwatchCard>
            <Timer>{timer}</Timer>
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
        </StopwatchCard>
    )
}

export default Stopwatch;
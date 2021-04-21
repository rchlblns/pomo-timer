import React, { useState, useEffect } from "react";
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
padding: 2vh 4vw;
border-radius: 24px;
cursor: pointer;
background-color: transparent;
border-color: #00B884;

:hover {
    background-color: scale-color(#00B884, $lightness: -20%);
}

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

    const [counter, setCounter] = useState(15);
    const [active, setIsActive] = useState(false);
    
    useEffect(() => {

            let intervalId;

            if (active) {
                intervalId = setInterval(() => {
                    if (counter > 0) {
                        setCounter((counter) => counter - 1)
                    } else {
                        clearInterval(intervalId);
                    }
                }, 1000)
            } 

            return () => 
            clearInterval(intervalId); 
    })

    const timeFormat = () => {
        let getSeconds = `0${(counter % 60)}`.slice(-2);
        let minutes = `0${Math.floor(counter / 60)}`;
        let getMinutes = `0${minutes % 60}`.slice(-2);

        return `${getMinutes} : ${getSeconds}`
    }

    return (
        <StopwatchCard>
            <div>
                <Timer>{timeFormat()}</Timer>
                <div class="button-group">
                    <TimerControl onClick={() => setIsActive(!active)}>{active ? "Pause" : "Start"}</TimerControl>
                </div>
            </div>
        </StopwatchCard>
    )
}

export default Stopwatch;
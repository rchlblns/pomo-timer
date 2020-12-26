// import React, {useState, useRef} from "react";
// import styled from "styled-components";

// const StopwatchCard = styled.div`
// background-color: #FFFFFF;
// border-radius: 20px;
// padding: 3vh 3vw;
// width: 40vw;
// height: 40vh;
// `

// const TimerControl = styled.button`
// margin: 8px;
// padding: 2vh 2vw;
// border-radius: 24px;
// `

// const Timer = styled.p`
// color: #282c34;
// `

// const Stopwatch = () => {
    
//     const [timer, setTimer] = useState(0);
//     const [isActive, setIsActive] = useState(false);
//     const [isPaused, setisPaused] = useState(false);
//     const countRef = useRef(null);

//     const handleStart = () => {
//         setIsActive(true);
//         setisPaused(true);
//         countRef.current = setInterval(() => {
//             setTimer((timer) => timer + 1)
//         }, 1000)
//     }

//     const handlePause = () => {

//     }

//     const handleResume = () => {

//     }

//     const handleReset = () => {
//         clearInterval(countRef.current);
//         setIsActive(false);
//         setisPaused(false);
//     }

//     return (
//         <StopwatchCard>
//             <Timer>Time goes here</Timer>
//             <div class="button-group">
//                 <TimerControl onClick={handleStart}>Start</TimerControl>
//                 <TimerControl onClick={handleReset}>Reset</TimerControl>
//             </div>
//         </StopwatchCard>
//     )
// }

// export default Stopwatch;
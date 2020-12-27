import React from "react";
// import axios from "axios";
import Nav from "./components/navbar";
import Stopwatch from "./components/stopwatch"
import './App.css';

// const hitBackend = () => {
//   axios.get("/test")
//   .then((res) => {
//     console.log(res.data)
//   })

// }

const App = () => {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;

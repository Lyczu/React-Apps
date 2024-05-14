import React from 'react';
import './App.css';
import Lottie from 'lottie-react'
import Animation from './Animation_moutain.json'

function App() {
  const animationClick = () => {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=T_REsfRihS9RXAgm&t=43";
  };

  return (
    <div className="App">
      <a href="https://github.com/Lyczu" target="_blank"><h1>Bartek</h1></a>
      <a href="https://youtu.be/dQw4w9WgXcQ?si=T_REsfRihS9RXAgm&t=43">
        <Lottie animationData={Animation} style={{ width: "100%", height: "400px" }}/>
        </a>
    </div>
  );
}

export default App;

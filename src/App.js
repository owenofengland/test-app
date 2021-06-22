import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    setClicked(clicked + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Clicked: {clicked}</p>
        </button>
        <p>
          Testing... Don't mind me.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

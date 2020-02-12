import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [isSound, setIsSound] = React.useState<boolean>(false);

  setTimeout(() => {
    setIsSound(!isSound);
    console.log(isSound)
  }, 3000);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setIsSound(!isSound)}>Toggle sound</button>
        {isSound &&
          <>
            <h1>Play</h1>
            <audio autoPlay>
              <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" />
            </audio>
          </>
        }
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

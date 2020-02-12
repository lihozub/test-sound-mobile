import React from 'react';
import './App.css';

export const Child1 = () => {
  const [isSound, setIsSound] = React.useState<boolean>(false);

  setTimeout(() => {
    setIsSound(!isSound);
    
  }, 3000);
  return (
    <div>
      <div>Here 1st Child</div>
      <button onClick={() => setIsSound(!isSound)}>Toggle sound</button>
      {isSound &&
      <>
        <h1>Play</h1>
        <audio autoPlay>
          <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" />
        </audio>
      </>
      }
    </div>
  );
};
import React from 'react';
import './App.css';

export const Child2 = () => {
    const [isComp, setComp] = React.useState(false);

  return (
      <div>
        <div>Here 2st Child</div>
        <p>Just some kind of fuctional with buttons</p>
        <ul>
          <li>
            <button>button 1</button>
          </li>
          <li>
            <button>button 2</button>
          </li>
          <li>
            <button onClick={() => setComp(!isComp)}>button 3</button>
              {isComp &&
              <>
                  <h1>Play Comp</h1>
                  <audio autoPlay preload="auto">
                      {/*<source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" />*/}
                      <source src="./001.mp3" />
                  </audio>
              </>
              }
          </li>
          <li>
            <button>button 4</button>
          </li>
          <li>
            <button>button 5</button>
          </li>
        </ul>
      </div>
  );
};
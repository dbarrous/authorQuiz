import React from "react";

import AuthorQuiz from "./AuthorQuiz";

const Box = () => {
  const [score, setScore] = React.useState(0);
  const [lives, setLives] = React.useState(2);
  const [timer, setTimer] = React.useState(99999);
  const [readyState, setReadyState] = React.useState(false);
  const [mode, setMode] = React.useState(true);
  //TODO finish replay feature without needing to reload
  // const playAgain = () => {
  //   setTimer(30);
  //   setScore(0);
  // };

  let stats = (
    <div className="stats">
      <h1 className="score">Score: {score}</h1>
      <h1 className="timer">Timer: {timer}</h1>
      <h1 className="lives">Lives: {lives + 1}</h1>
    </div>
  );
  React.useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    if (timer > 0) {
      setTimer(timer - 1);
    } else {
      setReadyState(false);
      setMode(true);
    }
  };

  const gameMode = mode => {
    if (mode === "easy") {
      setTimer(60);
      setReadyState(true);
      setMode(false);

      return null;
    } else if (mode === "regular") {
      setTimer(30);
      setReadyState(true);
      setMode(false);

      return null;
    }
    setTimer(15);
    setReadyState(true);
    setMode(false);
    return null;
  };
  return (
    <div>
      {readyState && stats}
      <div>
        {readyState && (
          <AuthorQuiz
            setScore={setScore}
            score={score}
            setLives={setLives}
            lives={lives}
            setTimer={setTimer}
            timer={timer}
          />
        )}
        {!readyState && timer <= 0 && (
          <>
            <h1> Your Final Score is {score}</h1>
            <button onClick={() => window.location.reload()}>
              Play Again?
            </button>
          </>
        )}
        {mode && timer > 0 && (
          <div>
            <h1>Author Quiz</h1>
            <p>
              Instructions: Correctly guess the book of the authors pictured to
              earn points before time runs out!
            </p>
            <br />
            <div>
              <button onClick={() => gameMode("easy")}>Easy Mode</button>
              <p>Gives you 60 Seconds to Choose Answers</p>
            </div>
            <div>
              <button onClick={() => gameMode("regular")}>Regular Mode</button>
              <p>Gives you 30 Seconds to Choose Answers</p>
            </div>
            <div>
              <button onClick={() => gameMode("hard")}>Hard Mode</button>
              <p>Gives you 15 Seconds to Choose Answers</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;

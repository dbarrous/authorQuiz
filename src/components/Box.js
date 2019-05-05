import React from "react";

import AuthorQuiz from "./AuthorQuiz";

const Box = props => {
  const [score, setScore] = React.useState(0);
  const [timer, setTimer] = React.useState(30);

  //TODO finish replay feature without needing to reload
  // const playAgain = () => {
  //   setTimer(30);
  //   setScore(0);
  // };

  let stats = (
    <>
      <h1>Score: {score}</h1>
      <h1>Timer: {timer}</h1>
    </>
  );
  React.useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setTimer(timer - 1);
  };
  return (
    <div>
      {timer >= 0 && stats}
      <div>
        {timer >= 0 && <AuthorQuiz setScore={setScore} score={score} />}
        {timer < 0 && (
          <>
            <h1> Your Final Score is {score}</h1>
            <button onClick={() => window.location.reload()}>
              Play Again?
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Box;

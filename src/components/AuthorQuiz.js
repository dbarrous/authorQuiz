import React from "react";
import QuizBox from "./QuizBox.js";
// import bookLibrary from "./data/bookLibrary.js";
import data from "./data/newData.js";
import shuffle from "./shuffle.js";
let bookLibrary = [];
for (let i = 0; i <= 60; i++) {
  bookLibrary = bookLibrary.concat(data[i].books);
}
console.log(bookLibrary);
let array1 = Array.from(Array(60), (x, index) => index);
shuffle(array1);
let round = array1.pop();
const AuthorQuiz = props => {
  let numberOfQuestions = 4;

  const answerArray = () => {
    const shuffledArray = shuffle(bookLibrary);
    const randAuthorBooks = shuffle(data[game].books);
    const correctAuthorBook = randAuthorBooks.slice(randAuthorBooks.length - 1);
    const ans = shuffledArray.slice(shuffledArray.length - numberOfQuestions);
    const test = val => ans.includes(val);
    if (!randAuthorBooks.some(test)) {
      ans.shift();
      ans.push(correctAuthorBook.toString());
      shuffle(ans);
    }

    return ans;
  };
  const [game, setGame] = React.useState(round);
  const [answers, setAnswers] = React.useState(answerArray(bookLibrary));
  const [countdown, setCountdown] = React.useState(3);

  const nextRound = () => {
    if (array1.length >= 1) {
      console.log(array1);
      setGame(array1.pop());
      return null;
    } else {
      array1 = Array.from(Array(24), (x, index) => index);
      shuffle(array1);
      console.log("New" + array1);
      setGame(array1.pop());
      console.log("New after Pop" + array1);
      return null;
    }
  };
  /* eslint-disable */
  React.useEffect(() => {
    setAnswers(answerArray());
  }, [game]);
  /* eslint-enable */
  React.useEffect(() => {
    if (countdown > 0) {
      let timerID = setInterval(() => tick(), 950);

      return function cleanup() {
        clearInterval(timerID);
      };
    }
  });

  function tick() {
    setCountdown(countdown - 1);
  }
  let quiz = (
    <QuizBox
      data={data[game]}
      bookLibrary={answers}
      nextRound={nextRound}
      setScore={props.setScore}
      score={props.score}
      setLives={props.setLives}
      lives={props.lives}
      setTimer={props.setTimer}
      timer={props.timer}
    />
  );
  let counter = (
    <div className="counter">
      <h3>Get Ready to Play!</h3>
      <h1>{countdown}</h1>
    </div>
  );
  return (
    <div className={"outerBox"}>
      {countdown > 0 ? null : props.stats}
      {countdown > 0 ? counter : quiz}
    </div>
  );
};

export default AuthorQuiz;

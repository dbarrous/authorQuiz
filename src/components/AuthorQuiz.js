import React from "react";
import QuizBox from "./QuizBox.js";
import bookLibrary from "./data/bookLibrary.js";
import data from "./data/data.js";
import shuffle from "./shuffle.js";

let array1 = Array.from(Array(24), (x, index) => index);
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
  return <div className={"outerBox"}>{quiz}</div>;
};

export default AuthorQuiz;

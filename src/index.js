import React from "react";
import ReactDOM from "react-dom";
import QuizBox from "./components/QuizBox.js";
import bookLibrary from "./components/data/bookLibrary.js";
import data from "./components/data/data.js";
import shuffle from "./shuffle.js";

let array1 = Array.from(Array(24), (x, index) => index);
shuffle(array1);
let round = array1.pop();
const AuthorQuiz = () => {
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
  console.log(game);

  const nextRound = () => {
    setGame(array1.pop());
    return null;
  };
  /* eslint-disable */
  React.useEffect(() => {
    setAnswers(answerArray());
  }, [game]);
  /* eslint-enable */

  let quiz = (
    <QuizBox data={data[game]} bookLibrary={answers} nextRound={nextRound} />
  );
  return <div className={"outerBox"}>{quiz}</div>;
};

ReactDOM.render(<AuthorQuiz />, document.getElementById("root"));

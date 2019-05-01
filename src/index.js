import React from "react";
import ReactDOM from "react-dom";
import QuizBox from "./components/QuizBox.js";
import bookLibrary from "./components/data/bookLibrary.js";
import data from "./components/data/data.js";
import shuffle from "./shuffle.js";

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
  const [game, setGame] = React.useState(0);
  const [answers, setAnswers] = React.useState(answerArray(bookLibrary));

  const nextRound = () => {
    setGame(game + 1);
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

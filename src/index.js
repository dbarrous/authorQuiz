import React from "react";
import ReactDOM from "react-dom";
import QuizBox from "./components/QuizBox.js";
import bookLibrary from "./components/data/bookLibrary.js";
import data from "./components/data/data.js";
import shuffle from "./shuffle.js";

const AuthorQuiz = () => {
  const [game, setGame] = React.useState(0);
  const [answers, setAnswers] = React.useState(bookLibrary);

  let quiz = (
    <QuizBox
      gameID={game}
      data={data[game]}
      bookLibrary={answers}
      setGame={setGame}
    />
  );
  return <div className={"outerBox"}>{quiz}</div>;
};

ReactDOM.render(<AuthorQuiz />, document.getElementById("root"));

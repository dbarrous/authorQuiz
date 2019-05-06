import React from "react";
import QuizItem from "./QuizItem";
import "../css/QuizBox.css";

const QuizBox = props => {
  let newArray = props.bookLibrary.map(book => props.data.books.includes(book));
  const [color, setColor] = React.useState("blue");

  const checkAnswer = bool => {
    if (color === "blue") {
      bool ? winner() : setColor("red");
    }
  };

  const helper = () => {
    props.nextRound();
    setColor("blue");

    return "";
  };

  const winner = () => {
    props.setScore(props.score + 1);
    setColor("green");
  };

  const displayBtn = <button onClick={() => helper()}>Next</button>;
  return (
    <div className="quizBox" style={{ background: color }}>
      <div className="author">
        <h1>{props.data.author}</h1>
        <img src={props.data.authorImg} alt={props.data.author} />
        {color === "green" ? (
          <h1>You are Correct!</h1>
        ) : color === "red" ? (
          <h1>You are Wrong!</h1>
        ) : null}
      </div>
      <div className="quiz">
        {props.bookLibrary.map((book, i) => (
          <QuizItem
            book={book}
            bool={newArray[i]}
            checkAnswer={checkAnswer}
            key={i}
          />
        ))}
      </div>

      {color !== "blue" ? displayBtn : null}
    </div>
  );
};

export default QuizBox;

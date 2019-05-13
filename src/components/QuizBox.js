import React from "react";
import QuizItem from "./QuizItem";
import "../css/QuizBox.css";

const QuizBox = props => {
  let newArray = props.bookLibrary.map(book => props.data.books.includes(book));
  const [color, setColor] = React.useState("blue");

  const checkAnswer = bool => {
    if (color === "blue") {
      bool ? winner() : loser();
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

  const loser = () => {
    if (props.lives > 0) {
      props.setLives(props.lives - 1);
    } else {
      props.setLives(props.lives - 1);
      props.setTimer(0);
    }
    setColor("red");
  };

  const displayBtn = <button onClick={() => helper()}>Next</button>;
  return (
    <div className="quizBox" style={{ background: color }}>
      <div className="author">
        <h1>{props.data.author}</h1>
        {/* <img src={props.data.authorImg} alt={props.data.author} /> */}
        {color === "green" ? (
          <h1>You are Correct!</h1>
        ) : color === "red" ? (
          <h1>You are Wrong!</h1>
        ) : null}
      </div>
      {color === "blue" && (
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
      )}

      {color !== "blue" && props.timer > 0 ? displayBtn : null}
    </div>
  );
};

export default QuizBox;

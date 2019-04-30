import React from "react";
import QuizItem from "./QuizItem";
import "../css/QuizBox.css";

const QuizBox = props => {
  let newArray = props.bookLibrary.map(book => props.data.books.includes(book));
  const [color, setColor] = React.useState("blue");

  const checkAnswer = bool => {
    if (color == "blue") {
      bool ? setColor("green") : setColor("red");
    }
  };

  const helper = () => {
    props.setGame(props.gameID + 1);
    setColor("blue");
    return "";
  };
  return (
    <div style={{ background: color }}>
      <h1>{props.data.author}</h1>

      {props.bookLibrary.map((book, i) => (
        <QuizItem book={book} bool={newArray[i]} checkAnswer={checkAnswer} />
      ))}
      <button onClick={() => helper()}>Next</button>
    </div>
  );
};

export default QuizBox;

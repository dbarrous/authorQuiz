import React from "react";
import "../css/QuizItem.css";

const QuizItem = props => {
  return (
    <div
      className="quizItem"
      style={{ background: props.color }}
      onClick={() => props.checkAnswer(props.bool)}
    >
      <h1>{props.book}</h1>
    </div>
  );
};

export default QuizItem;

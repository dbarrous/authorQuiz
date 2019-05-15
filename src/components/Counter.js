import React from "react";

export default function Counter(props) {
  const [countdown, setCountdown] = React.useState(3);

  // function callComponent() {
  //   gameMode("easy");
  //   return null;
  // }

  React.useEffect(() => {
    if (countdown > 0) {
      let timerID = setInterval(() => tick(), 1000);

      return function cleanup() {
        clearInterval(timerID);
      };
    }
  });

  function tick() {
    setCountdown(countdown - 1);
  }

  return (
    <div className="counter">
      <h3>Get Ready to Play!</h3>
      <h1>{countdown > 0 ? countdown : props.setReadyState(true)}</h1>
    </div>
  );
}

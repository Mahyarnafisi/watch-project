import "./App.css";
import React, { useState, useEffect } from "react";
import time from "./Time.module.css";

function App() {
  // State management
  let date = new Date();
  const [second, setSecond] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [session, setSession] = useState("AM");

  //Main core and with clean function
  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()));
      setMinute((prev) => (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()));
      setHour((prev) => (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()));
      setSession((prev) => date.getHours() > 12 && "PM");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  //Dynamic style CSS module
  const secondBar = {
    backgroundImage: `linear-gradient(90deg, transparent ${second / 10}%, #5856d6 50%)`,
    width: `${second * (100 / 60)}%`,
  };

  const minuteBar = {
    backgroundImage: `linear-gradient(90deg, transparent ${second / 10}%, #ff2d55 50%)`,
    width: `${minute * (100 / 60)}%`,
  };

  const hourBar = {
    backgroundImage: `linear-gradient(90deg, transparent ${second / 10}%, #ffcc00 50%)`,
    width: `${hour * (100 / 60)}%`,
  };

  //Loading content
  const loading = <h3 className={time.loading}>loading</h3>;

  return (
    <div className="App">
      <div className={time.wrapper}>
        <h1 className={time.time}>
          {!hour ? "00" : hour}:{!minute ? "00" : minute}:{!second ? "00" : second} {session}
        </h1>
        {!second && loading}
        <div className={time.secondAnimation} style={secondBar}>
          &nbsp;
        </div>

        <div className={time.minuteAnimation} style={minuteBar}>
          &nbsp;
        </div>

        <div className={time.hourAnimation} style={hourBar}>
          &nbsp;
        </div>
      </div>
    </div>
  );
}

export default App;

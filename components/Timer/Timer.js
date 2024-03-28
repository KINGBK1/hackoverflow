import React from "react";

let timer;

String.prototype.lpad = function(padString, length) {
  var str = this;
  while (str.length < length)
      str = padString + str;
  return str;
}

export default function Timer() {
  const [day, setDay] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const endDate = new Date("April 08, 2024 00:00:00").getTime();

  React.useEffect(() => {
    timer = setInterval(function () {
      let current_timestamp = new Date().getTime();
      let t = endDate - current_timestamp;

      if (t >= 0) {
        setDay(Math.floor(t / (1000 * 60 * 60 * 24)));
        setHour(Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinute(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)));
        setSecond(Math.floor((t % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-3xl">
      <div className="countdown_time">
        <div className="md:font-normal font-extrabold single_countdown">
          <h3>{day.toString().lpad("0", 2)}</h3>
          <span className="text-lg">days</span>
        </div>
        <div className="md:font-normal font-bold single_countdown">
          <h3>{hour.toString().lpad("0", 2)}</h3>
          <span>Hours</span>
        </div>
        <div className="md:font-normal font-bold single_countdown">
          <h3>{minute.toString().lpad("0", 2)}</h3>
          <span>Minutes</span>
        </div>
        <div className="md:font-normal font-bold single_countdown">
          <h3>{second.toString().lpad("0", 2)}</h3>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

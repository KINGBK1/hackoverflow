import React from "react";

export default function Timer() {
  const [day, setDay] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const endDate = new Date("March 20, 2025 20:00:00").getTime();

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const t = endDate - now;

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
    <div className="timer-container">
      <style jsx>{`
        @keyframes borderScan {
          0% { border-color: #00ffff; }
          33% { border-color: #ff00ff; }
          66% { border-color: #00ff88; }
          100% { border-color: #00ffff; }
        }

        .countdown_time {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }

        .single_countdown {
          flex: 1 1 120px;
          max-width: 140px;
          height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(0, 255, 255, 0.05);
          border: 3px solid #00ffff;
          border-radius: 15px;
          animation: borderScan 6s linear infinite;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .single_countdown h3 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #00ffff;
          margin: 0;
          font-family: "Courier New", monospace;
          letter-spacing: 3px;
        }

        .single_countdown span {
          margin-top: 5px;
          font-size: 0.9rem;
          color: #b0c4de;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }

        /* ✅ Mobile (simple bold row) */
        .countdown_text {
          display: none;
          text-align: center;
          color: #00ffff;
          font-family: "Courier New", monospace;
          font-weight: bold;
          line-height: 1.4;
        }

        .countdown_text .numbers {
          font-size: 1.8rem;
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .countdown_text .labels {
          font-size: 0.85rem;
          display: flex;
          justify-content: center;
          gap: 25px;
          color: #b0c4de;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .countdown_time {
            display: none;
          }
          .countdown_text {
            display: block;
          }
        }
      `}</style>

      {/* Desktop version */}
      <div className="countdown_time">
        <div className="single_countdown">
          <h3>{day.toString().padStart(2, "0")}</h3>
          <span>Days</span>
        </div>
        <div className="single_countdown">
          <h3>{hour.toString().padStart(2, "0")}</h3>
          <span>Hours</span>
        </div>
        <div className="single_countdown">
          <h3>{minute.toString().padStart(2, "0")}</h3>
          <span>Minutes</span>
        </div>
        <div className="single_countdown">
          <h3>{second.toString().padStart(2, "0")}</h3>
          <span>Seconds</span>
        </div>
      </div>

      {/* Mobile version */}
      <div className="countdown_text">
        <div className="numbers">
          <span>{day.toString().padStart(2, "0")}</span>
          <span>{hour.toString().padStart(2, "0")}</span>
          <span>{minute.toString().padStart(2, "0")}</span>
          <span>{second.toString().padStart(2, "0")}</span>
        </div>
        <div className="labels">
          <span>Days</span>
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

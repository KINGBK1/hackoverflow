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
    const endDate = new Date("March 20, 2025 20:00:00").getTime();

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
            <style jsx>{`
                @keyframes digitFlip {
                    0%, 100% { transform: rotateX(0deg); }
                    50% { transform: rotateX(10deg); }
                }
                @keyframes neonGlow {
                    0%, 100% { 
                        text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
                        box-shadow: 0 0 20px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.1);
                    }
                    50% { 
                        text-shadow: 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor, 0 0 50px currentColor;
                        box-shadow: 0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 30px rgba(0, 255, 255, 0.2);
                    }
                }
                @keyframes borderScan {
                    0% { border-color: #00ffff; }
                    33% { border-color: #ff00ff; }
                    66% { border-color: #00ff88; }
                    100% { border-color: #00ffff; }
                }
                .countdown_time {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .single_countdown {
                    position: relative;
                    background: linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 255, 255, 0.05) 100%);
                    border: 3px solid #00ffff;
                    border-radius: 15px;
                    padding: 20px 30px;
                    min-width: 120px;
                    text-align: center;
                    animation: neonGlow 2s ease-in-out infinite, borderScan 6s linear infinite;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                .single_countdown:hover {
                    transform: translateY(-5px) scale(1.05);
                    box-shadow: 0 0 40px rgba(0, 255, 255, 0.8), inset 0 0 30px rgba(0, 255, 255, 0.3);
                }
                .single_countdown::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    right: -2px;
                    bottom: -2px;
                    background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff88, #00ffff);
                    border-radius: 15px;
                    z-index: -1;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .single_countdown:hover::before {
                    opacity: 0.5;
                    animation: borderRotate 3s linear infinite;
                }
                @keyframes borderRotate {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
                .single_countdown h3 {
                    font-size: 3rem;
                    font-weight: bold;
                    color: #00ffff;
                    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
                    margin: 0;
                    animation: digitFlip 0.6s ease-in-out;
                    font-family: 'Courier New', monospace;
                    letter-spacing: 3px;
                }
                .single_countdown span {
                    display: block;
                    margin-top: 10px;
                    font-size: 0.9rem;
                    color: #b0c4de;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 600;
                    text-shadow: 0 0 5px rgba(176, 196, 222, 0.5);
                }
                .single_countdown:nth-child(1) {
                    border-color: #00ffff;
                }
                .single_countdown:nth-child(1) h3 {
                    color: #00ffff;
                    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
                }
                .single_countdown:nth-child(2) {
                    border-color: #ff00ff;
                    animation-delay: 0.2s;
                }
                .single_countdown:nth-child(2) h3 {
                    color: #ff00ff;
                    text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
                }
                .single_countdown:nth-child(3) {
                    border-color: #00ff88;
                    animation-delay: 0.4s;
                }
                .single_countdown:nth-child(3) h3 {
                    color: #00ff88;
                    text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88;
                }
                .single_countdown:nth-child(4) {
                    border-color: #ffff00;
                    animation-delay: 0.6s;
                }
                .single_countdown:nth-child(4) h3 {
                    color: #ffff00;
                    text-shadow: 0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 30px #ffff00;
                }
                @media (max-width: 768px) {
                    .single_countdown {
                        min-width: 80px;
                        padding: 15px 20px;
                    }
                    .single_countdown h3 {
                        font-size: 2rem;
                    }
                    .single_countdown span {
                        font-size: 0.75rem;
                    }
                }
            `}</style>
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
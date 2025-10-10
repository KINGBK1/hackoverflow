import React from 'react';

export default function GlitchText({ children, className = '', style = {} }) {
  return (
    <h3 className={`glitch-text ${className}`} style={style} data-text={children}>
      {children}
      <style jsx>{`
        @keyframes glitch-anim {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(-2px, 2px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(-2px, -2px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(2px, 2px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(2px, -2px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(0);
          }
        }

        @keyframes glitch-anim-2 {
          0% {
            clip-path: inset(65% 0 15% 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(22% 0 58% 0);
            transform: translate(2px, -2px);
          }
          40% {
            clip-path: inset(81% 0 8% 0);
            transform: translate(2px, 2px);
          }
          60% {
            clip-path: inset(47% 0 23% 0);
            transform: translate(-2px, -2px);
          }
          80% {
            clip-path: inset(91% 0 2% 0);
            transform: translate(-2px, 2px);
          }
          100% {
            clip-path: inset(34% 0 55% 0);
            transform: translate(0);
          }
        }

        .glitch-text {
          position: relative;
          color: #aaffff;
          font-weight: bold;
          text-shadow: 
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 30px #0ff;
          animation: glitch-skew 1s infinite linear alternate-reverse;
        }

        @keyframes glitch-skew {
          0% {
            transform: skew(0deg);
          }
          10% {
            transform: skew(-1deg);
          }
          20% {
            transform: skew(0deg);
          }
          30% {
            transform: skew(1deg);
          }
          40% {
            transform: skew(0deg);
          }
          50% {
            transform: skew(-1deg);
          }
          60% {
            transform: skew(0deg);
          }
          70% {
            transform: skew(1deg);
          }
          80% {
            transform: skew(0deg);
          }
          90% {
            transform: skew(-1deg);
          }
          100% {
            transform: skew(0deg);
          }
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          animation: glitch-anim 2s infinite linear alternate-reverse;
          color: #ff00ff;
          text-shadow: 
            -2px 0 #ff00ff,
            0 0 10px #ff00ff;
          z-index: -1;
        }

        .glitch-text::after {
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
          color: #00ffff;
          text-shadow: 
            2px 0 #00ffff,
            0 0 10px #00ffff;
          z-index: -2;
        }

        @media (max-width: 768px) {
          .glitch-text::before,
          .glitch-text::after {
            animation-duration: 3s;
          }
        }
      `}</style>
    </h3>
  );
}
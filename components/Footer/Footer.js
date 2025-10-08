import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="footer footer_bg_1"
      style={{
        background: "linear-gradient(180deg, #041228 0%, #020611 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style jsx>{`
        @keyframes footerGlow {
          0%,
          100% {
            border-color: rgba(0, 255, 255, 0.3);
            box-shadow: 0 -2px 20px rgba(0, 255, 255, 0.2);
          }
          50% {
            border-color: rgba(0, 255, 255, 0.6);
            box-shadow: 0 -2px 30px rgba(0, 255, 255, 0.4);
          }
        }
        @keyframes linkHover {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        .footer {
          border-top: 2px solid rgba(0, 255, 255, 0.3);
          animation: footerGlow 3s ease-in-out infinite;
          padding-top: 50px;
        }
        .footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #00ffff,
            #ff00ff,
            #00ff88,
            transparent
          );
          animation: scanLine 3s linear infinite;
        }
        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .footer_grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          text-align: left;
          color: #b0c4de;
        }
        .footer_title {
          color: #00ffff !important;
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
          font-weight: bold;
          font-size: 1.4rem;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }
        .footer_title::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50%;
          height: 2px;
          background: linear-gradient(90deg, #00ffff, transparent);
          box-shadow: 0 0 10px #00ffff;
        }
        .footer_links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer_links li {
          margin: 10px 0;
        }
        .footer_links a {
          color: #b0c4de;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .footer_links a:hover {
          color: #00ffff;
          text-shadow: 0 0 10px #00ffff;
          animation: linkHover 0.6s ease-in-out infinite;
        }
        .footer_bottom {
          text-align: center;
          padding: 20px 0;
          font-size: 0.9rem;
          color: #b0c4de;
          border-top: 1px solid rgba(0, 255, 255, 0.1);
          margin-top: 40px;
        }
        .footer_logo {
          display: block;
          margin: 10px auto;
          height: 50px;
          animation: spin 10s linear infinite;
        }
        // @keyframes spin {
        //   0% {
        //     transform: rotate(0deg);
        //   }
        //   100% {
        //     transform: rotate(360deg);
        //   }
        // }
        .footer_heart {
          color: #ff69b4;
          animation: heartbeat 1.5s infinite;
        }
      `}</style>

      <div className="container">
        <div className="footer_grid">
          {/* Follow Us */}
          <div className="footer_section">
            <h3 className="footer_title">Follow Us</h3>
            <div className="footer_links">
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Links */}
          <div className="footer_section">
            <h3 className="footer_title">Links</h3>
            <div className="footer_links">
              <ul>
                <li>
                  <Link href="/schedule">Schedule</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Venue */}
          <div className="footer_section">
            <h3 className="footer_title">Venue</h3>
            <p>Online (Discord)</p>
            <p>National Institute of Technology, Durgapur</p>
          </div>
        </div>

        <div className="footer_bottom">
          <img
            src="/img/IMG-20240307-WA0009.jpg"
            alt="Logo"
            className="footer_logo"
          />
          <p>
            Aarohan, {new Date().getFullYear()} | Made with{" "}
            <span className="footer_heart">♥</span> by Team Aavishkar
          </p>
        </div>
      </div>
    </footer>
  );
}

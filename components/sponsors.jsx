import React from "react";
import Link from "next/link";

export default function Sponsors() {
  return (
    <React.Fragment>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.2); }
          50% { box-shadow: 0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3); }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .sponsor-card {
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 255, 255, 0.02) 100%);
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: slide-in-up 0.6s ease-out;
        }

        .sponsor-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #00ffff, #ff00ff, #00ff88, #00ffff);
          background-size: 300% 300%;
          border-radius: 15px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.4s ease;
          animation: border-flow 3s ease infinite;
        }

        .sponsor-card:hover::before {
          opacity: 1;
        }

        .sponsor-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.2);
          border-color: rgba(0, 255, 255, 0.6);
        }

        .sponsor-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .sponsor-card:hover .sponsor-logo-wrapper {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .sponsor-logo {
          max-height: 80px;
          width: auto;
          transition: all 0.3s ease;
          filter: grayscale(0%);
        }

        .sponsor-card:hover .sponsor-logo {
          animation: float 2s ease-in-out infinite;
        }

        .neon-title {
          color: #00ffff;
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
          font-weight: bold;
          font-size: clamp(2rem, 5vw, 3rem);
          text-align: center;
          margin-bottom: 3rem;
          animation: slide-in-up 0.8s ease-out;
        }

        .sponsors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (max-width: 768px) {
          .sponsors-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .sponsor-card {
            padding: 1.5rem;
          }

          .sponsor-logo {
            max-height: 60px;
          }
        }

        .section-container {
          background: linear-gradient(180deg, #020611 0%, #041228 50%, #020611 100%);
          padding: 80px 0;
          position: relative;
        }

        .section-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ffff, transparent);
        }

        .section-container::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff00ff, transparent);
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }
        .delay-7 { animation-delay: 0.7s; }
      `}</style>

      <div className="section-container">
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h3 className="neon-title">Our Sponsors</h3>

          <div className="sponsors-grid">
            {/* <Link href="https://polygon.technology/" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card delay-1">
                <div className="sponsor-logo-wrapper">
                  <img
                    alt="Polygon Logo"
                    src="/Polygon.png"
                    className="sponsor-logo"
                  />
                </div>
              </div>
            </Link> */}

            <Link href="https://ethindia.co/" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card delay-2">
                <div className="sponsor-logo-wrapper">
                  <img
                    alt="ETHINDIA LOGO"
                    src="/ethindia-dark.png"
                    className="sponsor-logo"
                  />
                </div>
              </div>
            </Link>

            {/* <Link href="https://replit.com/" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card delay-3">
                <div className="sponsor-logo-wrapper">
                  <img
                    alt="Replit Logo"
                    src="/Replit-light-background.png"
                    className="sponsor-logo"
                  />
                </div>
              </div>
            </Link> */}

            {/* <Link href="https://wolframlanguage.org/" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card delay-4">
                <div className="sponsor-logo-wrapper">
                  <img
                    alt="Wolfram Logo"
                    src="/wolf.jpg"
                    className="sponsor-logo"
                  />
                </div>
              </div>
            </Link> */}

            {/* <Link href="https://solana.com/" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card delay-5">
                <div className="sponsor-logo-wrapper">
                  <img
                    alt="Solana Logo"
                    src="/Solana-Colored.svg"
                    className="sponsor-logo"
                  />
                </div>
              </div>
            </Link> */}

            {/* <Link href="https://filecoin.io" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card delay-6">
                <div className="sponsor-logo-wrapper">
                  <img
                    alt="Filecoin Logo"
                    src="/Filecoin.png"
                    className="sponsor-logo"
                  />
                </div>
              </div>
            </Link> */}

            {/* <Link href="https://digitalocean.com" target="_blank" rel="noopener noreferrer">
              <div className="sponsor-card delay-7">
                <div className="sponsor-logo-wrapper">
                  <img
                    alt="DigitalOcean Logo"
                    src="/digital_ocean.png"
                    className="sponsor-logo"
                  />
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}